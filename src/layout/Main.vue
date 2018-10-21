<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <slot></slot>
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain"
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.app-main {
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}

//媒体查询参数配置
@screen-xs-max: 768px; /* 超小屏幕（手机，小于 768px） */
@screen-sm-min: 768px; /* 小屏幕（平板，大于等于 768px） */
@screen-md-min: 992px; /* 中等屏幕（桌面显示器，大于等于 992px） */
@screen-lg-min: 1200px; /* 大屏幕（大桌面显示器，大于等于 1200px） */

@media (min-width: 768px) {
  .app-main {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .app-main {
    width: 960px;
  }
}
</style>

