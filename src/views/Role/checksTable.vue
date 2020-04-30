<template>
  <div class="container">
    <div class="header"></div>
    <div class="main">
      <div class="mainSelect">
        <ul>
          <li v-for="(item, index) in manageArr" :key="index">
            {{item.name}}
            <i class="isTrue"></i>
          </li>
        </ul>
      </div>
      <div class="mainChecks">
        <el-divider content-position="left">按钮</el-divider>
        <el-checkbox-group v-model="checkedButtom" @change="handleCheckedButtomChange">
            <el-checkbox v-for="city in buttomColumns" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
        <div class="checksAll">
            <el-checkbox :indeterminate="isIndeterminate1" v-model="checkButtomAll" @change="handleCheckButtomAllChange">全选</el-checkbox>
        </div>
        <el-divider content-position="left">数据列</el-divider>
        <el-checkbox-group v-model="checkedColumns" @change="handleCheckedColumnsChange">
            <el-checkbox v-for="city in dataColumns" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
        <div class="checksAll">
            <el-checkbox :indeterminate="isIndeterminate2" v-model="checkColumnsAll" @change="handleCheckColumnsAllChange">全选</el-checkbox>
        </div>
        <el-divider content-position="left">数据行</el-divider>
        <el-checkbox v-for="city in dataLine" :label="city" :key="city">{{city}}</el-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
import { ManageArr } from './data'
export default {
  data() {
    return {
      manageArr: ManageArr,
      isIndeterminate1: true,
      isIndeterminate2: true,
      checkButtomAll: true,
      checkColumnsAll: true,
      checkedButtom: ['新增', '编辑'],    //默认选择
      checkedColumns: ['状态', '所需角色'],
      checkedLine: ['当前用户', '编辑'],   
      buttomColumns: ['新增', '配置', '编辑', '审核', '停用', '授权'],      //全部checks
      dataColumns: ['状态', '用户名', '数据来源', '所需组', '所需角色', '描述', '操作'],
      dataLine: ['当前用户', '所属用户', '所有用户']
    };
  },
  methods: {
      handleCheckButtomAllChange(val) {
        this.checkedButtom = val ? this.buttomColumns : [];
        this.isIndeterminate1 = false;
      },
      handleCheckedButtomChange(value) {
        let checkedCount = value.length;
        this.checkButtomAll = checkedCount === this.buttomColumns.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.buttomColumns.length;
      },
      handleCheckColumnsAllChange(val) {
        this.checkedColumns = val ? this.dataColumns : [];
        this.isIndeterminate2 = false;
      },
      handleCheckedColumnsChange(value) {
        let checkedCount = value.length;
        this.checkColumnsAll = checkedCount === this.dataColumns.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.dataColumns.length;
      }
  }
};
</script>

<style scoped>
.container {
  width: 70%;
  height: 100%;
  margin-left: 5%;
}
.header {
  width: 100%;
  height: 40px;
  background-color: #c4ebde;
}
.header::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 100%;
  background-color: #409eff;
}
.mainSelect {
  width: 20%;
  height: 100%;
  overflow-y: scroll;
}
ul > li {
  list-style: none;
  display: inline-block;
  height: 40px;
  width: 100%;
  line-height: 40px;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  position: relative;
}
.isTrue::after {
  content: "\221A";
  position: absolute;
  right: 14px;
}
.main {
  display: flex;
  height: 72vh;
  overflow-y: scroll;
}
.mainChecks{
    position: relative;
    width: 100%;
    margin-left: 5%;
}
.el-checkbox-group {
    display: inline-block;
    width: 90%;
}
.checksAll{
    display: inline-block;
    position: absolute;
    right: 0;
}
</style>