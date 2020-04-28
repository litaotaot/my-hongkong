import Name from "../name";
import axios from 'axios'
// import { resolve } from "dns";
// import { reject } from "q";

import '../../api/index'   //数据模拟
import '../../api/teamMock'
import '../../api/userMock'

const initState = function () {
  return {
    tableData: [],
    filterState: []
  }
}

const filters = {
  namespaced: true,
  state: initState(),
  mutations: {
    //user异步突变
    [Name.GET_ALL_STATE]: (state, data) => {
      data.map(item => {
        if (item.a === '在线') {
          item.z = ['查看', '强制下线']
        } else if (item.a === '离线') {
          item.z = ['编辑', '删除', '授权']
        } else {
          item.z = ['审核']
        }
      })
      state.tableData = data
    },
    //authority异步突变
    GET_ALL_AUTHORITY: (state, data) => {
      console.log(data)
      data.map(item => {
        if (item.a === '启用') {
          item.z = ['编辑', '删除']
        } else if (item.a === '已失效') {
          item.z = ['清除', '回收']
        }
      })
      state.tableData = data
    },
    //team异步突变
    GET_ALL_TEAM: (state, data) => {
      console.log(data)
      data.map(item => {
        if (item.a === '启用') {
          item.z = ['编辑', '删除']
        } else if (item.a === '已删除') {
          item.z = ['清除', '回收']
        }
      })
      state.tableData = data
    },
    //数据筛选
    [Name.GET_FILTERS_STATE]: (state, data) => {
      console.log(data)
      let filterState = []
      data.map(item => {
        state.tableData.map(node => {
          if (node.a === item) {
            filterState.push(node)
          }
        })
      })
      console.log(filterState)
      state.filterState = filterState
    },
    // GET_FILTERS_AUTHORITY: (state, data) => {
    //   console.log(state)
    //   console.log(data)
    //   let filterState = []
    //   data.map(item => {
    //     state.tableData.map(node => {
    //       if (node.a === item) {
    //         filterState.push(node)
    //       }
    //     })
    //   })
    //   console.log(filterState)
    //   state.filterState = filterState
    // },
  },
  actions: {
    GET_ALL_SYNC_STATE({ commit }, data) {
      new Promise((resolve, reject) => {
        console.log(data)
        axios.get("https://www.bootcdn.cn/").then((res) => {
          console.log(res)
          const { dataArr } = res.data.data
          commit(Name.GET_ALL_STATE, dataArr)
        })
      })
    },
    GET_ALL_SYNC_AUTHORITY({ commit }, data) {
      new Promise((resolve, reject) => {
        axios.get(data.api).then((res) => {
          const { dataArr } = res.data.data
          commit("GET_ALL_AUTHORITY", dataArr)
        })
      })
    },
    GET_ALL_SYNC_TEAM({ commit }, data) {
      console.log(data)
      new Promise((resolve, reject) => {
        axios.get(data.api).then((res) => {
          const { dataArr } = res.data.data
          commit("GET_ALL_TEAM", dataArr)
        })
      })
    }
  }
}

export default filters