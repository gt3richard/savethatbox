import Vue from 'vue'
import Router from 'vue-router'
import Returns from '@/components/Returns'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Returns',
      component: Returns
    },
    {
      path: '/editor',
      name: 'Admin',
      component: Admin
    }
  ]
})
