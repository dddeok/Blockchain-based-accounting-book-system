import { config } from 'dotenv'

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import morgan from 'koa-morgan';

import mongoose from 'mongoose';
import api from '../api'

import jwt from '../jwt/jwt_token'

config ()

const app = new Koa()
const router = new Router()
const { PORT: port=4000, MONGO_URI: mongoURI } = process.env


mongoose.Promise = global.Promise

mongoose.connect(mongoURI, {useNewUrlParser: true})
    .then(() => console.log("Success Connect") )
    .catch((err) => console.error(err.stack))


app.use(morgan('dev'))
    .use(bodyParser())
    .use(jwt.jwtMiddleware)
    .use(router.routes())
    .use(router.allowedMethods())

router.get('/', (ctx)=> {
    ctx.body = 'Root Path Test'
})

router.use('/api',api.routes())

app.listen(port, () => console.log(`Koa Server On ${port} PORT!!`))