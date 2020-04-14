<template>
  <div id="user">
      <div class="Timer">
        <div class="hint_one">系统管理-用户管理</div>
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
      <div class="operation">
        <div class="buttons">
            <div>新增</div>
            <div>导入</div>
            <div>配置</div>
        </div>
        <div>
           <template>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="复选框 A"></el-checkbox>
                <el-checkbox label="复选框 B"></el-checkbox>
                <el-checkbox label="复选框 C"></el-checkbox>
              </el-checkbox-group>
            </template>
        </div>
        <div class="inputs" >
            <el-input
            placeholder="请输入内容"
            v-model="input"
            clearable>
            </el-input>
            <i class="iconfont icon-shuaxin" style="margin-right:0px;"></i>
        </div>
      </div>
      <CommonTable></CommonTable>
  </div>
</template>


<script>
import CommonTable from '../../components/CommonTable'
	function addNum(timer){
    return timer>=10 ? timer : "0"+timer
}
export default {
  name: 'User',
  data(){
    return{
      year:'',
      mouth:'',
      day:'',
      hours:'',
      minutes:'',
      seconds:'',
      loginname:'',
      checkList: '123123',
      input: ''
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
  },
  components: {
    CommonTable
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
.operation{
  height: 40px;
  display: flex;
  /* justify-content: space-between; */
  padding-left: 20px;
  padding-right: 20px;
}
.buttons{
  width: 310px;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.buttons > div{
  width: 90px;
  height: 40px;
  color: white;
  line-height: 40px;
  text-align: center;
  background: #108CEE;
}
.inputs{
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.inputs > div{
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.check{
  width: 330px;
  height: 40px;
  margin-left: 80px;
  position: relative;
}
.check > input{
  height: 40px;
  border: none;
  line-height: 40px;
  width: 330px;
}
.check > i{
  position: absolute;
  right: 10px;
}
</style>
