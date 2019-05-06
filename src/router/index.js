import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi from '@/components/hi'
import hi1 from '@/components/hi1'
import hi2 from '@/components/hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      alias:'/home1'
    },
    {
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
      beforeEnter: (to, from, next) => {
        console.log(to);
        console.log(from);
        next({path:'/'});
      } 
    },
    {
      path:'/gohome',
      redirect:'/'
    },
    {
      path:'goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/Params/:newsId(\\d+)/:newsTitle'
    },
    {
      path:'/hi1',
      component:hi1,
      alias:'/jasmyn'
    },{
      path:'*',
      component:Error
    }

    ]
})
