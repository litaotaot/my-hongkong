const HeaderData = [
    { prop: "a", label: "状态", width: 180 },
    { prop: "b", label: "名称", width: 180 },
    { prop: "c", label: "类型" },
    { prop: "d", label: "父权限" },
    { prop: "e", label: "资源" },
    { prop: "f", label: "描述" },
    { prop: "g", label: "操作", align: "center" },
]

const TreeData = [
    {
        label: "系统管理", children:
            [
                {
                    label: "系统管理1", children: [
                        { label: "系统管理2" }
                    ]
                }
            ]
    },
    {
        label: "人资管理", children:
            [
                {
                    label: "人资管理1", children: [
                        { label: "人资管理3" }
                    ]
                },
                {
                    label: "人资管理2", children: [
                        { label: "人资管理4" }
                    ]
                }
            ]
    },
]

export {
    HeaderData,
    TreeData
}