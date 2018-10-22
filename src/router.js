import Vue from 'vue'
import Router from 'vue-router'


//base views
import Home from './views/Base/Home/Home'
import Blog from './views/Base/Blog'
import Article from './views/Base/Article'
import Demo from './views/Base/Demo'

//admin views
import Editor from './views/Admin/Editor'


import NotFound from './views/NotFound'


//demos
import DemoCalculator from './views/Base/Demo/childrens/Calculator'
import DemoThrottle from './views/Base/Demo/childrens/Throttle'
import DemoDebounce from './views/Base/Demo/childrens/Debounce'



Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [

    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        hideHeader: true
      }
    },
    {
      path: '/editor',
      component: Editor,
      meta: {
        admin: true,
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