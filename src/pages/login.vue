<template>
	<div id="login">
		<div>
			<ucNav borderWidth="0" text="登录" arrow="gray" fontColor="#fff"></ucNav>
		</div>
	    <div class="con">
	        <ul class="box_down">
	            <loginInput text="手机号" imgSrc="/images/my.png"  v-model="username"></loginInput>
				<loginInput text="密码" imgSrc="/images/password.png" v-model="password" type="password"></loginInput>
	        </ul>
			<div class="clear"></div>
	        <div class="find">
	            <a title="找回密码" href="javascript:;">找回密码</a>
	        </div>
		   <Button text="登录" bgColor="#3bcece" @click="login"></Button>
		   <span>{{errorMess}}</span>
			<router-link to='/reg'><Button text="注册新用户" bgColor="#ff9531"></Button></router-link>
	    </div>
	</div>
</template>

<script>
	import ucNav from "../components/uc-nav/index.vue"
	import loginInput from "../components/loginInput.vue"
	import Button from "../components/Button.vue"
	export default {
		name:"login",
		data(){
		  return {
		    username:'',
		    password:'',
		    errorMess:''//登录失败信息
		  }
		},
		components:{
			ucNav,
			loginInput,
			Button
		},
		methods:{
		  login(){
		    this.$axios({
		      url:'/api/login',
		      data:{username:this.username,password:this.password},
		      method:'post',
		    }).then(
		      res => {
		        console.log('login',res.data);//
		        if(res.data.err == 0){
		          // 1.种token
		          window.localStorage.setItem('user',JSON.stringify(res.data))
		          // 2.跳转到之前,没有之前跳转到user
		          if(this.$route.query.p){
		            this.$router.replace(this.$route.query.p)
		          }else{
		            this.$router.replace('/home')
		          }
		        }else{
		          this.errorMess = res.data.msg
		        }
		      }
		    )
		  }
		}
	}
</script>

<style scoped>
	#login{
	     background: url(../../public/images/login_bg.jpg) no-repeat;
	     background-size:cover;
	     position: fixed;
	     height:100%;
	     width:100%;
	 }
	#login .head .return .am-icon-angle-left{
	    font-size: 20px;
	    color: white;
	}
	#login .con{
	    padding: 70px 30px;
		box-sizing: border-box;
		text-align: center;
	}
	#login .con .num{
	    padding: 15px 20px;
	    width: 80%;
	    -webkit-border-radius: 10px;
	    -moz-border-radius: 10px;
	    border-radius: 10px;
		background-color:#e7e7ea;
		margin: 0 auto;
		margin-top: 0.175438rem;
	}
	#login .con .num li{
	   
	    border-bottom: 1px solid #999;
	}
	#login .con .num .num_list img{
	    margin-top: 15px;
	    width: 25px;
	    float: left;
	}
	.box_down{
		margin-bottom: 0.14035rem;
	}
	#login .con .num input{
	    float: left;
	    border: none ;
	    background: none;
	    margin-left: 10px;
	    font-size: 16px;
	    text-align: left;
	    height: 60px;
	    line-height: 60px;
	    width: 80%;
	}
	/* .second{
		margin-top: 0.175438rem ;
	} */
	#login .con .find{
	    height: auto;
		margin-right: 0.350877rem;
	}
	#login .con .find a{
	    color: white;
	    font-size: 14px;
	    float: right;
		margin-bottom: 0.175438rem;
	}
	#login .con .find a:hover{
		color: #0084C7;
		text-decoration: underline;
	}
	/*----------------------注册--------------------*/
	#login_new{
	    margin-top: 60px;
	}
	#login_new .fill_word{
	    width: 100%;
	}
	#login_new .fill_word .phone{
	    margin-bottom: 10px;
	    width: 100%;
	    background-color: white;
	    height: 50px;
	    line-height: 50px;
	    display: block;
	    border-bottom: 1px solid #eee;
	}
	#login_new .fill_word .phone input{
	    padding: 0 10px;
	    float: right;
	    height: 50px;
	    width: 100%;
	    border: none;
	    color: #999;
	    font-size: 14px ;
	    background-color: transparent;
	}
	#login_new .fill_word li{
	    width: 100%;
	    background-color: white;
	    height: 50px;
	    line-height: 50px;
	    display: block;
	    border-bottom: 1px solid #eee;
	    padding: 0 10px;
	}
	#login_new .fill_word li:last-child{
	    border: none;
	}
	#login_new .fill_word  p{
	    text-align: left;
	    font-size: 12px ;
	    margin: 5px 0 10px 0;
	    color: #999;
	    padding: 0 10px;
	}
	#login_new .fill_word li .am-form-group input{
	    float: right;
	    height: 50px;
	    width: 100%;
	    border: none;
	    color: #999;
	    font-size: 14px ;
	    background-color: transparent;
	}
	#login_new .fill_word   .fill_num{
	    margin-bottom: 10px;
	    width: 100%;
	    background-color: white;
	    height: 50px;
	    line-height: 50px;
	    display: block;
	    border-bottom: 1px solid #eee;
	}
	#login_new .fill_word  .fill_num  .fill input{
	    float: left;
	    padding: 0 10px;
	    height: 50px;
	    width: 70%;
	    border: none;
	    color: #999;
	    font-size: 14px ;
	    background-color: transparent;
	}
	#login_new .fill_word  .fill_num  .maneu input{
	    float: right;
	    padding: 0 10px;
	    height: 50px;
	    width: 30%;
	    border: none;
	    font-size: 14px ;
	    -webkit-border-radius: 5px;
	    -moz-border-radius: 5px;
	    border-radius: 5px;
	    color: #ff9531;
	    border: 1px solid #ff9531;
	    background-color: white;
	}
</style>
