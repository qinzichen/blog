<template>
  <header class="admin-head">
    <div class="admin-nav">
      <div class="link-sidepanel hide-xs-max" @click="showSidePanel = true">
        <i class="icon">&#xf038;</i>
      </div>
      <div class="nav-container">
        <div class="logo">
          <img  src="@/assets/avatar.png" alt="chen's blog" title="chen's blog"/>
        </div>
        <div class="hide-xs-min" style="display:block;line-height:48px;float:left;font-size:18px;padding-left:5px">Chen's Blog</div>
        <nav class="nav-bar hide-xs-min">
          <ul>
              <li v-for="(m, index) in menuConfig" :key="'menu'+index" @click="navClickFn(m, index)" :class="{active: active == index}">
                <a class="name"><i class="icon" v-html="m.icon"></i>{{m.name}}</a>
                </li>
          </ul>
        </nav>
        <div class="nav-title hide-xs-max">{{navTitle}}</div>
      </div>


      <transition name="fade">
        <div class="mask" v-show="showSidePanel" @click="showSidePanel = false"></div>
      </transition>
      <transition name="slide">
        <div class="sidepanel" v-show="showSidePanel">
          <div class="sidepanel-container">
            <ul>
                <li v-for="(m, index) in menuConfig" :key="'menu'+index" @click="navClickFn(m, index)" :class="{active: active == index}">
                  <i class="icon" v-html="m.icon"></i><a class="name">{{m.name}}</a>
                  </li>
            </ul>
            <v-btn block class="close-sidepanel" @click="showSidePanel = false">close</v-btn>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AdminHeader",

  data() {
    return {
      active: 0,
      showSidePanel: false,
      menuConfig: [
        {icon:'&#xe684;',name:'编辑',path:'/editor'},
        {icon:'&#xf038;',name:'统计',path:'/statistics'},
        {icon:'&#xe60b;',name:'首页',path:'/home'},
      ]
    };
  },
  computed: {
    ...mapState(["navTitle"])
  },
  created() {
    this.$nextTick(() => {
      this.active = this.menuConfig.findIndex(
        item => item.path == this.$route.path
      );
    });
  },
  methods: {
    notLastNav: function(index) {
      return index < this.navConfig.length - 1;
    },
    navClickFn(nav, index) {
      if (this.showSidePanel) {
        this.showSidePanel = false;
      }
      let reg = /^\//;
      if (reg.test(nav.path)) {
        this.$router.push(nav.path);
      } else {
        return window.open(nav.path);
      }
      this.active = index;
    }
  }
};
</script>


<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* 设置持续时间和动画函数 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(240px);
  opacity: 1;
}

.admin-head {
  border-bottom: 1px solid #cdcdcd;
  box-shadow: 3px 0 3px rgba(0,0,0,.3);
  height: 68px;
  min-height: 56px;
  background: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;

  z-index: 100;

  &:before {
    content: " ";
    display: table;
  }
  &:after {
    content: " ";
    display: table;
    clear: both;
  }
  .admin-nav {
    max-width: 1440px;
    padding: 10px 0;
    margin: 0 auto;

    .logo {
      float: left;
      height: 48px;
      border-radius: 50%;

      > img {
        height: 100%;
        display: block;
        border-radius: inherit;
      }
    }
    .new-blog {
      float: right;
      margin-right: 25px;
      background: #42b983 !important;
      color: #fff;

      .icon {
        font-size: 1rem;
        margin-right: 5px;
      }
    }

    .nav-container {
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      text-align: right;

      .nav-bar {
        display: inline-block;
        font-size: 1.2rem;
        line-height: 48px;
        padding: 0 0 0 15px;

        ul {
          padding: 0;
          margin: 0;
          display: block;
          text-align: center;
          list-style: none;

          li {
            margin-left: 30px;
            display: inline-block;
            a {
              padding: 0 3px;
              position: relative;
              text-decoration: none;
              color: #353535;
              cursor: pointer;
              .icon {
                margin-right: 7px;
              }
              &:hover {
                color: #42b983;
              }
            }
            span {
              padding: 0 3px;
            }
          }
          li.active {
            a {
              color: #42b983;
            }
          }
        }
      }

      .nav-title {
        width: 100%;
        text-align: center;
        font-size: 1.4rem;
        line-height: 48px;
      }
    }

    .link-sidepanel {
      float: right;
      width: 48px;
      height: 48px;
      text-align: center;

      .icon {
        line-height: 48px;
        color: #666;
        display: block;
        font-size: 1.6rem;
      }

      &:active {
        background-color: rgba(66, 185, 131, 0.3);
      }
    }

    .mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .sidepanel {
      display: block;
      width: 240px;
      height: 100vh;
      padding: 20px;
      position: fixed;
      top: 0;
      right: 0;
      border-left: 4px solid #e3edf3;
      background: #f9f9f9;
      z-index: 9999;

      &-container {
        position: relative;
        ul {
          list-style: none;
          padding: 0;
          font-size: 1.2rem;
          margin-bottom: 10px;

          li {
            width: 100%;
            padding: 12px 0;

            .icon {
              font-size: 1.3rem;
              margin-right: 8px;
            }
          }

          li.active {
            a {
              color: #42b983;
            }
          }
        }

        .close-sidepanel {
          font-size: 1rem;
          background-color: #42b983 !important;
          color: #fff;
          border-radius: 4px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .admin-head {
    height: 56px;
    .admin-nav {
      padding: 5px 0 !important;
    }
    .logo {
      padding: 5px !important;
      left: 5px !important;
    }
  }

  .new-blog {
    display: none;
    flex: 0;
  }
}

@media (min-width: 992px) {
  .nav-container {
    width: 960px !important;
  }
}
@media (min-width: 1200px) {
  .nav-container {
    width: 1200px !important;
  }
}
</style>

