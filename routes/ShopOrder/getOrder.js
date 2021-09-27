const {
    ShopOrder
} = require('../../database/model/ShopOrder')
const jwt = require('jsonwebtoken')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
module.exports = async (req, res) => {
    console.log(req.query);
    const obj = jwt.decode(req.headers.authorization, 'DingNing')
    const username = obj.username
    ShopOrder.findAll({
        attributes: ['id', 'ShopPhone', 'ShopId', 'ShopType', 'ShopOrderID', 'ShopCommodity', 'ShopNumber'],
        where: {
            ['ShopPhone']: {
                [Op.like]: '%' + req.query.ShopPhone + '%'
            },
            ['username']: username,
        },
        // 分页属性
        // offset: 2,
        // limit: 10

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