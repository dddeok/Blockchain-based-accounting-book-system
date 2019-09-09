import Post from '../../models/Post';
import User from '../../models/User';
import Joi from 'joi';

exports.write = async (ctx) =>{
    const { user } = ctx.request

    if(!user){
        ctx.status=403
        console.log(user)
        return
    }

    const data = Joi.object({
        title: Joi.string().required(),
        body: Joi.string().required()
    })

    const result = Joi.validate(ctx.request.body, data)

    if(result.error){
        ctx.status =400
        ctx.body = result.error
        return
    }

    let currentUser = null

    try { 
        currentUser = await User.findById(user).exec()
    } catch(err){
        ctx.thorw(500, err)
    }

    const {title, body} = ctx.request.body
    const author = ctx.request.user
    const name = currentUser.username


    const post = new Post({
        title, body, author, name
    }) 

    try{
        await post.save()
        ctx.body = post
    } catch(err){
        ctx.thorw(500, err)
    }
}