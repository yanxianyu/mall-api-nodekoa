# ---- 20230129 ----

##  1、添加路由

`npm i koa-router`

##  2、拆分router

##  3、目录结构优化

拆分controller，创建user.controller.js

```js
class UserController {
    async register(ctx,next){
        ctx.body = "注册成功"
    }
    async login(ctx,next){
        ctx.body = "登陆成功"
    }
}
module.exports = new UserController()
```

改写user.route.js

```js
const KoaRouter = require("koa-router")
const { register, login } = require('../controller/user.controller')
const router = new KoaRouter({ prefix: '/users' })

// 注册接口
router.post('/register', register)
// 登陆接口
router.post("/login", login)

module.exports = router
```

创建`src/app/index.js`

```js
const Koa = require("koa")
const UserRouter = require('../router/user.route')
const app = new Koa()
app.use(UserRouter.routes())
module.exports = app
```



#  ---- 20230128 ---- 

##  1、项目初始化

`npm init -y`

`git init  `

##  2、项目搭建

`npm i koa`

##  3、基本优化

##  1、自动重启 

​	`npm i nodemon`

##    2、环境变量 

​	`npm i dotenv`