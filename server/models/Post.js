import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    title: String,
    body : String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    UpdatedAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Post', Post)