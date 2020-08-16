<template>
    <div id="footer">
        <div class="first">
            <ul class="am-avg-sm-2">
				<router-link tag="li" to='/home'  index='0' active-class="homeactive">
                        <span class="iconfont ">&#xe605;</span>
                        <p>首页</p>
				</router-link>
				<router-link tag="li" to='/tourism' active-class="homeactive">
				        <span class="iconfont">&#xe60d;</span>
				        <p>孟津旅游</p>   
				</router-link>
            </ul>
        </div>
        <router-link class="beautiful" active-class="beautiful" tag="div" to="/home" >
                <img alt="" src="/images/icon-footer3-a.png"/>
        </router-link>
        <div class="last">
            <ul class="am-avg-sm-2">
                <router-link to="/specialityMall" tag="li" active-class="homeactive">
                        <span class="iconfont">&#xe60e;</span>
                        <p>特产商城</p>
                </router-link>
                <router-link to="/my" tag="li" active-class="homeactive">
                        <span class="iconfont">&#xe615;</span>
                        <p>我的</p>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
	import "../assets/icon/iconfont.css"
	import $ from "jquery"
  export default {
    name:'Footer',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){
		
	},
    updated(){
	},
    methods:{}
  }
</script>

<style scoped>
	.homeactive p{
		color: #33cccc;
	}
	.homeactive span{
		color: #33cccc;
	}
	.foot_h{height:60px;}
	#footer {
	    border-top: 1px solid #dcdcdc;
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    background: white;
	    z-index: 1000;
	    text-align: center;
	    font-size: 12px;
	    padding-bottom: 0px;
	    padding-top: 3px;
	    width: 100%;
	}
	#footer .first{
	    width: 40%;
	    float: left;
	}
	.am-avg-sm-2{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	#footer .first img{
	    height: 30px;	
	}
	#footer .first li p.active,#footer .first li span.active{
	    color: #33cccc;
	}
	#footer .beautiful{
	    width: 20%;
	    float: left;
	}
	#footer .beautiful img{
	    height: 50px;
	}
	#footer .last{
	    width: 40%;
	    float: right;
	}
	#footer .last img{
	    height: 30px;
	}
</style>
