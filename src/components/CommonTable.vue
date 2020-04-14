<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%" @cell-mouse-enter='aa'>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="b" label="地址"></el-table-column>
      <el-table-column prop="c" label="地址"></el-table-column>
      <el-table-column prop="operating" label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            @click="handleClickOne(scope.row.date,scope.$index)"
            type="text"
            size="small"
          >{{scope.row.date === '在线' ? '查看' : scope.row.date === '离线' ? '编辑' : scope.row.date === '待审核' ? '审核' : ''}}</el-button>
          <el-button
            @click="handleClickTwo(scope.row.date,scope.$index)"
            type="text"
            size="small"
          >{{scope.row.date === '在线' ? '强制下线' : scope.row.date === '离线' ? '删除' : ''}}</el-button>
          <el-button
            @click="handleClickThree(scope.row.date,scope.$index)"
            type="text"
            size="small"
          >{{scope.row.date === '离线' ? '授权' : ''}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <EditRole :dialogTableVisible="dialogTableVisible" @closeDialog='isCloseDialog'></EditRole>
  </div>
</template>

<script>
import EditRole from "./EditRole";
// import getSyncData from '../api'


export default {
  data() {
    return {
      dialogTableVisible: false,
      tableData: [],
      filters: []
    };
  },
  mounted() {
    this.getInitState()
  },
  methods: {
    handleClickOne(r, i) {
      if (r === "在线") {
        console.log("查看");
      } else if (r === "离线") {
        console.log("编辑");
        console.log(this.dialogTableVisible);
        this.dialogTableVisible = true;
      } else if (r === "待审核") {
        console.log("审核");
      }
    },
    handleClickTwo(r, i) {
      if (r === "在线") {
        console.log("强制下线");
      } else if (r === "离线") {
        console.log("删除");
      }
    },
    handleClickThree(r, i) {
      console.log("授权");
    },
    isCloseDialog(e){
      console.log(e)
      this.dialogTableVisible = e
    },
    aa(row, column, cell, event){
      console.log(row, column, cell, event)
    },
    getInitState(){
      this.$store.dispatch('filters/GET_ALL_SYNC_STATE')
      let tableData
      let _this = this
      setTimeout(function() {
        tableData = [
          {
            date: "在线",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
            b: "11111",
            c: "22222"
          },
          {
            date: "在线",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
            b: "11111",
            c: "22222"
          },
          {
            date: "离线",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
            b: "11111",
            c: "22222"
          },
          {
            date: "待审核",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
            b: "11111",
            c: "22222"
          }
        ]
        _this.tableData = tableData
      }, 2000);
      
    },
    watch(){

    }
  },
  created () {
  },
  components: {
    EditRole
  }
};
</script>

<style scoped>


</style>>
