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

exports.list = async (ctx) => {
    const page = parseInt(ctx.params.page || 1, 10)

    if(page<1){
        ctx.status = 400
        return
    } 

    try {
        const postlist = await Post.find()
                                    .sort({_id: -1})
                                    .limit(5)
                                    .skip((page-1)*5).exec()

        const lastpage = await Post.countDocuments().exec()

        ctx.set('last-page', Math.ceil(lastpage/10))
        ctx.body = postlist
    } catch(err){
        ctx.trow(500, err)
    }
}

exports.read = async (ctx) => {
    const { id } = ctx.params

    try {
        const post = await Post.findById(id).exec()

        if(!post){
            ctx.status = 404
            return
        }

        ctx.body = post
    } catch (err) { 
        ctx.thorw(500, err)
    }
}

exports.update = async (ctx)  => {
    const { user } = ctx.request
    const { id } = ctx.params 

    ctx.request.body.UpdatedAt = Date.now()

    try {
        const post = await Post.findByIdAndUpdate(
            id,
            ctx.request.body,
            { new : true }
        ).exec()

        if(!post) {
            ctx.status = 404
            return
        }

        if (!user || user._id !== post.author.toString()){
            ctx.status = 403
            return
        }

        ctx.body = post
    } catch (err) {
        ctx.thorw(500, err)
    }
}

exports.remove = async (ctx) => {

    const { user } = ctx.request
    const { id } = ctx.params

    try { 
        const post = await Post.findById(id).exec()

        if(! user || user._id !== post.author.toString()) {
            ctx.status = 403
            return
        }
        await Post.findByIdAndRemove(id).exec()
        
        ctx.status = 204
    } catch (err) {
        ctx.thorw(500, err)
    }
}