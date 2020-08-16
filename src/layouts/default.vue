<template>
  <div class="default">
	  <loading v-show="$root.bLoading" bg-color="#5477b2"></loading>
	  <router-view>展示区</router-view>
  </div>
</template>

<script>
	import loading from '../components/loading.vue'
  export default {
    name:'default',
    props:{},
    data(){
      return {
        
      }
    },
    components:{
		loading
		},
    mounted(){},
    updated(){},
    methods:{
     
    },
    watch:{
    
    }
  }
</script>

<style>
  .default{}
</style>
