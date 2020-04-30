import Mock from "mockjs"

let api = "https://stackoverflow.com/"

Mock.mock(api, {
    "code": 200,
    "data": {
        "dataArr|5": [
            {
                a: "启用",
                c: "系统管理",
            },
            {
                a: "禁用",
                c: "系统管理",
            },
            {
                a: "删除",
                c: "系统管理",
            }
        ]
    }
})