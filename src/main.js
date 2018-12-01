// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'animate.css'
import 'normalize.css'
import chroma from 'chroma-js'
import Vue from 'vue'
import Vuebar from 'vuebar'
import App from './App'
import router from './router'

import Axios from 'axios'
import VueAxios from 'vue-axios'

import _ from 'lodash'

import 'ag-grid/src/styles/ag-grid.scss'
import 'ag-grid/src/styles/ag-theme-balham-dark.scss'
import 'ag-grid/src/styles/ag-theme-material.scss'

window._ = _


const debug = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = debug
Vue.config.performance = debug

Vue.use(VueAxios, Axios)

// Add custom scrollbar so it doesn't make things look ewwie
Vue.use(Vuebar)

// These are globally added to ALL components, beware
Vue.mixin({
  data() {
    return {
      colors: chroma.scale(chroma.brewer.Set3).colors,
      _debug: debug
    }
  }
})

if (debug) {
  Vue.mixin({
    methods: {
      openInEditor() {
        return Axios.get('__open-in-editor', {
          params: {
            file: this.$options.__file
          }
        })
      }
    }
  })
}

/* eslint-disable no-new */
// you can see what
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
