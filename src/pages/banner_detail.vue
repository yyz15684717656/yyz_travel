<template>
	<div>
		<div id="activity_detail" v-if="detail.detail">
		    <div class="cover">
		         <div>
					 <img :src="detail.detail.icon" alt="" class="big_img">
					 <li  class="return"><span @click="$router.go(-1)"><img src="../../public/images/history1.png" alt=""></span></li>
				 </div>
		    </div>
		    <div  class="title">
		        <label v-html="detail.detail.content"></label>
		        <div class="sprice">
		           报名费：<font>￥{{detail.detail.price}}</font>起/人
		        </div>
		        <div class="clear"></div>
		    </div>
		    <div class="time">
		        <div class="date">
		            <img src="/images/time.png">
		            <p>出发时间：{{detail.detail.time | date}}</p>
		            <div class="clear"></div>
		        </div>
		        <ul>
		            <li class="phone">
		                <p>活动咨询：<span>{{detail.detail.ask}}</span></p>
		            </li>
		            <li class="phone">
		                <p>集合地点：<span>{{detail.detail.address}}</span></p>
		            </li>
		        </ul>
		    </div>
		    <div class="introduce">
		        <div class="detail">
		            <label>活动介绍:</label>
		            <div class="clear"></div>
		            <div class="con">{{detail.detail.inc}}</div>
		        </div>
		    </div>
		</div>
		<FrameScreen v-else></FrameScreen>
	</div>
</template>

<script>
	import FrameScreen from '../components/frame-screen/index.vue'
	export default {
	  name:'detail',
	  props:{},
	  data(){
	    return {
	      detail:''
	    }
	  },
	  components:{FrameScreen},
	  mounted(){
	    let collectionName=this.$route.query.collectionName;
	    let _id=this.$route.params._id;
	    this.$axios({
	      url:`/api/goods/${collectionName}/${_id}`,
	    }).then(
	        res=>{
				this.detail=res.data.data;
				console.log(this.detail);
			}
		         
	    )
	  },
	 //  beforeRouteEnter(to,from,next){
		// next(_this=>{
		// 	let collectionName=_this.$route.query.collectionName;
		// 	let _id=_this.$route.params._id;
		// 	_this.$axios({
		// 	  url:`/api/goods/${collectionName}/${_id}`,
		// 	}).then(
		// 	    res=>{
		// 			_this.detail=res.data.data;
		// 			console.log(_this.detail);
		// 		}
			         
		// 	)
		// })
	 //  },
	  computed:{
	   
	  },
	  updated(){},
	  methods:{}
	}
</script>

<style scoped>
	#activity_detail{
		padding-bottom:70px;
	}
	#activity_detail .cover{
	    position: relative;
	    height: 250px;
	    background-size: cover;
		width: 98%;
	}
	#activity_detail .cover img.big_img{
		width: 100%;
		height: 4.298245rem;
		display: block;
	}
	#activity_detail .cover .return{
	    display: block;
	    position: fixed;
	    top:10px;
	    left: 10px;
	    color: white;
	    background-color: rgba(0,0,0,0.5);
	    -webkit-border-radius: 20px;
	    -moz-border-radius: 20px;
	    border-radius: 20px;
	    text-align: center;
	}
	#activity_detail .cover .return .am-icon-angle-left{
	    width: 40px;
	    height: 40px;
	    line-height: 40px;
	    font-size: larger;
	}
	#activity_detail .title{
	    padding:10px;
	    background-color: white;
	}
	#activity_detail .title label{
	    font-size: 20px;
	    margin-bottom: 5px;
	}
	#activity_detail .title .sprice{
	   font-size:14px;
		color:#999;
	}
	#activity_detail .title .sprice font{
		 font-size: 25px;
	    color:#ff9531 ;
		margin-right:5px;
	}
	#activity_detail .time {
	    background-color:#fdf4f5 ;
	    width: 100%;
	    padding: 0 10px;
	    margin-bottom: 10px;
	}
	#activity_detail .time .date{
	    height: 40px;
	    line-height: 40px;
	    border-bottom: 1px solid #eee;
	}
	#activity_detail .time .date img{
	    width: 25px;
	    float: left;
	    margin: 5px 10px 0 0 ;
	}
	#activity_detail .time .date p{
	    float: left;
	    color:#ff9531 ;
	    font-size: 14px;
	}
	#activity_detail .time .phone{
	    height: 40px;
	    line-height: 40px;
	    border-bottom: 1px solid #eee;
	}
	#activity_detail .time .phone p{
	    margin-right: 20px;
	    font-size: 14px;
	}
	#activity_detail .time .phone span{
	    color: #999;
	    font-size: 14px;
	    margin-left: 5px;
	}
	#activity_detail .introduce{
	    padding: 20px 10px 40px 10px;
	    background-color: white;
	}
	#activity_detail  .detail {
	    margin-top: 10px;
	    width: 100%;
	    border-bottom: 1px solid #eee;
	}
	#activity_detail  .detail label{
	    display: block;
	    float: left;
	    left: 10px;
	    font-size: 18px;
	    margin-bottom: 10px;
	}
	#activity_detail  .detail .con{
	    font-size: 14px;
	    color: #999;
	}
	#activity_detail  .detail .con .all_text{
	    font-size: 14px;
	    color: #999;
	}
	#activity_detail  .detail .con .more{
	    color: #999;
	    display: block;
	    line-height: 30px;
	    background-color: white;
	    text-align: center;
	    font-size: 20px;
	
	}
	
	  .return{
		width: 30px;
		height: 30px;
	    display: block;
	    position: absolute;
	    top:20px;
	    left: 20px;
	    color: white;
	    background-color: rgba(0,0,0,0.5);
	    -webkit-border-radius: 20px;
	    -moz-border-radius: 20px;
	    border-radius: 20px;
	    text-align: center;
		box-sizing: border-box;
		padding-top: 7px;
	}
	.return span img{
		width: 50%;
		height: 50%;
		

	}
</style>
