<template>
  <div id="login">
      <div class="header"></div>
      <div class="img"></div>
      <div class="hint">开飞机的舒克  &nbsp;&nbsp;****舒克机场维护与管理系统</div>
      <div class="inputs">
          <h2>管理后台</h2>
          <div class="zhanghao">
              <div class="iconfont icon-yidongduanicon-" style="font-size:30px;margin:auto 10px;"></div>
              <div>
                  <input class="text" type="text" placeholder="   请输入账号" v-model="username">
              </div>
          </div>
          <div class="password">
              <div class="iconfont icon-mima" style="font-size:30px;margin:auto 10px;"></div>
              <div>
                  <input class="pass" type="password" placeholder="   请输入密码" v-model="password">
              </div>
          </div>
          <div class="vcode">
              <input class="inputcode" type="text" placeholder="  请输入验证码" v-model="getcode">
              <div class="createcode" ref="vvcode">{{code}}</div>
          </div>
          <div class="tologin" @click="Login">登录</div>
          <div class="register" @click="ToLogin">立即注册</div>
      </div>
      <div class="footer">
          <div>惊雷 紫金塌陷地火吹</div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            password:'',
            getcode:'',
            code:''
        }
    },
    methods:{
        CreateCode(){
             this.code = '';
             var codeLength = 4; //验证码的长度   
             var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
         'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数   
             for (var i = 0; i < codeLength; i++) { //循环操作   
             var charIndex = Math.floor(Math.random() * 36); //取得随机数的索引   
             this.code += random[charIndex]; //根据索引取得随机数加到code上   
            }
        },
        Login(){
            var CodeValue = this.$refs.vvcode.innerHTML;
            var GetText = this.username;
            var GetPassword = this.password;
            var GetCode = this.getcode.toUpperCase();
            if(!GetText){
                alert("请输入账号");
                return;
            }
            if(!GetPassword){
                alert("请输入密码");
                return;
            }
            if(!GetCode){
                alert("请输入验证码");
                return;
            }
            if(GetCode != CodeValue ){
                alert("验证码错误");
                this.CreateCode();
                this.password = '';
                this.getcode = '';
            }
            if(GetText != ''&& GetPassword != '' && GetCode == CodeValue){
                this.Openloading();//引用mixin开启加载页
                window.sessionStorage.setItem('loginname',GetText)
                this.$router.push({path:'/home/user'})
                this.Closeloading();//关闭加载页
            }
        },
        ToLogin(){
            this.$router.push({name:'register'})
        }
    },
    mounted(){
        this.CreateCode();
    }
}
</script>

<style scoped>
#login{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
}
.header{
    width: 100vw;
    height: 25vh;
}
.img{
    width: 100vw;
    background-image: url('../../assets/airport.png');
    flex: 1;
}
.hint{
    position: absolute;
    height: 20vh;
    top: 5vh;
    left: 14vh;
    line-height: 20vh;
    font-size: 50px;
    font-weight: bolder;
}
.inputs{
    position: absolute;
    width: 356px;
    height: 412px;
    background:#FFFFFF;
    background: rgba(0,0,0,0.3);
    right: 10vh;
    top: 5vh;
    text-align: center;
}
.inputs > h2{
   margin: 10px 0;
   color: black;
}
.footer{
    width: 100vw;
    height: 51px;
    position: absolute;
    bottom: 0;
    background: #000033;
    background: rgba(0,0,0,0.5);
    text-align: center;
}
 .footer > div{
    color: white;
    line-height: 51px;
    font-size: 26px;
} 
.zhanghao{
    display: flex;
    background: white;
    height: 50px;
    width: 300px;
    margin-left: 28px;
    margin-top: 30px;
}
.text{
    height: 40px;
    margin:5px 0;
    width: 200px;
    border:none;
    line-height: 40px;
    border-left: solid 1px gray;
}
.password{
    display: flex;
    background: white;
    height: 50px;
    width: 300px;
    margin-left: 28px;
    margin-top: 30px;
}
.pass{
    height: 40px;
    margin:5px 0;
    width: 200px;
    border:none;
    line-height: 40px;
    border-left: solid 1px gray;
}
.vcode{
    display: flex;
    background: white;
    height: 50px;
    width: 300px;
    margin-left: 28px;
    margin-top: 30px;
}
.inputcode{
    height: 50px;
    width: 150px;
    border: none;
    line-height: 50px;
}
.createcode{
    height: 50px;
    width: 150px;
    background: gray;
    line-height: 50px;
    color: blue;
    font-size: 30px;
    letter-spacing: 15px;
}
.tologin{
    height: 50px;
    width: 300px;
    text-align: center;
    line-height: 50px;
    height: 50px;
    margin-left: 28px;
    margin-top: 30px;
    color: white;
    background: #2468F2;
}
.register{
    color: blue;
    position: absolute;
    bottom: 10px;
    right: 50px;
    font-weight: bolder;
}
</style>>

