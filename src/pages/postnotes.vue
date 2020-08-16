<template>
	<div id="release">
	    <div class="cover">
	        <router-link title="" class="return" to='/my'><span><img src="../../public/images/history1.png" alt=""></span></router-link>
	        <a  title="" class="change_pic" href="#">更换封面</a>
	        <div  title="" class="title" >
	            <span id = "names">1日游</span>
	            <img id="isgod" src="/images/write.png"/>
	            <input type="text" id="shuru" style="display:none;">
	            <input type="submit" id="tijiao" style="display:none;">
	            <div class="clear"></div>
	        </div>
	    </div>
	    <div class="fill">
	        <div class="am-form-group">
	            <textarea class="text" rows="5" id="doc-ta-1" placeholder="说说这次旅行"></textarea>
	        </div>
	    </div>
	    <div >
	        <input type="submit" class="keep" value="保存"> </input>
	        <input type="submit" class="done" value="发布"> </input>
	    </div>
	</div>
</template>

<script>
	export default {
		name:"postnotes",
		
	}
</script>

<style scoped>
	#release .cover{
	    position: relative;
	    height: 250px;
	    background: url(/images/write_cover_zy.jpg) no-repeat center;
		background-size: cover;
	}
	#release .cover .return{
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
	#release .cover .return .am-icon-angle-left{
	    width: 40px;
	    height: 40px;
	    line-height: 40px;
	}
	#release .cover .title{
		width:100%;
	    position: absolute;
	    bottom: 20px;
		padding:0 15px;
	}
	#release .cover .title #shuru{
	    background:0;
	    line-height: 30px;
		border:0;
		outline:none;
		font-size:16px;
		color:#000;
		width:80%;
		border-bottom:1px solid #666;
	}
	#release .cover .title #tijiao{
	    background-color: #eee;
	    width:15%;
	    height: 25px;
	    border: none;
	}
	#release .cover .title span{
	    float: left;
	    color: white;
	    margin-right: 5px;
	    font-size: 24px;
	}
	#release .cover .title img{
	    float: right;
	    width: 20px;
	    padding-top: 8px;
		padding-right: 0.526315rem;
	}
	#release .cover .change_pic{
	    display: block;
	    background-color: rgba(0,0,0,0.5);
	    -webkit-border-radius: 15px;
	    -moz-border-radius: 15px;
	    border-radius: 15px;
	    text-align: center;
	    width: 80px;
	    height: 30px;
	    line-height: 30px;
	    position: absolute;
	    top:50%;
	    left: 50%;
		margin-top: -15px;
	    margin-left: -40px;
	    color: white;
	}
	
	/*-----------编辑内容---------*/
	#release .fill{
	    padding: 10px;
	    margin-top: 20px;
	}
	#release .fill .am-form-group{
	    background-color: white;
	    width: 100%;
	    min-height: 200px;
	    padding: 10px;
	    border: 1px solid #eee;
	}
	#release .fill .text {
	    border: none;
	    float: left;
	    color:#999999;
	    font-size: 14px;
	    width: 100%;
	    min-height: 180px;
	}
	.done{
	    border: none;
	    width: 100%;
	    height: 50px;
	    background-color: #54d8cf;
	    color: white;
	    font-size: 18px;
	    text-align: center;
	    line-height: 50px;
	    position: fixed;
	    bottom: 0;
	}
	.keep{
	    border: none;
	    width: 100%;
	    height: 50px;
	    background-color: #ccc;
	    color: white;
	    font-size: 18px;
	    text-align: center;
	    line-height: 50px;
	    position: fixed;
	    bottom: 70px;
	}
	
</style>
