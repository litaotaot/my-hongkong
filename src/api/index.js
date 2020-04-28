import Mock from 'mockjs'
let api = 'https://www.baidu.com/'
Mock.mock(api, {
    'code': 200,
    "data": {
        "dataArr|3": [
            {
                "id|+1": 1,
                "a": "已失效",
                "b": "组织结构",
                "c": "模块",
                "d": "人资管理",
                "e": "Page/a",
                "f": "固定行政部门维护"
            }, {
                "id|+1": 4,
                "a": "启用",
                "b": "职员管理",
                "c": "控件",
                "d": "人资管理",
                "e": "Page/b",
                "f": "固定行政部门维护"
            }
        ]
    }
})