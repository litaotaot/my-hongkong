<template>
    <el-dialog title="编辑角色" :visible.sync="dialogTableVisible" width="30%" :before-close="close" center>
        <div class="modal">
            <div>角色名称: </div>
            <div class="editMiddel"><span>权限集合: </span>
            <div class="selectType">
            <el-tree
                :data="data"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps"
            ></el-tree>
            </div>
            </div>
            <div>描述: </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
props: {
    dialogTableVisible: Boolean
    },
  data() {
    return {
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            },{
              id: 9,
              label: "二级 3-1"
            },
            {
              id: 18,
              label: "二级 3-2"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
      centerDialogVisible(){
          this.$emit('closeDialog', false)
      },
      close(){
          this.$emit('closeDialog', false)
      }
  }
};
</script>

<style scoped>
.editMiddel{
    display: flex;
    height: 200px;
}
.selectType{
    width: 80%;
    overflow-y: scroll;
}
.modal{
    height: 220px;
}
</style>