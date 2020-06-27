import Vue from 'vue'
import Router from 'vue-router'
import Returns from '@/components/Returns'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Returns',
      component: Returns
    }
  ]
})
