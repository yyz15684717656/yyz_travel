import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from "../pages/home.vue"
import Login from "../pages/login.vue"
import Collection from "../pages/collection.vue"
import My from "../pages/my.vue"
import MyOrder from "../pages/my_order.vue"
import Reg from "../pages/reg.vue"
import Postnotes from "../pages/postnotes.vue"
import SpecialityMall from "../pages/specialityMall.vue"
import Tourism from "../pages/tourism.vue"
import TravelOrder from "../pages/TravelOrder.vue"
import Nopage from "../pages/no-page.vue"
import BannerDetail  from "../pages/banner_detail.vue"
import TourismDetail  from "../pages/tourism_detail.vue"
import CitysideDetail  from "../pages/citysideDetail.vue"
import NewsDetail  from "../pages/news_detail.vue"
import SpeDetail  from "../pages/speDetail.vue"
import Cart from "../pages/cart.vue"
import News from "../pages/news_detail.vue"
import Morecityside from "../pages/more_cityside.vue"
import Morespe from "../pages/more_specialty.vue"
import Morenews from "../pages/more_news.vue"


let routes = [
  {path:'/home',component:Home},
  {path:'/collection',component:Collection},
  {path:'/login',component:Login,name:'login'},
  {path:'/my',component:My},
  {path:'/myorder',component:MyOrder},
  {path:'/reg',component:Reg},
  {path:'/postnotes',component:Postnotes},
  {path:'/specialityMall',component:SpecialityMall},
  {path:'/tourism',component:Tourism},
  {path:'/travelOrder',component:TravelOrder},
  {path:'/morecityside',component:Morecityside,name:"morecityside"},
  {path:'/morespe',component:Morespe,name:"morespe"},
  {path:'/morenews',component:Morenews,name:"morenews"},
  {path:'/bannerDetail/:_id',component:BannerDetail,name:'bannerDetail'},
  {path:'/tourismDetail/:_id',component:TourismDetail,name:'tourismDetail'},
  {path:'/speDetail/:_id',component:SpeDetail,name:'speDetail'},
  {path:'/citysideDetail/:_id',component:CitysideDetail,name:'citysideDetail'},
  {path:'/newsDetail/:_id',component:NewsDetail,name:'newsDetail'},
  {path:'/news/:id',component:News},
  {path:'/cart',component:Cart},
  {path:'/',redirect:'/home'},
  {path:'*',component:Nopage}
];


let router = new VueRouter({
  routes
})

export default router;