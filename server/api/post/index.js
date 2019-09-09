import Router from 'koa-router';
import postCtrl from './post.ctrl'

const post = new Router()

post.get('/', (ctx)=>{
    ctx.body = 'post'
})

post.post('/write', postCtrl.write)

export default post