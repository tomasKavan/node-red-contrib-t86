<script setup lang="ts">
import { ref, computed, inject, watch, reactive } from "vue"
import { useStore } from "vuex"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library, icon } from "@fortawesome/fontawesome-svg-core"
import { faLightbulb as solidLightbulb } from "@fortawesome/free-solid-svg-icons"
import { faLightbulb as regularLightbulb } from "@fortawesome/free-regular-svg-icons"
import { WProps, WType } from "../../dimm-light-types"

library.add(solidLightbulb, regularLightbulb)

const TEMPERATURE_MIN = 2200
const TEMPERATURE_MAX = 6000
const TEMPERATURE_RANGE = TEMPERATURE_MAX - TEMPERATURE_MIN
const UPDATE_DEBOUNCE_MS = 200
const AFTER_DRAG_UPDATE_DELAY_MS = 500

type State = {
  state: boolean,
  level: number,
  temp: number
}

enum DragDirecton {
  None = 'none',
  NotDecided = 'notDecided',
  Horizontal = 'horizontal',
  Vertical = 'vertical',
  Invalid = 'invalid'
}

type Point = {
  x: number,
  y: number
}

type Rect = {
  width: number,
  height: number
}

type DragState = {
  direction: DragDirecton,
  begin: {
    start: Point,
    rect: Rect,
    ballast: State
  }
}

type WState = {
  visible: boolean,
  enabled: boolean
}

const props = defineProps<{
  id: string,
  props: WProps,
  state: WState
}>()

// Fix of Node-RED inability to parse Node attributes as numbers
const pProps = computed<WProps>(() => {
  const res = {...props.props}

  if (typeof res.brightnessMin === 'string') res.brightnessMin = parseInt(res.brightnessMin)
  if (typeof res.brightnessMax === 'string') res.brightnessMax = parseInt(res.brightnessMax)
  if (typeof res.order === 'string') res.order = parseInt(res.order)
  if (typeof res.width === 'string') res.width = parseInt(res.width)
  if (typeof res.height === 'string') res.height = parseInt(res.height)

  return res
})

// === helper methods ===

const calcDeltaOfEvent = (event: MouseEvent | TouchEvent): Point => {
  const xt = "touches" in event ? event.touches[0].clientX : event.clientX
  const yt = "touches" in event ? event.touches[0].clientY : event.clientY
  const x = dragging.value.begin.start.x - xt
  const y = dragging.value.begin.start.y - yt
  return { x, y }
}

const createEmptyState = (): State => {
  return { state: true, level: 50, temp: TEMPERATURE_MIN }
}

const createEmptyDragbeginState = (): DragState => {
  return {
    direction: DragDirecton.None,
    begin: {
      start: { x: 0, y: 0 },
      rect: { width: 0, height: 0 },
      ballast: createEmptyState()
    }
  }
}

// It keeps visualState on actionState and wait for ballast to respond with new levels.
// See condition in visualState computed property definition.
const scheduleDragGraceTo = () => {
  clearDragGraceTo()
  dragGraceTo.value = setTimeout(onDragGraceTo, AFTER_DRAG_UPDATE_DELAY_MS)
}

const clearDragGraceTo = () => {
  if (dragGraceTo.value) {
    clearTimeout(dragGraceTo.value)
  }
  dragGraceTo.value = undefined
}

const levelToPercent = (lvl: number) => {
  const range = pProps.value.brightnessMax - pProps.value.brightnessMin
  const norm = lvl - pProps.value.brightnessMin
  const ratio = norm / range
  return Math.min(100, Math.max(0, Math.round(ratio * 100)))
}

const statusToText = (status: boolean) => {
  return status ? 'ON' : 'OFF'
}

// ===

const store = useStore()
const dataState: any = inject('$dataTracker')
const socket: any = inject('$socket')

// ===
dataState(props.id)

// === Computed variables === 


const lastMsg = ref<any>(undefined)
watch (store.state.data, () => {
  lastMsg.value = store.state.data.messages[props.id]
})

// === Reactive variables === 
const ballastState = ref<State>(createEmptyState())
const actionState = ref<State>(createEmptyState())
const dragging = ref<DragState>(createEmptyDragbeginState())
const dragGraceTo = ref<ReturnType<typeof setTimeout> | undefined>(undefined)
const lastActionSendAt = ref<Date>(new Date)
const dimmerBarElt = ref<HTMLElement | null>(null)

// === User interface computed variables ===
const visualState = computed<State>(() => {
  if (dragging.value.direction === DragDirecton.None && !dragGraceTo.value) {
    return reactive(ballastState.value)
  }
  return reactive(actionState.value)
})

const switchTop = computed<string>(() => {
  if (visualState.value.state) {
    return '0%'
  }
  return 'calc(60% - 16px)'
})

// Icon of the lightbulb based on state
const lightbulbIcon = computed<string[]>(() => {
  return visualState.value.state ? ['fas', 'lightbulb'] : ['far', 'lightbulb']
})

