<template>
	<div id="news_list">
	    <ul>
	        <router-link v-for="item of newsData"
				:key="item._id"
				:to="{name:'newsDetail',params:{_id:item._id},query:{collectionName:collectionName}}"
				tag="li">
	            <a title="" class="news" href="javascript:;">
	                <div class="pic">
	                    <img :src="item.tourImg"/>
	                </div>
	                <div class="box">
						<div class="project_cont">
						    <p>{{item.tourtitle}}</p>
						</div>
						<div class="price">
						    <p>{{item.time>0&&item.time |date}}</p>
							<em class="iconfont">&#xe668;</em>
						    <span>{{item.follow}}</span> 
						    <div class="clear"></div>
						</div>
					</div>
	            </a>
	        </router-link>
	    </ul>
	</div>
</template>

<script>
	export default {
		name:"news-list",
		props:['newsData',"collectionName"],
	}
</script>

<style scoped>
	.box{
		height: 1.736842rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	#news_list{
	    background-color: white;
		border-top: 1px solid #eee;
	}
	#news_list li{
		height: 1.982456rem;
	}
	#news_list .news {
	    display: block;
	    position: relative;
	    padding: 10px 10px 0 150px;
	    background: white;
	}
	
	#news_list .news a {
	    display: block;
	}
	
	#news_list .news .pic {
	    position: absolute;
	    left: 10px;
	    top: 10px;
	    width: 130px;
	    height: 100px;
	    overflow: hidden;
	}
	#news_list .news .pic a{
		width: 100%;
		height: 100%;
	}
	#news_list .news .pic img{
	    width: 100%;
	  height: 100%;
	}
	#news_list .news .project_cont p {
	    font-size: 14px;
	    line-height: 25px;
	}
	
	#news_list .news .project_cont span {
	    display: block;
	    font-size: 14px;
	    color: #999;
	    line-height: 18px;
	}
	
	#news_list .news .price {
	    height: 35px;
	    line-height: 35px;
	    padding-right: 10px;
	    margin-top: 15px;
	    text-align: right;
	    color: #999;
	    border-bottom: 1px solid #eee;
	}
	
	#news_list .news .price p {
	    font-size: 12px;
	    float: left;
	    color: #999;
	}
	#news_list .news .price span {
	    color: #999;
	    font-size: 14px;
	    float: right;
	}
	#news_list .news .price i{
	    float: right;
	}
</style>
