<template>
  <div class="left">
    <div class="head">
      <i class="iconfont icon-hezi" style="color:white;font-size:34px;"></i>
    </div>
    <!-- <el-menu
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
    </el-menu>-->

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#1e1e28"
      text-color="#fff"
      style="border:none;"
      :collapse="isCollapse"
      active-text-color="#ffd04b"
    >
      <template v-for="item in elMenu">
        <el-submenu :index="item.name" v-if="item.children" :key="item.name">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <template v-for="item in item.children">
            <el-menu-item :index="item.name" :key="item.name">{{ item.name }}</el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-else :index="item.name" :key="item.name" @click="item.func">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
    <div class="open" @click="OpenNavi">
      <i class="iconfont icon-zhankai" style="color:white;font-size:34px;"></i>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import LayoutTop from "./LayoutTop";
export default {
  name: "layout",
  data() {
    return {
      isCollapse: false,
      elMenu: [
        // { name: "用户管理", icon: "el-icon-location", children:[ {name: '111'}, {name: '222'} ]},
        { name: "用户管理", icon: "el-icon-location", func: this.OpenUser },
        { name: "角色管理", icon: "el-icon-menu", func: this.OpenRole },
        { name: "权限维护", icon: "el-icon-document", func: this.OpenPermission },
        { name: "组管理", icon: "el-icon-setting", func: this.OpenTeam }
      ]
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
    OpenUser() {
      this.$router.push({ name: "user" });
    },
    OpenRole() {
      this.$router.push({ path: "/home/role" });
    },
    OpenPermission() {
      this.$router.push({ name: "permission" });
    },
    OpenTeam() {
      this.$router.push({ path: "/home/team" });
    }
  },
  components: {
    LayoutTop
  }
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 197px;
  min-height: 400px;
  box-sizing: border-box;
}
#home {
  display: flex;
}
.left {
  max-width: 198px;
  height: 100vh;
  background: #1e1e28;
  position: relative;
  padding: 14px 14px;
  box-sizing: border-box;
}
.open {
  position: fixed;
  bottom: 10px;
  left: 14px;
}
.head {
  /* position: fixed; */
  /* top: 20px;
  left: 14px;
  margin-bottom: 20px; */
  /* margin: 14px 20px 0 0; */
}
.right {
  flex: 1;
  /* min-width: 1200px; */
  min-width: 1100px;
}
.el-menu {
  margin-left: -13px;
}
</style>