/**
 * @file 浏览器开发者工具tab内容
 */

import { createApp } from 'vue'
import App from './DevTools.vue'

chrome.devtools.panels.create('VueCrx', '', '../../devtools.html', function () {
  console.log('devtools panel create')
})

createApp(App).mount('#app')
