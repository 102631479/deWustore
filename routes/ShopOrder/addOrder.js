const {
    ShopOrder
} = require('../../database/model/ShopOrder')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
    let obj = jwt.decode(req.headers.authorization, 'DingNing')
    let username = obj.username
    let {
        ShopId,
        ShopType,
        ShopOrderID,
        ShopCommodity,
        ShopPhone
    } = req.body
    let ShopNumber = ShopCommodity.split(",").length
    let model = await ShopOrder.findOne({
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
            data: null,
            meta: {
                msg: "此订单已经存在",
                status: 400
            }
        })
        return
    }
    await ShopOrder.create({
        ShopNumber,
        username,
        ShopId,
        ShopType,
        ShopOrderID,
        ShopCommodity,
        ShopPhone
    }).then(d => {
        res.status(201).send({
            data: d,
            meta: {
                msg: "创建成功！",
                status: 201
            }
        })
    })


}