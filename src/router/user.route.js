const KoaRouter = require("koa-router")
const { register, login } = require('../controller/user.controller')
const router = new KoaRouter({ prefix: '/users' })

// 注册接口
router.post('/register', register)
// 登陆接口
router.post("/login", login)

module.exports = router