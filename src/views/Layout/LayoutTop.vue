<template>
    <div class="Timer">
      <div class="hint_one">系统管理-用户管理</div>
      <div class="hint_two">{{year}}-{{mouth}}-{{day}}&nbsp;&nbsp;{{hours}}:{{minutes}}:{{seconds}}</div>
      <div class="hint_three">
        <div style="margin:0 45px;">工单</div>
        <div style="margin:0 45px;">消息</div>
        <div style="margin:0 45px;">帮助</div>
        <div style="margin-left:35px;">
          {{loginname}}
          <i class="iconfont icon-yonghu" style="font-size:24px;"></i>
        </div>
      </div>
    </div>
</template>

<script>
function addNum(timer) {
  return timer >= 10 ? timer : "0" + timer;
}

export default {
  name: "LayoutTop",
  data() {
    return {
      year: "",
      mouth: "",
      day: "",
      hours: "",
      minutes: "",
      seconds: "",
      loginname: "",
      setTime: null
    };
  },
  methods: {
    gettime() {
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
    },
    getInitState() {
      this.$store.dispatch("filters/GET_ALL_SYNC_STATE").then(console.log(this.$store.state));
    },
    //设置时间
    timeBeat(){
      this.gettime();
      this.setTime = setInterval(() => {
        console.log(1)
        this.gettime();
      }, 1000);
      this.getInitState()
    },
    //获取用户
    getName() {
      this.loginname = window.sessionStorage.getItem("loginname");
    }
  },
  mounted() {
    this.timeBeat()
  },
  beforeDestroy () {
    clearInterval(this.setTime)
  }
}
</script>

<style scoped>
.Timer {
  height: 51px;
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
}
.hint_one {
  line-height: 51px;
  font-weight: bold;
}
.hint_two {
  line-height: 51px;
}
.hint_three {
  line-height: 51px;
  display: flex;
  justify-content: space-between;
}
</style>