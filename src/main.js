const Koa = require("koa")

const { APP_PORT} = require("../config/config.default")

const UserRouter = require('./router/user.route')

const app = new Koa()

app.use(UserRouter.routes())


app.listen(APP_PORT,()=>{
    console.log(`server is running on http://localhost:${APP_PORT}`)
})