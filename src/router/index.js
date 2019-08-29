import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import CityList from '@/components/CityList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Test',
      component: Test
    },{
      path: '/citylist',
      name: 'CityList',
      component: CityList
    }
  ]
})