// Color of the bar filler for temp based
const tempColor = ref<string>('#ffffff')
const updateColor = () => {
  let ratio = (2700 - TEMPERATURE_MIN) / TEMPERATURE_RANGE

  if (pProps.value.wtype === WType.DimmTemp) {
    const t = Math.min(TEMPERATURE_MAX, Math.max(visualState.value.temp, TEMPERATURE_MIN))
    const p = (t - TEMPERATURE_MIN) / TEMPERATURE_RANGE
    ratio = Math.max(0, Math.min(1, p))
  }
  //console.log(visualState.value.temp + " " + )
  const r = Math.min(255, Math.max(173, Math.round(255 * (1 - ratio) + 173 * ratio)))
  const g = Math.min(216, Math.max(193, Math.round(193 * (1 - ratio) + 216 * ratio)))
  const b = Math.min(255, Math.max(67, Math.round(67 * (1 - ratio) + 255 * ratio)))
  tempColor.value = `rgb(${r},${g},${b})`
}
watch (() => visualState.value.temp, updateColor)
updateColor()

// Height of the filler
const fillHeight = ref<string>('0')
watch ([() => visualState.value.level, () => visualState.value.state], () => {
  let h = 0
  if (pProps.value.wtype === WType.Dimm || pProps.value.wtype === WType.DimmTemp) {
    h = visualState.value.state ? levelToPercent(visualState.value.level) : 0
  } 
  return fillHeight.value = h.toString()
})

// === Watchers ===
// update ballast state - new state message arrived
watch(() => lastMsg.value, () => {
  if (lastMsg.value && lastMsg.value.payload) {
    ballastState.value = {
      state: !!lastMsg.value.payload.state,
      level: lastMsg.value.payload.level || pProps.value.brightnessMin,
      temp: lastMsg.value.payload.temp || TEMPERATURE_MIN
    }
  }
})

// === Events ===

const onDragStart = (event: MouseEvent | TouchEvent) => {
  if (!dimmerBarElt.value) return

  clearDragGraceTo()
  const rect = dimmerBarElt.value.getBoundingClientRect()

  dragging.value = {
    direction: DragDirecton.NotDecided,
    begin: {
      start : { 
        x: 'touches' in event ? event.touches[0].clientX : event.clientX,
        y: 'touches' in event ? event.touches[0].clientY : event.clientY
      },
      rect,
      ballast: {
        state: ballastState.value.state,
        level: ballastState.value.level,
        temp: ballastState.value.temp
      }
    }
  }

  actionState.value = {
    state: ballastState.value.state,
    level: ballastState.value.level,
    temp: ballastState.value.temp
  }

  document.addEventListener("mousemove", onDragUpdate)
  document.addEventListener("mouseup", onDragEnded)
  document.addEventListener("touchmove", onDragUpdate)
  document.addEventListener("touchend", onDragEnded)
}

const onDragUpdate = (event: MouseEvent | TouchEvent) => {
  switch (dragging.value.direction) {
    case DragDirecton.None: return
    case DragDirecton.NotDecided: decideDragDirection(event); // Don't break here! We want to start react immediately
    case DragDirecton.Horizontal: updateTemperature(event); break
    case DragDirecton.Vertical: updateBrightness(event); break
    case DragDirecton.Invalid: cancelDrag(); break // Drag is not allowed, but happend. Cancel drag without any action.
  }
}

const onDragEnded = (event: MouseEvent | TouchEvent) => {
  // If direction wasn't decided, it's click/press.
  // If type is On/Off, we fire toggle.
  // Else we control dimming (level)
  if (dragging.value.direction === DragDirecton.NotDecided) {
    if (pProps.value.wtype === WType.OnOff) {
      actionState.value.state = !ballastState.value.state
      actionState.value.level = actionState.value.state ? pProps.value.brightnessMax : 0
    } else {
      const yt = "touches" in event ? event.touches[0].clientY : event.clientY
      const rect = dimmerBarElt.value?.getBoundingClientRect()
      let locYt = yt - (rect?.top || 0)
      let ratio = 1 - (Math.abs(locYt) / (rect?.height || 1))
      let level = pProps.value.brightnessMin + Math.round((pProps.value.brightnessMax - pProps.value.brightnessMin) * ratio)
      actionState.value.state = ratio > 0.1
      if (ratio > 0.9) {
        level = pProps.value.brightnessMax
      }
      actionState.value.level = actionState.value.state ? level : pProps.value.brightnessMin
    }
  }
  
  onUpdateActionState(true)
  scheduleDragGraceTo()
  cancelDrag()
}

const onUpdateActionState = (force?: boolean) => {
  const date = new Date()
  if (date.getTime() - lastActionSendAt.value.getTime() > UPDATE_DEBOUNCE_MS || force) {
    const payload = {
      event: 'set',
      value: {
        level: actionState.value.state ? pProps.value.brightnessMax : 0,
        state: actionState.value.state,
        temp: 0
      }
    }
    if (pProps.value.wtype === WType.Dimm || pProps.value.wtype === WType.DimmTemp) {
      payload.value.level = actionState.value.level
    }
    if (pProps.value.wtype === WType.DimmTemp) {
      payload.value.temp = actionState.value.temp
    }

    // Send only if the state differs from the one saved in ballast
    if (
      payload.value.state !== ballastState.value.state ||
      payload.value.level !== ballastState.value.level ||
      payload.value.temp !== ballastState.value.temp
    ) {
      socket.emit('widget-change', props.id, { payload })
    }
    lastActionSendAt.value = date
  }
}
watch(actionState.value, () => { onUpdateActionState() })

