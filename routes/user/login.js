const {
    User
} = require('../../database/model/User')
const jwt = require('jsonwebtoken')
const {
    tokenReturn
} = require('../../database/model/token')
var md5 = require('md5');
module.exports = async (req, res) => {
    // 接收客户端传递过来的账号和密码
    const {
        username,
        password
    } = req.body


    // 加密
    // let md5Data = md5(username)
    // let gmcryptSm4 = (password, md5Data) => {
    //     let sm4Config = {
    //         key: md5Data.substring(md5Data.length - 16),
    //         iv: md5Data.substring(md5Data.length - 16),
    //     };
    //     let sm4 = new SM4(sm4Config);
    //     let newPassword = password.trim();
    //     let text = sm4.encrypt(newPassword);
    //     // console.log(sm4.decrypt(text), "解密字符串");
    //     return sm4.encrypt(newPassword);
    //     // return newPassword
    // }
    // let newPassword = gmcryptSm4(password, md5Data)
    // console.log(data,'datasm4');
    // console.log(req.body);
    // return



    // 根据用户名来查询数据库是否存在这个用户
    const findUser = await User.findOne({
        where: {
            username
        }
    })
    // 判断
    if (!findUser) {
        res.status(400).send({
            data: null,
            meta: {
                msg: "用户名不存在！",
                status: 400
            }
        })
        return
    }
    // 判断账号 和 密码 是否正确

    if (username != findUser.username || password != findUser.password) {
        res.status(400).send({
            data: null,
            meta: {
                msg: "账号或者密码不正确！",
                status: 400
            }
        })
        return
    }
    // 登陆成功生成 token 返回给客户端 第一个参数 是 组 ，第二个是 私钥（自己随便定义）
    const token = jwt.sign({
        username
    }, 'DingNing')
    await tokenReturn.update({
        token: token
    }, {
        where: {
            username: username
        }
    })
    res.status(400).send({
        data: {
            username: username,
            token
        },
        meta: {
            msg: "登陆成功",
            status: 200
        }
    })
}