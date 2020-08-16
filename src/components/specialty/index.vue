<template>
	<ul>
	       <router-link v-for="item of speData.speData"
				:key="item._id"
				:to="{name:'speDetail',params:{_id:item._id},query:{collectionName:collectionName}}"
				tag="li">
			<div class="ordernum" v-if="orderNum">
				<div>订单编号:{{orderNum}}</div>
				<span>交易成功</span>
			</div>
	       <a class="project" href="javascript:;":style="{backgroundColor:bgColor}">
	            <div class="pic">
	                <img :src="item.tourImg"/>
	            </div>
	            <div class="project_cont">
	                <p>{{item.tourContent}}</p>
	            </div>
	            <div class="price">
	                <label v-if="item.price>0">￥{{item.price}}</label>
	                <span>{{item.tourtitle}}</span>
	                <div class="clear"></div>
	            </div>
	        </a>
			<div class="btngroup" v-if="btn">
				<Button bgColor="#00c1b4" :text="btn"  width="80px"  height="30px" :fontSize=14 ></Button>
				<Button bgColor="#ddd" :text="btn"  width="80px"  height="30px" :fontSize=14 ></Button>
				<Button bgColor="#f80"  :text="btn"    width="80px"  height="30px" :fontSize=14></Button>
			</div>
			<div class="addgn" v-if="time">
				<div><span>{{time}}</span></div>
				<div class="anniu" v-if="">{{del}}</div>
			</div>
	    </router-link> 
	</ul>
</template>

<script>
	import Button from "../Button.vue"
	import More from "../more/index.vue"
	export default {
		name:"specialty",
		props:{
			title:{
				type:String,
				default:""
			},
			text:{
				type:String,
				default:""
			},
			price:{
				type:Number
			},
			imgSrc:{
				type:String,
				default:""
			},
			time:{
				type:String,
				default:""
			},
			btn:{
				type:String,
				default:""
			},
			orderNum:{
				type:String,
				default:""
			},
			bgColor:{
				type:String,
				default:"#fff"
			},
			del:{
				type:String,
				default:''
			},
			speData:{
				type:Object
			},
			collectionName:{
				type:String
			}
			
		},
		components:{
			Button,
			More
		},
		methods:{
			 show(){
				 console.log(this.speData);
			 }
		}
	}
</script>

<style scoped>
	 .project {
	    display: block;
	    position: relative;
	    padding: 10px 10px 0 150px;
	    background: white;
		
	}
	 .project a {
	    display: block;
	}
	
	 .project .pic {
	    position: absolute;
	    left: 10px;
	    top: 10px;
	    width: 130px;
	    height: 100px;
	    overflow: hidden;
	}
	 .project .pic img{
	    width: 100%;
	    height: 100px;
		
	}
	 .project .project_cont p {
	    font-size: 14px;
	    line-height: 25px;
	}
	
	 .project .project_cont span {
	    display: block;
	    font-size: 14px;
	    color: #999;
	    line-height: 18px;
	}
	
	 .project .price {
	    height: 35px;
	    line-height: 35px;
	    padding-right: 10px;
	    margin-top: 15px;
	    text-align: right;
	    color: #999;
	    border-bottom: 1px solid #eee;
	}
	
	 .project .price label {
	    font-size: 20px;
	    font-weight: bold;
	    float: left;
	    color: #ff9531;
	}
	 .project .price span {
	    color: #999;
	    font-size: 14px;
	    float: right;
	}
	.addgn{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 0.175438rem;
	}
	.addgn{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 0.175438rem;
		padding-right: 10px;
		box-sizing: border-box;
		background-color: #fff;
		padding-bottom: 10px;
		padding-top: 10px;
	}
	.anniu{
		width: 0.877192rem;
		height: 0.438596rem;
		border: 1px solid black;
		text-align: center;
		box-sizing: border-box;
		padding-top: 5px;
	}
	 .ordernum {
		 margin-top: 10px;
		padding: 0 0.403508rem;
	    height: 40px;
	    line-height: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
	}
	 .ordernum p{
	    float: left;
	    font-size: 14px;
	}
	 .ordernum span{
	    float: right;
	    color: #ff9531;
	    font-size: 14px;
	}
	.btngroup{
		margin-top: 0.175438rem;
		width: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		
	}
</style>
