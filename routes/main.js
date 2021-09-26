const express = require('express')
const main = express.Router()

// 用户申请
main.post('/register',require('./user/register'))
main.post('/login', require('./user/login'))
// 角色管理
main.post('/user-role/add-role',require('./userRole/addRole'))
main.get('/user-role/add-role',require('./userRole/getRole'))
main.put('/user-role/add-role',require('./userRole/putRole'))
main.delete('/user-role/add-role',require('./userRole/deleRole'))




// 创建一个路由测试一下
main.get('/index', (req, res) => {
    res.send('访问成功！')
})

// 导出
module.exports = main