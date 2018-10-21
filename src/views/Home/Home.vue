<style lang="less" scoped>
@import url("./Home.less");
</style>

<template>
    <div class="app-home">
        <div class="home-wrap">
          <img class="avatar" src="../../assets/avatar.png" alt="chen's Blog" title="chen's Blog" width="128" height="128" />
          <h1 style="font-size: 2rem">CHEN's blog</h1>
          <p>The life will bloom in the darkest place.     by  Alextrasza </p>
          <div style="margin-bottom: 10px;font-size: 1.3rem">
              <i class="icon" style="font-size: 1.2rem;margin-right: 5px">&#xe66e;</i>
              <a style="text-decoration:none" href="https://www.google.cn/maps/@39.1507326,117.2363688,12.81z">TianJin.China</a></div>
          <ul>
              <li v-for="n in navConfig" :key="n.index"><a :href="n.path">{{n.name}}</a></li>
          </ul>
        </div>
      </div>
</template>

<script>
import NAV_CONFIG from "../../navigation.config.js" //导航配置

export default {
    components: {
    },
    data() {
        return {
            navConfig: NAV_CONFIG
        }
    }
}
</script>
