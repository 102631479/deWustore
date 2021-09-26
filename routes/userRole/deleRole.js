const {
    PlatformAccount
} = require('../../database/model/PlatformAccount')
const jwt = require('jsonwebtoken')
module.exports = async (req, res) => {
    const obj = jwt.decode(req.headers.authorization, 'DingNing')
    const username = obj.username
    const model = await PlatformAccount.findOne({
        where: {
            ['username']: username,
            ['id']: req.query.id

        }
    })
    if (model) {
        PlatformAccount.destroy({
            where: {
                ['username']: username,
                ['id']: req.query.id
            }
        }).then(d => {
            res.status(200).send({
                role: username,
                meta: {
                    msg: "删除成功！",
                    status: 200
                }
            })
        });

    } else {
        res.status(400).send({
            role: username,
            meta: {
                msg: "删除失败！数据错误",
                status: 400
            }
        })
    }




}