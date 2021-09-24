const { Sequelize, sequelize } = require('../init')
const tokenReturn =  sequelize.define('tokens', {
    username: {
        // 定义类型 字符串
        type: Sequelize.STRING,
        // 是否允许为空 默认是 true
        allowNull: false,
        // 约束不能为空
        unique: true
    },
    token: {
        // 定义类型 字符串
        type: Sequelize.STRING,
        // // 是否允许为空 默认是 true
        allowNull: false,
        // // 约束不能为空
    },
    // createdAt: Sequelize.BIGINT,
    // updatedAt: Sequelize.BIGINT,
})

// 同步模型
tokenReturn.sync().then(() => {
    console.log('token');
}).catch(()=>{
    console.log('失败');

})
// 导出
module.exports =  {tokenReturn}