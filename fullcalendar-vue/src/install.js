import FullCalendarComponent from './FullCalendar'

/*
Registers the component globally if appropriate.
This modules exposes the component AND an install function.

Derived from:
https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html
*/

let installed = false

// declare install function executed by Vue.use()
export function install(Vue) {
  if (!installed) {
    installed = true
    Vue.component('FullCalendar', FullCalendarComponent)
  }
}

// detect a globally availble version of Vue (eg. in browser via <script> tag)
let GlobalVue
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}

// auto-install if possible
if (GlobalVue) {
  GlobalVue.use({
    install
  })
}

// to allow use as module (npm/webpack/etc.) export component
export default FullCalendarComponent
