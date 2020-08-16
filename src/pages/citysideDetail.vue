<template>
	<div>
		<div id="news_detail" v-if="detail.detail">
		    <div class="cover">
				 <div>
				<img :src="detail.detail.icon" alt="" class="big_img">
		        <li title="" class="return"><span @click="$router.go(-1)"><img src="../../public/images/history1.png" alt=""></span></li>
		         </div>
				<div  class="title">
		            <p>{{detail.tourContent}}</p>
		            <span>2016/12/11</span>
		            <div class="clear"></div>
		        </div>
		        <div class="read">
		            <img class="eye " src="/images/read.png">
		            <span>{{detail.price}}+</span>
		        </div>
		    </div>
		    <div class="fill">
		        <div class="con">
		            <p>{{detail.detail.inc}}</p>
		            <img src="images/head.jpg">
		            <p></p>
		        </div>
		    </div>
		</div>
		
	</div>
</template>

<script>
	 export default {
	   name:'cityside-detail',
	   props:{},
	   data(){
	     return {
	       detail:''
	     }
	   },
	   components:{},
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
	   computed:{
	    
	   },
	   updated(){},
	   methods:{}
	 }
</script>

<style scoped>
	 .cover img.big_img{
		width: 100%;
		height: 4.298245rem;
		display: block;
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
	#news_detail .cover{
	    position: relative;
	    height: 250px;
	    background-size: cover;
	}
	#news_detail .cover .return{
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
	#news_detail .cover .return .am-icon-angle-left{
	    width: 40px;
	    height: 40px;
	    line-height: 40px;
	    font-size: 20px;
	}
	#news_detail .cover .collect{
	    position: absolute;
	    top:20px;
	    right: 20px;
	}
	#news_detail .cover .collect img{
	    width: 30px;
	}
	
	
	#news_detail .cover .title{
	    position: absolute;
	    bottom:0;
	    left:0;
		width:100%;
		padding-left: 0.087719rem;
		padding-bottom: 0.087719rem;
		box-sizing: border-box;
		background-image: -moz-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.5));
	    background: -o-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 100%);
	    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0,0,0,0)), color-stop(1,rgba(0,0,0,0.5)));
	    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='rgba(0,0,0,0)', endColorstr='rgba(0,0,0,0.5)', GradientType='0');
	}
	#news_detail .cover .title span{
	    color: white;
	    font-size: 14px;
	    float: left;
	}
	#news_detail .cover .title p{
	    color: white;
	    font-size: 22px;
	}
	#news_detail .cover .read{
	       position: absolute;
	    bottom: 5px;
	    right: 0px;
	    padding-right: 10px;
	    width: 80px;
	    display: flex;
		justify-content: flex-end;
	    background-color: rgba(0,0,0,0.5);
	    -webkit-border-radius: 20px;
	    -moz-border-radius: 20px;
	    border-radius: 20px;
	    text-align: center;
	}
	#news_detail .cover  .eye{
	    width: 20px;
	}
	#news_detail .cover .read span{
	    color: white;
	}
	#news_detail .fill{
	    padding: 5px;
	    margin-top: 10px;
		text-indent: 2em;
		box-sizing: border-box;
	}
	#news_detail .fill .con{
	    background-color: white;
	    width: 100%;
	    min-height: 200px;
	    border: 1px solid #eee;
	}
	#news_detail .fill .con p{
	    line-height: 30px;
	    font-size: 14px ;
	}
	#news_detail .fill .con img{
	    width: 100%;
	}
</style>
