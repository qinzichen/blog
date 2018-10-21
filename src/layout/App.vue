<template>
    <div class="app-container">
        <slot></slot>
    </div>
</template>

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