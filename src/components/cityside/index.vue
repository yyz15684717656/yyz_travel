<template>
	<div id="beautiful_country">
	    <ul class="am-avg-sm-2">
	        <router-link tag="li" class="beautiful_list" v-for="item of citysideData" :key="item._id" :to="{name:'citysideDetail',params:{_id:item._id},query:{collectionName:collectionName}}">
	            <a  title="" href="javascript:;">
	                <div class="pic">
	                    <img :src="item.tourImg"/>
	                </div>
	                <div class="name">
	                    <img alt="" class="head" :src="item.detail.icon">
	                    <span>{{item.tel}}</span>
	                    <div class="num">
	                        <i class="am-icon-eye"></i>
	                        <span>{{item.follow}}</span>
	                        <i class="am-icon-comments"></i>
	                        <span>{{item.fans}}</span>
	                    </div>
	                    <div class="clear"></div>
	                </div>
	                <label>{{item.tourtitle}}</label>
	                <p>{{item.tourContent}}</p>
	            </a>
	        </router-link>
	    </ul>
	</div>
</template>

<script>
	export default{
	   props:['citysideData','collectionName'],
		 data(){
			return {
				detail:''
			}
		},
		methods:{}
	}
</script>

<style scoped>
	.beautiful_list{
		width: 47%;
	}
	.am-avg-sm-2{
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
	#beautiful_country {
	    background: white;
	    /* margin-top: 10px; */
		 border-top: 1px solid #eee;
	}
	#beautiful_country li {
	    padding: 10px 5px;
		height:4.385964rem;
	}
	#beautiful_country .beautiful_list a{
	    display: block;
	    border: 1px solid #eee;
	    padding-bottom: 10px;
		height: 4.385964rem;
	}
	#beautiful_country .beautiful_list .pic{
	    overflow: hidden;
	    height: 125px;
	}
	#beautiful_country .beautiful_list .pic img{
	    width: 100%;
	}
	#beautiful_country .beautiful_list .name{
	    width: 100%;
	    position: relative;
	    padding: 10px 5px 10px 48px;
	}
	#beautiful_country .beautiful_list .name .num{
	    float: right;
	}
	#beautiful_country .beautiful_list .name span{
	    font-size: 12px;
	    color: #999;
	}
	#beautiful_country .beautiful_list .name i{
	    color: #999;
	}
	#beautiful_country .beautiful_list .name .head {
	    position: absolute;
	    top:-20px;
	    left: 5px;
	    border: 2px solid white;
	    width: 45px;
	    height: 45px;
	    -webkit-border-radius: 50%;
	    -moz-border-radius: 50%;
	    border-radius: 50%;
	    box-shadow: 0 0 5px #999999;
	}
	#beautiful_country .beautiful_list label{
	    margin-left: 10px ;
	}
	#beautiful_country  .beautiful_list p {
	    padding-left: 10px;
	    padding-right: 10px;
	    font-size: 12px;
	    color: #999;
	}
</style>
