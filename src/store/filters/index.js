import Name from "../name";

const initState = function () {
  return {
    tableData: [],
    filterState: []
  }
}

const aa = [
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
    a: "在线",
    b: "王小虎",
    c: "上海市普陀区金沙江路 1518 弄",
    d: "11111",
    e: "22222",
    f: "33333",
    g: "44444"
  },
  {
    a: "离线",
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
    a: "在线",
    b: "王小虎",
    c: "上海市普陀区金沙江路 1518 弄",
    d: "11111",
    e: "22222",
    f: "33333",
    g: "44444"
  },
  {
    a: "离线",
    b: "王小虎",
    c: "上海市普陀区金沙江路 1518 弄",
    d: "11111",
    e: "22222",
    f: "33333",
    g: "44444"
  },
  {
    a: "离线",
    b: "王小虎",
    c: "上海市普陀区金沙江路 1518 弄",
    d: "11111",
    e: "22222",
    f: "33333",
    g: "44444"
  },
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
    a: "在线",
    b: "王小虎",
    c: "上海市普陀区金沙江路 1518 弄",
    d: "11111",
    e: "22222",
    f: "33333",
    g: "44444"
  },
  {
    a: "离线",
    b: "王小虎",
    c: "上海市普陀区金沙江路 1518 弄",
    d: "11111",
    e: "22222",
    f: "33333",
    g: "44444"
  },
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

const filters = {
  namespaced: true,
  state: initState(),
  mutations: {
    [Name.GET_ALL_STATE]: (state, data) => {
      data.map(item => {
        if(item.a === '在线') {
          item.z = ['查看', '强制下线']
        } else if (item.a === '离线') {
          item.z = ['编辑', '删除', '授权']
        } else {
          item.z = ['审核']
        }
      })
      state.tableData = data
    },
    [Name.GET_FILTERS_STATE]: (state, data) => {
      console.log(data)
      let filterState=[]
      data.map(item => {
        state.tableData.map(node => {
          if (node.date === item) {
            filterState.push(node)
          }
        })
      })
      console.log(filterState)
      state.filterState = filterState
    }
  },
  actions: {
    GET_ALL_SYNC_STATE(context) {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit(Name.GET_ALL_STATE, aa)
          resolve()
        }, 2000);
      })
    }
  }
}

export default filters