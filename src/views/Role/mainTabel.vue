<template>
  <div class="container">
    <div class="header"></div>
    <div class="main">
      <!-- <el-table :data="getSelectData" stripe style="width: 100%" height="444" size="small"> -->
      <el-table :data="tableData" stripe style="width: 100%" height="100%" size="small">
        <template v-for="item in HeaderData">
          <el-table-column
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
            :align="item.align"
            :width="item.width"
            v-if="item.prop !== 'g'"
          ></el-table-column>
          <el-table-column
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
            :align="item.align"
            :width="item.width"
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
    </div>
  </div>
</template>

<script>
import mixin from '../../mixin/mixin';
export default {
  mixins: [mixin],
  props: {
    tableData: {
      type: Array,
      default: []
    },
    HeaderData4: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      HeaderData: this.Clone(this.HeaderData4)
    };
  },
  methods: {
      handleClick(e) {
          console.log(e)
      }
  },
  components: {}
};
</script>

<style scoped>
.container {
  width: 25%;
  height: 100%;
}
.header {
  width: 100%;
  height: 40px;
  background-color: #c4ebde;
}
.header::before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 100%;
  background-color: #409eff;
}
.main {
    /* display: flex; */
    /* height: 81vh; */
    height: 72vh;
}
</style>