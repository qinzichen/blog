import Vue from 'vue'
import Router from 'vue-router'

//vue page compoments 
import Home from './views/Home/Home.vue'

import Blog from './views/Blog'
import Article from './views/Article'
import Demo from './views/Demo'
import Editor from './views/Editor'

import NotFound from './views/NotFound'


//demos
import DemoCalculator from './views/Demo/childrens/Calculator'
import DemoThrottle from './views/Demo/childrens/Throttle'
import DemoDebounce from './views/Demo/childrens/Debounce'
import DemoDefault from './views/Demo/childrens/Default'


Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        hideHeader: true
      }
    },
    {
      path: '/editor',
      component: Editor,
      meta: {
        hideHeader: true,
        title: "编辑"
      }
    },
    {
      path: '/blog',
      component: Blog,
      meta: {
        title: "博客",
        keepalive: true
      }
    },
    {
      path: '/article/:id',
      component: Article,
      meta: {
        title: "正文"
      }
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
      meta: {
        title: "示例"
      },
      children: [
        {
          path: "calculator",
          name: "Calculator",
          component: DemoCalculator,
          meta: {
            title: "仿Mac计算器"
          },
        },
        {
          path: "throttle",
          name: "Throttle",
          component: DemoThrottle,
          meta: {
            title: "函数节流"
          },
        },
        {
          path: "debounce",
          name: "Debounce",
          component: DemoDebounce,
          meta: {
            title: "函数防抖"
          },
        },
        {
          path: '*',
          component: NotFound,
          meta: {
            title: "404"
          }
        }
      ]
    },
    {
      path: '*',
      component: NotFound,
      meta: {
        hideHeader: true,
        title: "404"
      }
    }
  ]
})