const onDragGraceTo = () => {
  clearDragGraceTo()
}

// === Drag handle functions ===

const decideDragDirection = (event: MouseEvent | TouchEvent) => {
  const delta = calcDeltaOfEvent(event)

  // In case of on/off button there is no need to lock - only push/click is available
  if (pProps.value.wtype === WType.OnOff) {
    dragging.value.direction = DragDirecton.Invalid
    return 
  }

  if (delta.y === 0 && delta.x === 0) return

  // Lock drag to vertical or horizontal based on initial movement
  // If wtype is dimmable and temp we need to decide. Otherwise we decide based on wtype
  if (pProps.value.wtype === WType.DimmTemp) {
    dragging.value.direction = Math.abs(delta.x) > Math.abs(delta.y)
    ? DragDirecton.Horizontal
    : DragDirecton.Vertical
  } else {
    dragging.value.direction = DragDirecton.Vertical
  }
}

const updateTemperature = (event: MouseEvent | TouchEvent) => {
  const delta = calcDeltaOfEvent(event)
  const ratio = delta.x / dragging.value.begin.rect.width
  actionState.value.temp = Math.max(
    TEMPERATURE_MIN,
    Math.min(
      TEMPERATURE_MAX, 
      dragging.value.begin.ballast.temp - Math.round(
         ratio * TEMPERATURE_RANGE
      ))
  )
}

const updateBrightness = (event: MouseEvent | TouchEvent) => {
  const delta = calcDeltaOfEvent(event)
  const lvl = dragging.value.begin.ballast.level + Math.round(
    delta.y / dragging.value.begin.rect.height
    * (pProps.value.brightnessMax - pProps.value.brightnessMin)
  )

  actionState.value.level = Math.max(
    pProps.value.brightnessMin, 
    Math.min(pProps.value.brightnessMax, lvl)
  )
  actionState.value.state = !(!lvl || lvl < pProps.value.brightnessMin)
}

const cancelDrag = () => {
  dragging.value = createEmptyDragbeginState()

  document.removeEventListener("mousemove", onDragUpdate)
  document.removeEventListener("mouseup", onDragEnded)
  document.removeEventListener("touchmove", onDragUpdate)
  document.removeEventListener("touchend", onDragEnded)
}

</script>

<template>
  <div class="dimmer-widget">
    <div class="name">{{ pProps.label }}</div>
    <div class="status" v-if="pProps.wtype !== WType.OnOff">{{ visualState.state ? levelToPercent(visualState.level) + '%' : 'OFF' }}</div>
    <div class="status" v-else>{{ statusToText(visualState.state) }}</div>
    <div 
      class="dimmer-bar" 
      ref="dimmerBarElt"
      @mousedown="onDragStart" 
      @touchstart="onDragStart"
    >
      <div 
        v-if="pProps.wtype !== WType.OnOff"
        class="dimmer-fill" 
        :style="{ height: fillHeight + '%', backgroundColor: tempColor }"
      ></div>
      <FontAwesomeIcon 
        v-if="pProps.wtype !== WType.OnOff"
        :icon="lightbulbIcon" 
        class="lightbulb-icon">
      </FontAwesomeIcon>

      <div 
        v-if="pProps.wtype === WType.OnOff"
        class="dimmer-switch" 
        :style="{ top: switchTop }"
      >
        <FontAwesomeIcon 
          :icon="lightbulbIcon" 
          class="lightbulb-icon">
        </FontAwesomeIcon>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.dimmer-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 60px;
  height: 100%;
  min-height: 200px;
  user-select: none;
}

.lightbulb-icon {
  font-size: 28px;
  transition: color 0.3s ease-in-out;
  position:absolute;
  bottom: 20px;
  left: 50%;
  width: 40px;
  height: 32px;
  display: block;
  margin-left: -20px;
  color: white;
}

.dimmer-bar {
  min-width: 60px;
  min-height: 120px;
  border-radius: 15px;
  background: linear-gradient(to bottom, #444, #111);
  position: relative;
  overflow: hidden;
  touch-action: none;
}

.dimmer-fill {
  position: absolute;
  bottom: 0;
  width: 100%;
  transition: height 0.1s ease-out;
  background-color: rgb(255, 204, 0);
}

.dimmer-switch {
  position: absolute;
  width: calc(100% - 16px);
  left: 8px;
  height: 40%;
  margin-top: 8px;
  transition: top 0.1s ease-out;
  background-color: rgb(255, 204, 0);
  border-radius: 10px;
}

.dimmer-switch .lightbulb-icon {
  top: 8px;
  height: 32px;
}

.name {
  margin-top: 10px;
  font-size: 16px;
  color: white;
}

.status {
  margin-top: 4px;
  font-size: 12px;
  color: lightgray;
  margin-bottom: 20px;
}
</style>