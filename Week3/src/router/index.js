import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import week3 from '@/components/week3'
import ElementUI from 'element-ui';
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts;

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [{
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'week3',
      component: week3
    }
  ]
})
