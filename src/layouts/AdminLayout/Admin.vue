<template>
    <div class="admin-container">
        <!--对路由中声明了hideHeader的页面隐藏app-head组件-->
        <admin-head v-if="!hideHead"/>
        <admin-main>
            <slot></slot>
        </admin-main>
    </div>
</template>
<script>
import Header from './Header'
import Main from './Main'
export default {
    components: {
        "admin-head": Header,
        "admin-main": Main
    },
    props: {
        hideHead: Boolean
    }
}
</script>


<style lang="less" scoped>
.admin-container {
  height: 100%;
  width: 100%;
  background-color: #efefef;
  padding-top: 88px;
}

@media (max-width: 768px) {
  .admin-container {
      padding-top: 68px;
  }
}
</style>