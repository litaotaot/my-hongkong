<template>
  <div class="left">
    <el-menu
      default-active="1"
      text-color="#ffffff"
      background-color="#1E1E28"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      style="border:none;"
    >
      <el-menu-item index="1" style="margin-top:80px;" @click="Openuser">
        <i class="iconfont icon-yonghuguanli" style="color:#ffffff;font-size:20px;"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="2" style="margin-top:50px;" @click="Openrole">
        <i class="iconfont icon-jiaoseguanli" style="color:#ffffff;font-size:20px;"></i>
        <span slot="title">角色管理</span>
      </el-menu-item>
      <el-menu-item index="3" style="margin-top:50px;" @click="Openpermission">
        <i class="iconfont icon-quanxianweihu" style="color:#ffffff;font-size:20px;"></i>
        <span slot="title">权限维护</span>
      </el-menu-item>
    </el-menu>
    <div class="open" @click="OpenNavi">
      <i class="iconfont icon-zhankai" style="color:white;font-size:34px;"></i>
    </div>
    <div class="head">
      <i class="iconfont icon-hezi" style="color:white;font-size:34px;"></i>
    </div>
  </div>
</template>

<script>
import LayoutTop from "./LayoutTop";
export default {
  name: "layout",
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    OpenNavi() {
      if (!this.isCollapse) {
        this.isCollapse = true;
      } else {
        this.isCollapse = false;
      }
    },
    Openuser() {
      this.$router.push({ name: "user" });
    },
    Openrole() {
      this.$router.push({ path: "/home/role" });
    },
    Openpermission() {
      this.$router.push({ name: "permission" });
    }
  },
  components: {
    LayoutTop
  }
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
#home {
  display: flex;
}
.left {
  max-width: 200px;
  height: 100vh;
  background: #1e1e28;
  position: relative;
}
.open {
  position: fixed;
  bottom: 10px;
  left: 14px;
}
.head {
  position: fixed;
  top: 20px;
  left: 14px;
  margin-bottom: 20px;
}
.right {
  flex: 1;
  /* min-width: 1200px; */
  min-width: 1100px;
}
</style>