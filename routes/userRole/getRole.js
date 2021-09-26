const {
    PlatformAccount
} = require('../../database/model/PlatformAccount')
const jwt = require('jsonwebtoken')
module.exports = async (req, res) => {
    const obj = jwt.decode(req.headers.authorization, 'DingNing')
    const username = obj.username
    PlatformAccount.findAll({
        attributes: ['username', 'id', 'RoleType', 'RolePhone', 'RoleRemarks'],
        where: {
            ['username']: username
        }
    }).then(d => {
        res.status(200).send({
            data: d,
            meta: {
                msg: "查询成功！",
                status: 200
            }
        })
    });


}