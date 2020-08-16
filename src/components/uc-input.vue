<template>
  <div class="uc-input">
	  <div class="search" :style="{backgroundColor:bgColor,width:width+'rem'}">
		<select v-if="label">
			<option value="option1">{{label}}</option>
		</select>
		<input class="text" type="search" :placeholder="text" />
		<input class="submit " type="submit" value=" " />
		<i  class="am-icon-search"><img src="../../public/images/search.png" alt=""></i>
		<div class="clear"></div>
	  </div>
  </div>
</template>

<script>
  export default {
    name:'uc-input',
    props:{
      label:{
        type:String,
        default:''
      },
      bgColor:{
        type:String,
        default:'#eee'
      },
      width:{
        type:Number,
        default:2.7
      },
	  text:{
		  type:String,
		  default:"要看什么？"
	  }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
	.search {
    position: relative;
    /* background-color: #eee; */
    height: 30px;
    padding: 0 35px 0 65px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
	/* width:2.7rem; */
}
  .search select {
    border: 0;
    width: 50px;
    background: transparent;
    position: absolute;
    left: 8px;
    top: 6px;
    line-height: 18px;
    font-size: 14px;
    border-right: 1px solid #ddd;
    -webkit-appearance: none;
}
 .search i.am-icon-caret-down {
    position: absolute;
    left: 40px;
    top: 5px;
    pointer-events: none;
}
  .search .text {
    height: 30px;
    background: 0;
    border: 0;
}
  .search .submit {
    background: 0;
    border: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    cursor: pointer;
}
  .phone {
    position: absolute;
    right: 15px;
    top: 14px;
}
 .phone img {
    width: 25px;
}
.uc-input{
	width: 155px;
}
i.am-icon-search {
    position: absolute;
    right: 10px;
    top: 5px;
   
}
i img{
	width: 0.4rem;
	height: 0.4rem;
	
}
</style>
