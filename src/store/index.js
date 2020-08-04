import Vue from 'vue'
import Vuex from 'vuex'
import Registration from './modules/Registration'
import LogIn from './modules/LogIn'
import Drawer from './modules/NavigationDrawer'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Registration,LogIn,Drawer
  }
})
