import mongoose from 'mongoose';
import crypto from 'crypto';

import { generateToken} from '../jwt/jwt_token'

const User  = new mongoose.Schema({
    username: String,
    email : String,
    password : String,
    createdAt : {
        type: Date,
        default: Date.now
    }
})


function hash(password){
    return crypto.createHmac(
        'sha256',
        process.env.SECRET_KEY
    ).update(password).digest('hex')
}

User.statics.findByEmail = function (email) {
    return this.findOne({email}).exec()
}

User.statics.register = function ({ username, email, password}){
    const user = new this({
        username, email,
        password: hash(password)
    })
    return user.save()
}

User.methods.validatePassword = function(password){
    const contrast = hash(password)

    return this.password === contrast
}

User.methods.generateToken = function() {
    const payload = {
        _id : this._id,
        email : this.email
    }
    return generateToken(payload, 'User')
}

export default mongoose.model('User', User)
