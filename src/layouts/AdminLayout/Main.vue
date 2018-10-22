<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <slot></slot>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
};
</script>

<style lang="less" scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}
.fade-enter,
 .fade-leave-to {
  opacity: 0;
}

.app-main {
    height: 100%;
    margin-right: auto;
    margin-left: auto;
}


//媒体查询参数配置
@media (min-width: 992px) {
  .app-main {
      width: 960px;
  }
}
@media (min-width: 1200px){
.app-main {
    width: 1200px;
}}
</style>

