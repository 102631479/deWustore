const {
    PlatformAccount
} = require('../../database/model/PlatformAccount')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
    const obj = jwt.decode(req.headers.authorization, 'DingNing')
    const username = obj.username







}