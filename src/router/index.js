import Vue from 'vue'
import Router from 'vue-router'
import Returns from '@/components/Returns'
import Admin from '@/components/Admin'
import Category from '@/components/Category'
import Discover from '@/components/Discover'
import Static from '@/components/Static'

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
      path: '/discover/:title',
      name: 'Discover',
      component: Discover,
      props: true
    },
    {
      path: '/doc/:page',
      name: 'Static',
      component: Static,
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
