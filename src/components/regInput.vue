<template>
	<div class="am-form-group">
	    <input type="text/css" :placeholder="text" :type="type"  @input="$emit('input',$event.target.value)"/>
	</div>
</template>

<script>
	export default {
		name:"regInput",
		props:{
			text:{
				type:String,
				default:''
			},
			type:{
				type:String,
				default:'text'
			}
		}
	}
</script>

<style scoped>
	 .am-form-group input{
	    float: right;
	    height: 50px;
	    width: 100%;
	    border: none;
	    color: #999;
	    font-size: 14px ;
	    background-color: transparent;
		}
		.fill_word{
			margin-top: -20px;
		}
</style>
