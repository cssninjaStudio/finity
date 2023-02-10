import '@purge-icons/generated'
import '@vidstack/player/define/vds-media.js'
import '@vidstack/player/define/vds-video.js'
import '@vidstack/player/define/vds-aspect-ratio.js'
import '@vidstack/player/define/vds-poster.js'
import 'swiper/css/bundle'

//Alpine and plugins import
import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
import collapse from '@alpinejs/collapse'
import persist from '@alpinejs/persist'
import Tooltip from '@ryangjchandler/alpine-tooltip'

import './demo'
import './components'
import './pages'
import { insertBgImages } from './utils/bg'

window.Alpine = Alpine
//Init intersect plugin
Alpine.plugin(intersect)
//Init collapse plugin
Alpine.plugin(collapse)
//Init persist plugin
Alpine.plugin(persist)
//Init tooltip plugin
Alpine.plugin(Tooltip)
//Init Alpine store
Alpine.store('app', {
  init() {
    this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  },
  isDark: Alpine.$persist(false),
  activeApp: Alpine.$persist('dashboard'),
  isSidebarActive: false,
  isSidebarMobileActive: false,
})
//Start Alpine
Alpine.start()

document.onreadystatechange = function () {
  if (document.readyState == 'complete') {
    // Replace bg images
    insertBgImages()
  }
}
