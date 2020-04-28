<template>
  <div>
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
    <div class="table">
      <el-table :data="getSelectData" stripe style="width: 100%" height="444" size="small">
        <template v-for="item in HeaderData">
          <el-table-column
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
            :align="item.align"
            :width="item.width"
            v-if="item.prop !== 'g'"
          ></el-table-column>
          <el-table-column
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
            :align="item.align"
            :width="item.width"
            v-else
          >
            <template slot-scope="scope">
              <el-button
                @click="handleClick"
                type="text"
                size="small"
                v-for="(node,index) in scope.row.z"
                :key="index"
              >{{node}}</el-button>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :hide-on-single-page="false"
          :background="true"
          :current-page="currentPage"
          :page-sizes="pageSizes"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
      <EditRole :dialogTableVisible="dialogTableVisible" @closeDialog="isCloseDialog"></EditRole>
    </div>
  </div>
</template>

<script>
import EditRole from "./EditRole";
// import getSyncData from '../api'
import {  mapMutations } from 'vuex'
import mixin from '../mixin/mixin'
import axios from 'axios'

export default {
  mixins: [mixin],
  props: {
    tableData: Array,              //必传  数据来源
    HeaderData: Array,             //必传  列名称
    pageSizes4: {
      type: Array,
      default: function() { return [10, 20, 30, 40]}
    },
    pageSize4: {
      type: Number,
      default: 10
    },
    currentPage4: {
      type: Number,
      default: 1
    },
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
      default: '请输入内容'
    },
  },
  data() {
    return {
      dialogTableVisible: false,
      // tableData: [],
      // filters: [],
      pageSizes: this.Clone(this.pageSizes4), //选择页数范围
      pageSize: this.Clone(this.pageSize4), //数据个数
      currentPage: this.Clone(this.currentPage4), //目标页
      pageNum: 1, //起始数据页
      checkList: [], //
      input: "", //
      buttonsArr: this.Clone(this.buttonsArr4),    //按钮
      checksArr: this.Clone(this.checksArr4),      //多选框
      placeholder: this.placeholder4        //搜索框提示语
    };
  },
  mounted() {
  },
  computed: {
    total() {
      return this.tableData.length;
    },
    getSelectData() {
      return this.tableData.slice(
        this.pageSize * (this.pageNum - 1),
        this.pageSize * this.pageNum
      );
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.pageNum = val;
    },
    handleClick(e) {
      // console.log(e.path[0].innerText);
      // axios.get('https://www.baidu.com/').then(res => {
      //   console.log(res)
      // })
    },
    isCloseDialog(e) {
      console.log(e);
      this.dialogTableVisible = e;
    },
    getSelect(e) {
      // console.log(e)
      this.$emit('onChange',e)
    },
    // ...mapMutations({
    //   getSelect: "filters/GET_FILTERS_STATE"
    // }),
  },
  created() {},
  components: {
    EditRole
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
.el-icon-search{
  font-size: 30px;
  margin-left: 10px;
}
.table {
  position: relative;
}
.pagination {
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: -50px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>>
