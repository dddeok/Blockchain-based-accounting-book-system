import Router from 'koa-router';
import postCtrl from './post.ctrl'

const post = new Router()

post.get('/', (ctx)=>{
    ctx.body = 'post'
})

post.post('/write', postCtrl.write)

post.get('/list',postCtrl.list)
post.get('/read/:id', postCtrl.read)

post.put('/update/:id', postCtrl.update)
post.delete('/remove/:id', postCtrl.remove)

export default post