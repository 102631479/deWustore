const {
    ShopOrder
} = require('../../database/model/ShopOrder')
const jwt = require('jsonwebtoken')
module.exports = async (req, res) => {
    const obj = jwt.decode(req.headers.authorization, 'DingNing')
    const username = obj.username
    const {
        ShopId,
        ShopType,
        ShopOrderID,
        ShopCommodity,
        ShopPhone
    } = req.body
    const model = await ShopOrder.findOne({
        where: {
            username,
            ShopId,
            ShopType,
            ShopOrderID,
            ShopCommodity,
            ShopNumber
        }
    })
    if (model) {
        res.status(400).send({
            role: username,
            meta: {
                msg: "此信息已经存在于这个用户",
                status: 400
            }
        })
        return
    }
    await ShopOrder.update({
        ShopNumber,
        ShopId,
        ShopType,
        ShopOrderID,
        ShopCommodity,
        ShopPhone
    }, {
        where: {
            ['username']: username,
            ['id']: id,
        }
    }).then(d => {
        res.status(201).send({
            data: username,
            meta: {
                msg: "修改成功！",
                status: 201
            }
        })
    })


}