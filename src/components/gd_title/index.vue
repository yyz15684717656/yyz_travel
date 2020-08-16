<template>
  
  		 <div id="item_name">
		   <img :src="data.img"/>
          <span>{{data.title}}</span>
         </div>
</template>

<script>
  export default {
    name:'nvList',
    props:{
			data:{
				type:Object,
				default:function(){
					return {}
				}
			}
          }
  }
</script>

<style scoped>
	#item_name{
	     height: 1rem;
	     line-height: 1rem;
	     background-color: white;
	     text-align: center;
	     border-bottom: 1px solid #eee;
	}
	#item_name img{
	    height: 30px;
		vertical-align:sub;
		padding-right: .05rem;
	}
	#item_name span{
	    font-size: 18px;
	    color: #666;
		display: inline-block;
		}
</style>
