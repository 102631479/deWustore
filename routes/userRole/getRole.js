const {
    PlatformAccount
} = require('../../database/model/PlatformAccount')
const jwt = require('jsonwebtoken')
module.exports = async (req, res) => {
    // res.status(200).send({
    //     // data: d,
    //     // extent: d.length,
    //     // PageSize: 10,
    //     page: 1,
    //     meta: {
    //         msg: "查询成功！",
    //         status: 200
    //     }
    // })
    // return
    const obj = jwt.decode(req.headers.authorization, 'DingNing')
    const username = obj.username
    PlatformAccount.findAll({
        attributes: [ 'id','Rolename', 'RoleType', 'RolePhone', 'RoleRemarks'],
        where: {
            ['username']: username
        }
    }).then(d => {
        res.status(200).send({
            data: d,
            extent: d.length,
            PageSize: 10,
            page: 1,
            meta: {
                msg: "查询成功！",
                status: 200
            }
        })
    });


}