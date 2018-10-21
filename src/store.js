import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navTitle:"CHEN's Blog",
    tag: undefined
  },
  getters: {
    tagId: state => state.tag ? state.tag.id : undefined
  },
  mutations: {
    setNavTitle(state, navTitle) {
      if(navTitle && navTitle.length > 0){
        state.navTitle = navTitle;
      } else {
        console.error(`[Vuex mutaiions] error,please check setNavTitle`)
      }
    },
    setTag(state, tag) {
      if(tag) {
        state.tag = tag
      } else {
        console.error(`[Vuex mutaiions] error,please check setTag`)
      }
    }
  },
  actions: {

  }
})
