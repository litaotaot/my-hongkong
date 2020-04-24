<template>
  <div id="user">
    <div class="tableKJ">
      <CommonTable
        :tableData="filterState.length !== 0 ? filterState : tableData"
        :HeaderData="HeaderData"
        :pageSizes4="pageSizes"
        :pageSize4="pageSize"
        :currentPage4="currentPage"
      ></CommonTable>
    </div>
  </div>
</template>


<script>
import CommonTable from "../../components/CommonTable";
import { mapState, mapMutations } from "vuex";
import { HeaderData } from "./data";
export default {
  name: "User",
  data() {
    return {
      HeaderData,
      pageSizes: [10, 20, 30, 40],
      pageSize: 10,
      currentPage: 1, //目标页
      // pageNum: 1
    };
  },
  computed: {
    ...mapState({
      tableData: state => state.filters.tableData, //可以用过滤的方法试下
      filterState: state => state.filters.filterState //可以用过滤的方法试下
    })
    // tableData() {
    //   return this.$store.state.filters.tableData
    // }
  },
  methods: {},
  mounted() {},
  components: {
    CommonTable
  }
};
</script>

<style scoped>
/* .tableKJ{ */
/* width: 100%; */
/* height: 60%; */
/* overflow-y: scroll; */
/* } */
</style>
