import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/one'
import Two from '@/components/two'
import Fade from '@/components/fade'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: One
    },
    {
      path: '/two',
      component: Two
    },
    {
      path:'/fade',
      component:Fade
    }
  ]
})
