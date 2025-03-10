<script setup lang="ts">
import { ref, computed, inject, watch } from "vue"
import { useStore } from "vuex"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library, icon } from "@fortawesome/fontawesome-svg-core"
import { faLightbulb as solidLightbulb } from "@fortawesome/free-solid-svg-icons"
import { faLightbulb as regularLightbulb } from "@fortawesome/free-regular-svg-icons"
import { WProps } from "../dimm-light-types"

library.add(solidLightbulb, regularLightbulb)

const BRIGHTNESS_MIN = 0
const BRIGHTNESS_MAX = 100
const TEMPERATURE_MIN = 2700
const TEMPERATURE_MAX = 4000
const BRIGHTNESS_RANGE = BRIGHTNESS_MAX - BRIGHTNESS_MIN
const TEMPERATURE_RANGE = TEMPERATURE_MAX - TEMPERATURE_MIN

enum DragDirecton {
  None,
  NotDecided,
  Horizontal,
  Vertical
}

type Point = {
  x: number,
  y: number
}

type Rect = {
  width: number,
  height: number
}

type Begin = {
  start: Point,
  rect: Rect,
  brightness: number,
  temperature: number
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

const store = useStore()
const lastMsg = computed(() => store.state.data.messages)

watch(lastMsg, () => {
 console.log(lastMsg.value)
})

const dataState: any = inject('$dataTracker')

const brightness = ref<number>(50) // Default 50% brightness
const temperature = ref<number>(3000) // Default temperature
const dragging = ref<DragDirecton>(DragDirecton.None)
const begin = ref<Begin | null>(null)
const dimmerBarElt = ref<HTMLElement | null>(null)

const lightbulbIcon = computed<string[]>(() => {
  return brightness.value > 0 ? ['fas', 'lightbulb'] : ['far', 'lightbulb']
})

const tempColor = computed<string>(() => {
  const ratio = (temperature.value - TEMPERATURE_MIN) / TEMPERATURE_RANGE
  const r = Math.round(255 * (1 - ratio) + 173 * ratio)
  const g = Math.round(193 * (1 - ratio) + 216 * ratio)
  const b = Math.round(67 * (1 - ratio) + 255 * ratio)
  return `rgb(${r},${g},${b})`
})

function updateDrag(event: MouseEvent | TouchEvent) {
  switch (dragging.value) {
    case DragDirecton.None: return
    case DragDirecton.NotDecided: lockDragDirection(event); // Don't break! We want to start react immediately
    case DragDirecton.Horizontal: updateTemperature(event); break
    case DragDirecton.Vertical: updateBrightness(event); break
  }
}

function lockDragDirection(event: MouseEvent | TouchEvent) {
  if (!begin.value) return

  const x = "touches" in event ? event.touches[0].clientX : event.clientX;
  const y = "touches" in event ? event.touches[0].clientY : event.clientY;
  const deltaX = Math.abs(begin.value.start.x - x);
  const deltaY = Math.abs(begin.value.start.y - y);

  // Lock drag to vertical or horizontal based on initial movement
  dragging.value = deltaX > deltaY ? DragDirecton.Horizontal : DragDirecton.Vertical
}

function updateTemperature(event: MouseEvent | TouchEvent) {
  if (!begin.value) return

  const x = 'touches' in event ? event.touches[0].clientX : event.clientX
  const deltaX = begin.value.start.x - x
  const newTemp = Math.max(
    TEMPERATURE_MIN,
    Math.min(
      TEMPERATURE_MAX, 
      begin.value.temperature + (deltaX / begin.value.rect.width) * TEMPERATURE_RANGE)
  )
  temperature.value = newTemp
}

function updateBrightness(event: MouseEvent | TouchEvent) {
  if (!begin.value) return

  const y = 'touches' in event ? event.touches[0].clientY : event.clientY
  const deltaY = begin.value.start.y - y
  const newBrightness = Math.max(
    BRIGHTNESS_MIN,
    Math.min( 
      BRIGHTNESS_MAX, 
      begin.value.brightness + (deltaY / begin.value.rect.height) * BRIGHTNESS_RANGE 
    )
  )
  brightness.value = Math.round(newBrightness)
}

function startDragging(event: MouseEvent | TouchEvent) {
  if (!dimmerBarElt.value) return
  
  const rect = dimmerBarElt.value.getBoundingClientRect()

  begin.value = {
    start: { 
      x: 'touches' in event ? event.touches[0].clientX : event.clientX,
      y: 'touches' in event ? event.touches[0].clientY : event.clientY
    },
    rect,
    brightness: brightness.value,
    temperature: temperature.value
  }
  dragging.value = DragDirecton.NotDecided

  document.addEventListener("mousemove", updateDrag)
  document.addEventListener("mouseup", stopDragging)
  document.addEventListener("touchmove", updateDrag)
  document.addEventListener("touchend", stopDragging)
}

function stopDragging() {
  dragging.value = DragDirecton.None
  begin.value = null

  document.removeEventListener("mousemove", updateDrag)
  document.removeEventListener("mouseup", stopDragging)
  document.removeEventListener("touchmove", updateDrag)
  document.removeEventListener("touchend", stopDragging)
}

const onInput = (msg: any) => {
  console.log(`Input: ${JSON.stringify(msg)}`)
}

const onLoad = (msg: any, state: any) => {
  console.log(`Load msg: ${msg && JSON.stringify(msg)}, state: ${state}`)
}

const onDynProps = (msg: any) => {

  console.log(`Dyn props: ${JSON.stringify(msg)}`)
}

dataState(props.id, onInput, onLoad, onDynProps)

</script>

<template>
  <div class="dimmer-widget">
    <div class="name">{{ props.props.label }}</div>
    <div class="status">{{ brightness }}%</div>
    <div 
      class="dimmer-bar" 
      ref="dimmerBarElt"
      @mousedown="startDragging" 
      @touchstart="startDragging"
    >
      <div 
        class="dimmer-fill" 
        :style="{ height: brightness + '%', backgroundColor: tempColor }"
      ></div>
      <FontAwesomeIcon 
        :icon="lightbulbIcon" 
        class="lightbulb-icon">
      </FontAwesomeIcon>
    </div>
  </div>
</template>

<style lang="css">
.dimmer-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  user-select: none;
  font-family: sans-serif;
}

.lightbulb-icon {
  font-size: 32px;
  transition: color 0.3s ease-in-out;
  position:absolute;
  bottom: 20px;
  left: 50%;
  width: 40px;
  height: 40px;
  display: block;
  margin-left: -20px;
  color: white;
}

.dimmer-bar {
  width: 80px;
  height: 200px;
  border-radius: 15px;
  background: linear-gradient(to bottom, #444, #111);
  position: relative;
  overflow: hidden;
  touch-action: none;
  margin-top: 30px;
}

.dimmer-fill {
  position: absolute;
  bottom: 0;
  width: 100%;
  transition: height 0.1s ease-out;
  background-color: rgb(255, 204, 0);
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
}
</style>