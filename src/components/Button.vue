<template>
  <div class="Button">
	<input :type="type" class="lanch" :value="text" :style="{backgroundColor:bgColor,width:width,height:height,fontSize:fontSize+'px'}"  @click="$emit('click')"/>
  </div>
</template>

<script>
  export default {
    name:'Button',
    props:{
	  type:{
			type:String,
			default:"button"
		   },
      text:{
        type:String,
        default:'按 钮'
      },
      bgColor:{
        type:String,
        default:'#4C4F50'
      },
	  width:{
		  type:String,
		  default:""
	  },
	  height:{
		  type:String,
		  default:""
	  },
	  fontSize:{
		  type:Number
	  }
    },
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
 .lanch{
    border: none;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    font-size: 18px;
    height: 50px;
    /* line-height: 50px; */
    color: white;
    margin-bottom: 20px;
	width:4.877192rem;
	text-align: center;
	vertical-align: middle;
}
</style>
