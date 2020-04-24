<template>
  <div class="table">
    <el-table :data="getSelectData" stripe style="width: 100%" height="484" size="small">
      <template v-for="item in HeaderData">
        <el-table-column
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :align="item.align"
          v-if="item.prop !== 'g'"
        ></el-table-column>
        <el-table-column
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :align="item.align"
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
</template>

<script>
import EditRole from "./EditRole";
// import getSyncData from '../api'

export default {
  props: {
    tableData: Array,
    HeaderData: Array,
    pageSizes4: Array,
    pageSize4: Number,
    currentPage4: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      dialogTableVisible: false,
      // tableData: [],
      // filters: [],
      pageSizes: this.pageSizes4 || [10, 20, 30, 40], //选择页数范围
      pageSize: this.pageSize4 || 10, //数据个数
      currentPage: this.currentPage4, //目标页
      pageNum: 1 //起始数据页
    };
  },
  mounted() {
    // console.log(this.getSelectData())
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
    handleClick(r) {
      console.log(r);
    },
    isCloseDialog(e) {
      console.log(e);
      this.dialogTableVisible = e;
    },
    watch() {}
  },
  created() {},
  components: {
    EditRole
  }
};
</script>

<style scoped>
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
