<template>
	<div>
		<ucNav borderWidth="0" text="注册" arrow="gray" fontColor="#000"></ucNav>
		<div id="login_new">
		    <div class="fill_word">
		            <div class="phone">
						<regInput text="请填写您的手机号" v-model="username"></regInput>
		                <div class="clear"></div>
		            </div>
		        <ul>
		            <li>
		               <regInput text="请填写您的密码" v-model="password" type="password"></regInput>
		            </li>
					<li>
					   <regInput text="请填写您的昵称" v-model="nikename" ></regInput>
					</li>
					<li>
					  <input type="file"  id="icon">请上传您的头像
					</li>
		            <li>
						<regInput text="请再次填写您的密码" type="password"></regInput>
		            </li>
		        </ul>
		        <p>最少六位的字母、数字组合，不区分大小写</p>
		        <Button width="100%" bgColor="#ff9531" text="注册" @click="reg"></Button>
				  {{errorMess}}
		    </div>
		</div>
	</div>
</template>

<script >
	import ucNav from "../components/uc-nav/index.vue"
	import Button from "../components/Button.vue"
	import regInput from "../components/regInput.vue"
	export default {
		name:"reg",
		components:{
			ucNav,
			Button,
			regInput
		},
		data(){
		  return {
		    username:'',
		    password:'',
		    nikename:'',
		    errorMess:''
		  }
		},
		methods:{
		  reg(){
			 console.log(this.username)
		    let formData = new FormData();
		    formData.append('username',this.username);
		    formData.append('password',this.password);
		    formData.append('nikename',this.nikename);
		    
		    let iconInputFile = document.getElementById('icon');
		    formData.append('icon',iconInputFile.files[0]);//取出input file的文件体
		    
		    this.$axios({
		      url:'/api/reg',
		      method:'post',
		      data:formData
		    }).then(
		      res => {
		        if(res.data.err === 0){
		          console.log('reg',res.data);
		          this.$router.push('/login')
		        }else{
		          this.errorMess=res.data.msg
		        }
		      }
		    )
		    
		  }
		}
	}
</script>

<style scoped>
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
		
	   padding-left: 10px;
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
		.fill_word{
			margin-top: -20px;
		}
		.phone{
			padding-left: 0.175438rem;
		}
</style>
