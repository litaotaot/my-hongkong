<template>
    <div class="operation">
      <div class="buttons">
        <el-row>
          <el-button type="primary">新增</el-button>
          <el-button type="primary">导入</el-button>
          <el-button type="primary">配置</el-button>
        </el-row>
      </div>
      <div>
        <template>
          <el-checkbox-group v-model="checkList" @change='getSelect'>
            <el-checkbox label="在线"></el-checkbox>
            <el-checkbox label="离线"></el-checkbox>
            <el-checkbox label="待审核"></el-checkbox>
          </el-checkbox-group>
        </template>
      </div>
      <div class="inputs">
        <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
        <i class="iconfont icon-shuaxin" style="margin-right:0px;"></i>
      </div>
    </div>
</template>

<script>
import {  mapMutations } from 'vuex'

export default {
    name: "LayoutConfig",
  data() {
    return {
      checkList: [], //
      input: "",  //
    };
  },
  methods: {
      ...mapMutations({
      getSelect: 'filters/GET_FILTERS_STATE'
    })
  }
}
</script>

<style scoped>
.operation {
  height: 40px;
  display: flex;
  /* justify-content: space-between; */
  padding-left: 20px;
  padding-right: 20px;
  background-color: rgb(212, 209, 223);
}
.buttons {
  width: 310px;
  height: 40px;
}
.inputs {
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.inputs > div {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.check {
  width: 330px;
  height: 40px;
  margin-left: 80px;
  position: relative;
}
.check > input {
  height: 40px;
  border: none;
  line-height: 40px;
  width: 330px;
}
.check > i {
  position: absolute;
  right: 10px;
}    
</style>