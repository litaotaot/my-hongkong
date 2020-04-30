<template>
  <div>
    <LayoutConfig
      :buttonsArr4="buttonsArr"
      :checksArr4="checksArr"
      :placeholder4="placeholder"
      @onChange="getSelect"
    ></LayoutConfig>
    <div class="roleButtom">
      <MainTabel
        :tableData="filterState.length !== 0 ? filterState : tableData"
        :HeaderData4="HeaderData"
      ></MainTabel>
      <ChecksTable></ChecksTable>
    </div>
  </div>
</template>

<script>
import LayoutConfig from "../../components/LayoutConfig";
import MainTabel from "./mainTabel";
import ChecksTable from "./checksTable";
import { HeaderData } from "./data";
import { mapState } from "vuex"

export default {
  name: "Role",
  data() {
    return {
      api: "https://stackoverflow.com/",
      buttonsArr: [
        { type: "primary", text: "新增" },
        { type: "primary", text: "导入" }
      ],
      checksArr: [{ label: "已删除" }], //多选框
      placeholder: "请输入搜索关键词", //搜索框提示语
      HeaderData
    };
  },
  mounted() {
    this.$store.dispatch("filters/GET_ALL_SYNC_ROLE", { api: this.api })
  },
  computed: {
    ...mapState({
      tableData: state => state.filters.tableData, //可以用过滤的方法试下
      filterState: state => state.filters.filterState //可以用过滤的方法试下
    })
  },
  methods: {
    getSelect(e) {
      console.log(e);
    }
  },
  components: {
    LayoutConfig,
    MainTabel,
    ChecksTable
  }
};
</script>

<style scoped>
.roleButtom{
  /* height: 100%; */
  display: flex;
  height: 79vh;
}
</style>
