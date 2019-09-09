import User from '../../models/User';
import Joi from 'joi';


exports.register = async (ctx) => {
    const data = Joi.object().keys({
        email : Joi.string().email().required(),
        username : Joi.string().required(),
        password: Joi.string().min(6).required()
    })

    const result = Joi.validate(ctx.request.body, data);

    if(result.error){
        ctx.status = 400
        console.log(result.error)
        return
    }

    let existing = null

    try {
        existing = await User.findByEmail(ctx.request.body.email)
    } catch (err){
        ctx.throw(500, err)
    }

    if(existing){
        ctx.status = 409
        ctx.body = '중복 이메일 주소'
        return
    }

    let user = null

    try {
        user = await User.register(ctx.request.body)
    }catch (err){
        ctx.throw(500, err)
    }

    let token = null;
    try {
      token = await user.generateToken();
    } catch(err){
      ctx.throw(500, err);
    }

     ctx.cookies.set('access_token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7일
      });
    ctx.body = user
}
exports.login = async (ctx) => {
    // 데이터 검증
      const data = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
      })
    
      const result = Joi.validate(ctx.request.body, data)
    
      if (result.error) {
        // 400: 잘못된 요청
        ctx.status = 400
        return
      }
    
      // email, password를 리퀘스트에서 받아옴
      const { email, password } = ctx.request.body
    
      let user = null
    
      try {
        user = await User.findByEmail(email)
      } catch (err) {
        ctx.throw(500, err)
      }
    
      // 사용자 해싱 비밀번호 비교(모델 메소드)
      if (!user || !user.validatePassword(password)) {
        // 403: 권한없음
        ctx.status = 403
        return
      }
    
      // 토큰 생성 및 쿠키에 저장
      let token = null
    
      try {
        token = await user.generateToken()
      } catch (err) {
        ctx.throw(500, err)
      }
    
      ctx.cookies.set('access_token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7일
      })
      ctx.body = user
}
 

exports.logout = async (ctx) => {
    ctx.cookies.set('access_token', null, {
        httpOnly: true,
        maxAge: 0
      })
    
      // 204: 컨텐츠 없음
      ctx.status = 204
}

exports.check = (ctx) => {
    const { user } = ctx.request
  
    if (!user) {
      ctx.status = 403;
      return;
    }
  
    ctx.body = user
}