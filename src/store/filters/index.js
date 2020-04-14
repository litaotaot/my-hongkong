import Name from "../name";

const initState = function() {
    return {
        
    }
}


const filters = {
    namespaced: true,
    state: initState(),
    mutations: {
        [Name.GET_ALL_STATE]:(state, data) => {
            state.tableData = data
        },
        aa:() => {
            console.log(1)
        }
    },
    actions: {
        GET_ALL_SYNC_STATE(context) {
            let tableData
            setTimeout(() => {
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
                  context.commit(Name.GET_ALL_STATE, tableData)
            }, 2000);
        }
    }
}

export default filters