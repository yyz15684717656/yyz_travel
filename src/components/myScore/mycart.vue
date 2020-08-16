<template>
	<div class="data_nav">
		<li>
			<a href="javascript:;">
				<img :src="imgSrc" />
				<p class="carbuy">{{title}}<label v-if="label>0">{{label}}</label><span v-if="score>0">{{score}}</span></p>
			</a>
		</li>
	</div>
</template>

<script>
	export default {
		name:"mycart",
		props:{
			title:{
				type:String,
				default:""
			},
			imgSrc:{
				type:String,
				default:""
			},
			score:{
				type:String,
				default:""
			},
			label:{
				type:String,
				default:""
			}
			
		}
	}
</script>

<style scoped>
	  .data_nav{
		  width: 100%;
		background: white;
		line-height:60px;
	    border-bottom: 1px solid #ddd;
	}
	  .data_nav li{
		border-right:1px solid #ddd;
		text-align:center;
	}
	  .data_nav img{
		width:30px;
		margin-right:6px;
		margin-top:17px;
		vertical-align:top;
	}
	  .data_nav p{
		display:inline-block;
		font-size:16px;vertical-align:top;
	}
	  .data_nav span{
		font-size:20px;
		margin-left:5px;
		color:#f60;
	}
	  .data_nav label{
		display: inline-block;
		width:20px;
		height:20px;
		line-height:22px;
		font-weight:100;
		font-size:16px;
		margin-left:5px;
		color:#fff;
		font-family:arial;
		background:#f60;
		-webkit-border-radius: 50%;
	    -moz-border-radius: 50%;
	    border-radius: 50%;
	}
	
	.am-avg-sm-2{
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.am-avg-sm-2 li a{
		display: inline-block;
		width: 100%;
	}
</style>
