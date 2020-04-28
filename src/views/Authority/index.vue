<template>
  <div class="container">
    <div class="authorityLeft">
      <h1>ABCD</h1>
      <el-tree :data="TreeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
    <div class="authorityRight">
      <CommonTable
        :tableData="filterState.length !== 0 ? filterState : tableData"
        :HeaderData="HeaderData"
        :buttonsArr4="buttonsArr"
        :checksArr4="checksArr"
        :placeholder4="placeholder"
        @onChange="getChange"
      ></CommonTable>
    </div>
  </div>
</template>

<script>
import CommonTable from "../../components/CommonTable";
import { mapState, mapMutations, mapActions } from "vuex";
import { HeaderData, TreeData } from "./data";

export default {
  name: "Permission",
  data() {
    return {
      api: "https://www.baidu.com/",
      HeaderData,
      TreeData,
      buttonsArr: [
        { type: "primary", text: "新增" },
        { type: "primary", text: "扫描" },
        { type: "primary", text: "导入" }
      ],
      checksArr: [{ label: "全部下级" }, { label: "已失效" }],
      placeholder: "请输入内容",
      defaultProps: {                  //tree配置
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    ...mapMutations({
      getChange: "filters/GET_FILTERS_STATE"
    })
  },
  mounted() {
    this.$store.dispatch("filters/GET_ALL_SYNC_AUTHORITY", { api: this.api });
  },
  computed: {
    ...mapState({
      tableData: state => state.filters.tableData, //可以用过滤的方法试下
      filterState: state => state.filters.filterState //可以用过滤的方法试下
    })
  },
  components: {
    CommonTable
  }
};
</script>

<style scoped>
.container {
  /* width: 1149px; */
  /* display: flex; */
  display: -webkit-box;
  /* flex-shrink: 0; */
}
.authorityLeft {
  width: 15%;
}
.authorityLeft > h1 {
  text-align: center;
  line-height: 70px;
}
.authorityRight {
  width: 85%;
}
</style>