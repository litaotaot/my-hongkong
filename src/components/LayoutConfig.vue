<template>
  <div class="operation">
    <div class="buttons">
      <el-row>
        <template v-for="item in buttonsArr">
          <el-button :type="item.type" :key="item.text">{{item.text}}</el-button>
        </template>
      </el-row>
    </div>
    <div class="checks">
      <el-checkbox-group v-model="checkList" @change="getSelect">
        <template v-for="item in checksArr">
          <el-checkbox :label="item.label" :key="item.label"></el-checkbox>
        </template>
      </el-checkbox-group>
    </div>
    <div class="inputs">
      <el-input :placeholder="placeholder" v-model="input" clearable></el-input>
      <i class="el-icon-search" style="margin-right:0px;"></i>
    </div>
  </div>
</template>

<script>
import mixin from "../mixin/mixin";
export default {
  mixins: [mixin],
  props: {
    buttonsArr4: {
      type: Array,
      default: []
    },
    checksArr4: {
      type: Array,
      default: []
    },
    placeholder4: {
      type: String,
      default: "请输入搜索关键词"
    }
  },
  data() {
    return {
      checkList: [], //默认是否选择checks
      input: "", //
      buttonsArr: this.Clone(this.buttonsArr4), //按钮
      checksArr: this.Clone(this.checksArr4), //多选框
      placeholder: this.placeholder4 //搜索框提示语
    };
  },
  methods: {
    getSelect(e) {
      this.$emit("onChange", e);
    }
  }
};
</script>

<style scoped>
.operation {
  display: flex;
  background-color: rgb(247, 249, 251);
  box-shadow: rgba(0, 0, 0, 0.05) 0px -1px inset;
  min-height: 70px;
}
.buttons {
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.checks {
  width: 34%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inputs {
  width: 33%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
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
.el-input {
  width: 80%;
}
.el-icon-search {
  font-size: 30px;
  margin-left: 10px;
}
</style>