<template>
  <div id="app">
    <h3>app</h3>
    
    <frame-screen type="list" v-if="list.length===0"></frame-screen>
    <div v-else>数据</div>
    
  </div>
</template>

<script>
  import FrameScreen from './components/frame-screen/index.vue';
export default {
  name: 'App',
  data(){
    return {
      list:[]
    }
  },
  components: {
    FrameScreen
  },
  methods:{
    // show(data){this.ipt=data}
  },
  mounted(){
    setTimeout(()=>this.arr=[
        {_id:1,title:'xx',sub_title:'oo',banner:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'},
        {_id:2,title:'xx2',sub_title:'oo2',banner:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'},
        {_id:3,title:'xx3',sub_title:'oo3',banner:'/images/img_1.jpg'},
      ],1000)
  }
  
}
</script>

<style>

</style>
