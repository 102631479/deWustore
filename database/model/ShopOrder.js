const {
    Sequelize,
    sequelize
} = require('../init')

const ShopOrder = sequelize.define('ShopOrder', {
    // 用户id
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    // 购买账号
    ShopId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    // 购买手机号
    ShopPhone: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 账号平台
    ShopType: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 订单号
    ShopOrderID: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 购买商品
    ShopCommodity: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 商品数量
    ShopNumber: {
        type: Sequelize.STRING,
        allowNull: false,
    },

})

// 同步模型
ShopOrder.sync().then(() => {
    console.log('ShopOrder');
}).catch(() => {
    console.log('模型同步失败');
})

// 导出
module.exports = {
    ShopOrder
}