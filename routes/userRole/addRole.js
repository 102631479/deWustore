const {
    PlatformAccount
} = require('../../database/model/PlatformAccount')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
    // id查询语句从token获取
    const obj = jwt.decode(req.headers.authorization, 'DingNing')
    console.log(obj.username, 'username');
    const username = obj.username
    const {
        RoleType,
        Rolename,
        RolePhone,
        RoleRemarks
    } = req.body
    const model = await PlatformAccount.findOne({
        where: {
            username,
            RoleType,
            Rolename,
            RolePhone,
            RoleRemarks
        }
    })
    if (model) {
        res.status(400).send({
            data: null,
            meta: {
                msg: "此用户已经存在",
                status: 400
            }
        })
        return
    }
    const createUser = await PlatformAccount.create({
        username,
        RoleType,
        Rolename,
        RolePhone,
        RoleRemarks
    })
    res.status(201).send({
        // data: createUser,
        meta: {
            msg: "创建成功！",
            status: 201
        }
    })

}