<template>
  <div id="home">
    <el-container>
      <el-aside width="200px">
          <LayoutLeft></LayoutLeft>
      </el-aside>
      <el-container>
        <el-header>
          <LayoutTop></LayoutTop>
        </el-header>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LayoutLeft from "./Layout/LayoutLeft";
import LayoutTop from "./Layout/LayoutTop";
export default {
  name: "home",
  data() {
    return {
      isCollapse: false
    };
  },
  mounted() {},
  components: {
    LayoutLeft,
    LayoutTop
  }
};
</script>

<style scoped>
.el-header{
  padding: 0;
}
</style>
