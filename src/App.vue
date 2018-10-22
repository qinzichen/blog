<template>
  <component :is="layout" :hideHead="$route.meta.hideHeader">
      <!--缓存name为blog的组件-->
      <keep-alive include="blog">
        <router-view/>
      </keep-alive>
  </component>
</template>
<script>

// import { App, Header, Main, Footer} from "@/layout"
import {BaseLayout, AdminLayout} from "@/layouts"
export default {
  components: {
    BaseLayout,
    AdminLayout
    // "app-basis": App,
    // "app-head": Header,
    // "app-main": Main,
    // "app-foot": Footer
  },
  data() {
    return {

    }
  },
  computed: {
    layout() {
      return this.$store.state.layout
    }
  }
}
</script>
