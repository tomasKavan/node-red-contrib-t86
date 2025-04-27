import { createApp } from 'vue'

import DimmLight from './ui-dimm-light/DimmLight.vue'

createApp(DimmLight, {
  id: 'aaaa',
  props: {
    name: 'aaaa',
    group: 'aaaa',
    order: 0,
    width: 3,
    height: 6,
    label: 'bbbbbb',
    brightnessMin: 1,
    brightnessMax: 254,
    wtype: 'dimm.temp',
    passthru: false
  },
  state: {
    visible: true,
    enabled: true
  }
}).mount('#app')