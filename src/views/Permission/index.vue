<template>
  <div id="permission">
      <div class="Timer">
        <div class="hint_one">系统管理-权限维护</div>
        <div class="hint_two">{{year}}-{{mouth}}-{{day}}&nbsp;&nbsp;{{hours}}:{{minutes}}:{{seconds}}</div>
        <div class="hint_three">
          <div style="margin:0 45px;">工单</div>
          <div style="margin:0 45px;">消息</div>
          <div style="margin:0 45px;">帮助</div>
          <div style="margin-left:35px;">{{loginname}}
            <i class="iconfont icon-yonghu" style="font-size:24px;"></i>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
	function addNum(timer){
    return timer>=10 ? timer : "0"+timer
}
export default {
  name: 'Permission',
  data(){
    return{
      year:'',
      mouth:'',
      day:'',
      hours:'',
      minutes:'',
      seconds:'',
      loginname:''
    }
  },
 methods:{
      gettime(){
       let date = new Date();
       let Gyears = date.getFullYear();
       let Gmouths = date.getMonth() + 1;
       let Gday = date.getDate();
       let Ghours = date.getHours();
       let Gminutes = date.getMinutes();
       let Gseconds = date.getSeconds();
       this.year = addNum(Gyears);
       this.mouth = addNum(Gmouths);
       this.day = addNum(Gday);
       this.hours = addNum(Ghours);
       this.minutes = addNum(Gminutes);
       this.seconds = addNum(Gseconds);
      }
  },
  mounted(){
     this.loginname = window.sessionStorage.getItem('loginname');
     this.gettime();
     setInterval(()=>{
          this.gettime();
     },1000)
  }
}
</script>

<style scoped>
.Timer{
  height: 51px;
  background: #F5F5F5;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  }
.hint_one{
  line-height: 51px;
  font-weight: bold;
}
.hint_two{
  line-height: 51px;
}
.hint_three{
  line-height: 51px;
  display: flex;
  justify-content: space-between;
}
</style>