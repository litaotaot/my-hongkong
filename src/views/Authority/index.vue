<template>
    <CommonTable
    :tableData="tableData"
    :HeaderData="HeaderData"
    :buttonsArr4="buttonsArr"
    :checksArr4="checksArr"
    :placeholder4="placeholder"
    ></CommonTable>
</template>

<script>
import CommonTable from "../../components/CommonTable";
import { mapState, mapMutations } from "vuex";
import { HeaderData } from "../User/data";
export default {
  name: 'Permission',
  data(){
    return{
      HeaderData,
      buttonsArr: [
        { type: 'primary', text: '新增' },
        { type: 'primary', text: '扫描' },
        { type: 'primary', text: '导入' },
      ],
      checksArr: [
        { label: '全部下级' },
        { label: '已失效' },
      ],
      placeholder: '请输入内容',
      tableData:[
        {
    a: "在线",
    b: "王小虎",
    c: "上海市普陀区金沙江路 1518 弄",
    d: "11111",
    e: "22222",
    f: "33333",
    g: "44444"
  },
  {
    a: "待审核",
    b: "王小虎",
    c: "上海市普陀区金沙江路 1518 弄",
    d: "11111",
    e: "22222",
    f: "33333",
    g: "44444"
  },
      ]
    }
  },
  methods:{
  },
  mounted(){
    // console.log(tableData)
  },
  computed:{
    ...mapState({
      // tableData: state => {state.filters.tableData,console.log(state.filters.tableData)}, //可以用过滤的方法试下
      // filterState: state => state.filters.filterState //可以用过滤的方法试下
    })
  },
  components: {
    CommonTable
  }
}
</script>

<style scoped>

</style>