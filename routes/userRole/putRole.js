const {
    PlatformAccount
} = require('../../database/model/PlatformAccount')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
    const obj = jwt.decode(req.headers.authorization, 'DingNing')
    const username = obj.username
    const {
        id,
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
        res.status(201).send({
            role: username,
            meta: {
                msg: "此信息已经存在于这个用户",
                status: 201
            }
        })
        return
    }
    await PlatformAccount.update({
        RoleType,
        Rolename,
        RolePhone,
        RoleRemarks
    }, {
        where: {
            ['username']: username,
            ['id']: id,
        }
    }).then(d => {
        res.status(200).send({
            data: username,
            meta: {
                msg: "修改成功！",
                status: 200
            }
        })
    })


}