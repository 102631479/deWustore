const {
    Sequelize,
    sequelize
} = require('../init')
const PlatformAccount = sequelize.define('PlatformAccount', {
    // 用户id
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    // 名字
    Rolename: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 平台
    RoleType: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 手机
    RolePhone: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    // 备注
    RoleRemarks: {
        type: Sequelize.STRING,
        allowNull: true,
    },
})

// 同步模型
PlatformAccount.sync().then(() => {
    console.log('PlatformAccount');
}).catch(() => {
    console.log('模型同步失败');
})

// 导出
module.exports = {
    PlatformAccount
}