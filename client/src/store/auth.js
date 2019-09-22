import {observable, action} from 'mobx';
import axios from 'axios';

const ROOT = 'http://35.243.78.192:4000';

export default class AuthStore {
    
    constructor(root) {
        this.root= root;
    }

    @observable currentUser = {}

    @action isLoggedIn = async () => {
        console.log("====isLogged IN");
        console.log(this.currentUser)
        await axios.get(ROOT + '/api/validate', {withCredentials: true})
            .then(res => {
                this.currentUser  = res.data.id
                console.log("====isLoggeed Axios");
                console.log(this.currentUser)
            })
            .catch((err) => {
                return
            })
    }

    @observable id = ''
    @observable pswd = ''

    @action changeEmail = (e) => {
        this.id = e.target.value
    }

    @action changePassword = (e) => {
        this.pswd = e.target.value
    }

    @action loginSubmit = (e) => {
        e.preventDefault()
        console.log("a");
        axios.post(ROOT+ '/api/login',{
            id : this.id,
            pswd : this.pswd
        }, {withCredentials: true}).then(res => {
            document.location.href="/"
        }).catch((err)=> console.error(err)
        ) 
    }

    @action keyPressLogin = (e) => {
        if(e.key === 'Enter'){
            this.loginSubmit(e)
        }
    }

    @observable idReg = ''
    @observable pswdReg = ''
    @observable union_nameReg = ''

    @action changeEmailReg = (e) => {
        this.emailReg = e.target.value
    }

    @action changeUsernameReg = (e) => {
        this.usernameReg = e.target.value
    }

    @action changeUnionnameReg = (e) => {
        this.union_nameReg = e.target.value
    }

    
    @action changePasswordReg = (e) => {
        this.pswdReg = e.target.value
    }

    @action registerSubmit = (e) => {
        e.preventDefault()
        axios.post(ROOT + '/api/join', {
            id: this.emailReg,
            union_name : this.union_nameReg,
            pswd : this.pswdReg
        }).then(res => {
            document.location.href="/"
        }).catch((err) => console.error(err));
    }

    @action keyPressRegister = (e) => {
        if(e.key === 'Enter'){
            this.registerSubmit(e)
        }
    }

    @action handleLogout = () => {
    
        //console.log("LogOut")
        axios.post(ROOT + '/api/logout', {withCredentials:true})
            .then((res)=> {
                this.currentUser = {}
                console.log("==================logout")
                console.log(this.currentUser)
                document.location.href="/"
            }).catch((err)=> {
                console.error(err);
                return
            })
    }

    @observable accountAdd
    
    @action registerAccount = async(e) => {
        e.preventDefault()
         await axios.post(ROOT + '/api/bank/auth_code_url')
             .then((res)=> {
                 console.log(res)
                 this.accountAdd = res.data.location
                 console.log(res.data.location)
                 document.location.href=this.accountAdd
            })
    }

    @observable auth_code
    @observable pinNumber

    @action registerPinnumber = (e) => {
        console.log(e)
        this.auth_code = e
        axios.post(ROOT + '/api/bank/access_token',{
            code : this.auth_code,
            user_id : this.id
        })
        .then((res)=> {
            this.pinNumber = res.data
            document.location.href = "/"
        })
        // document.location.href="/"
    }
}
