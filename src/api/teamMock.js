import Mock from 'mockjs'
let api = "https://www.zhihu.com/"

Mock.mock(api,{
    "code": 200,
    "data": {
        "dataArr|5": [
            {
                "id|+1": 1,
                "a": "启用",
                "b|+1": "系统管理组"+ 1,
                "c": "人资管理, 系统管理",
            },
            {
                "id|+1": 6,
                "a": "已删除",
                "b|+1": "系统管理组"+ 6,
                "c": "人资管理",
            }
        ]
    }
})