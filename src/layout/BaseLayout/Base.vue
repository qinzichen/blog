<template>
    <div class="app-container">
        <!--对路由中声明了hideHeader的页面隐藏app-head组件-->
        <app-head v-if="!hideHead"/>
        <app-main>
            <slot></slot>
        </app-main>
    </div>
</template>
<script>
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
export default {
    components: {
        "app-head": Header,
        "app-main": Main,
        "app-foot": Footer
    },
    props: {
        head: Boolean
    }
}
</script>


<style lang="less" scoped>
.app-container {
  height: 100%;
  width: 100%;
  padding-top: 108px;
}

@media (max-width: 768px) {
  .app-container {
      padding-top: 58px;
  }
}
</style>