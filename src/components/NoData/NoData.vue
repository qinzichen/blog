<template>
  <div class="app-nodata">
    <div class="pic-nodata">
      <img :src="img_nodata" alt="there is no data">
    </div>
    <div class="exception">
      <div class="exception-message">{{message}}</div>
      <!-- <a class="exception-reflush" @click="reflush">刷新</a> -->
    </div>
  </div>
</template>

<script>
import img_nodata from '@/assets/nodata.png';

export default {
  name: 'NoData',
  props: {
    message: {
      type: String,
      default: "没有数据~"
    }
  },
  data() {
    return {
      img_nodata
    };
  },
  methods: {
    reflush() {
      this.$router.go(0)
    }
  }
};
</script>

<style lang="less" scoped>
.app-nodata {
  display: flex;
  align-items: center;
  position: relative;
    padding: 0 15px;
    flex-flow: column;
  overflow: hidden;
  .pic-nodata {
    position: relative;
    padding: 50px 20px 20px;
    overflow: hidden;
    img {
      max-width: 400px;
      width: 100%;
    }
  }
  .exception {
    position: relative;
    padding: 20px;
    overflow: hidden;
    &-message {
      font-size: 1.3;
      line-height: 24px;
      color: #666;
      opacity: 0;
      margin-bottom: 20px;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }
    &-reflush {
      display: block;
      text-decoration: none;
      width: 110px;
      height: 36px;
      background:#42b983;
      border-radius: 100px;
      text-align: center;
      color: #ffffff;
      opacity: 0;
      font-size: 14px;
      line-height: 36px;
      cursor: pointer;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
    @keyframes slideUp {
      0% {
        transform: translateY(60px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}

//媒体查询参数配置
@screen-xs-max: 768px; /* 超小屏幕（手机，小于 768px） */
@screen-sm-min: 768px; /* 小屏幕（平板，大于等于 768px） */
@screen-md-min: 992px; /* 中等屏幕（桌面显示器，大于等于 992px） */
@screen-lg-min: 1200px; /* 大屏幕（大桌面显示器，大于等于 1200px） */
@media (max-width: @screen-xs-max) {
  .app-nodata {
    padding: 0 15px;
    flex-flow: column;
  }
  .app-nodata .exception-reflush{
    margin: 0 auto;
  }
}
</style>
