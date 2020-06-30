import Vue from 'vue'
import Router from 'vue-router'
import Returns from '@/components/Returns'
import Admin from '@/components/Admin'
import Category from '@/components/Category'

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
    },
    {
      path: '/category/:category',
      name: 'Category',
      component: Category,
      props: true
    },
    {
      path: '*',
      name: 'Returns',
      component: Returns
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
