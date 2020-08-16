<template>
  
  <div class="banner">
    <ul class="clearfix">
      <router-link
        v-for="item of data"
        :key="item._id"
        :to="{name:'bannerDetail',params:{_id:item._id},query:{collectionName:collectionName}}"
        tag="li"
      >
        <img :src="item.banner" alt=""/>
      </router-link>
      
    </ul>
  </div>
  
</template>

<script>
  import Swipe from './js/swipe.js';
  // console.log('swiper',Swipe)
  import $ from 'jquery';
  export default {
    name:'banner',
    props:['data','collectionName'],
    components:{},
    mounted(){
      // console.log('mounted');
      this.data.length > 0 && this.initSwiper()
    },
    updated(){
      // console.log('updated')
      this.initSwiper()
    },
    methods:{
      initSwiper(){
        new Swipe($('.banner')[0],{
          auto:2000,
          continuous:true,
          stopPropation:true,
          callback:function (index,element){
            $('.banner ol li').removeClass('active');
            $('.banner ol li').eq(index).addClass('active');
          }
        }) 
      }
    }
  }
</script>

<style scoped>
  .banner{position: relative;overflow: hidden; z-index: 1;padding-top: .85rem;}
  .banner ul li{width:6.4rem;float:left;position: relative;height: 2.8rem}
  .banner ul li img{width:100%; display:block;height: 100%;}
</style>
