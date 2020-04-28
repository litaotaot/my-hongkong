<template>
  <CommonTable
    :tableData="filterState.length !== 0 ? filterState : tableData"
    :HeaderData="HeaderData"
    :buttonsArr4="buttonsArr"
    :checksArr4="checksArr"
    @onChange="getChange"
  ></CommonTable>
</template>

<script>
import CommonTable from "../../components/CommonTable";
import { HeaderData } from "./data";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      api: "https://www.zhihu.com/",
      HeaderData,
      buttonsArr: [
        { type: "primary", text: "新增" },
        { type: "primary", text: "导入" }
      ],
      checksArr: [{ label: "已删除" }]
    };
  },
  computed: {
    ...mapState({
      tableData: state => state.filters.tableData, //可以用过滤的方法试下
      filterState: state => state.filters.filterState //可以用过滤的方法试下
    })
  },
  methods: {
    ...mapMutations({
      getChange: "filters/GET_FILTERS_STATE"
    })
  },
  mounted() {
    this.$store.dispatch("filters/GET_ALL_SYNC_TEAM", { api: this.api });
  },

  components: {
    CommonTable
  }
};
</script>

<style scoped>
</style>