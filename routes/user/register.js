const {
    User
} = require('../../database/model/User')
const {
    tokenReturn
} = require('../../database/model/token')
// 导出
module.exports = async (req, res) => {
    // 接收客户端 传递过来的 信息
    const {
        username,
        password
    } = req.body
    const token = ''
    if (!req.body.username || !req.body.password) {
        res.status(400).send({
            data: null,
            meta: {
                msg: "缺少参数",
                status: 400
            }
        })
        return
    }

    // 根据客户端传递过来的 用户名 查询 数据库 中 是否 存在这用户名
    const model = await User.findOne({
        where: {
            username
        }
    })
    // 判断
    if (model) {
        res.status(400).send({
            data: null,
            meta: {
                msg: "用户名已经存在！",
                status: 400
            }
        })
        return
    }
    // 创建用户
    await User.create({
        username,
        password
    })

    await tokenReturn.create({
        username,
        token
    })
    res.status(201).send({
        meta: {
            msg: "创建成功！",
            status: 201
        }
    })

}