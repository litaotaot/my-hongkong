import Mock from 'mockjs'
let api = 'https://www.baidu.com/'
Mock.mock(api,{
    'code': 200
})