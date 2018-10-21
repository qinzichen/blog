<template>
  <app-basis>
    <!--对路由中声明了hideHeader的页面隐藏app-head组件-->
    <app-head v-if="!$route.meta.hideHeader"/>
    <app-main>
      <!--缓存name为blog的组件-->
      <keep-alive include="blog">
        <router-view/>
      </keep-alive>
    </app-main>
  </app-basis>
</template>
<script>

import { App, Header, Main, Footer} from "@/layout"
export default {
  components: {
    "app-basis": App,
    "app-head": Header,
    "app-main": Main,
    "app-foot": Footer
  }
}
</script>
