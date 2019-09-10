import {observable, action} from 'mobx';
import axios from 'axios';


export default class AuthStore {

    constructor(root) {
        this.root= root;
    }
    
    @observable currentUser = {}

    @action isLoggedIn = async () => {
        await axios.get('/api/auth/check')
            .then(res => {
                this.currentUser = res.data
            })
            .catch((err) => {
                return
            })
    }

    @observable email = ''
    @observable password = ''

    @action changeEmail = (e) => {
        this.email = e.target.value
    }

    @action changePassword = (e) => {
        this.password = e.target.value
    }

    @action loginSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/auth/login', {
            email : this.email,
            password : this.password
        }).then(res => {
            document.location.href="/"
        }).catch((err)=> console.error(err)
        ) 
    }

    @action keyPressLogin = (e) => {
        if(e.key === 'Enter'){
            this.loginSubmit(e)
        }
    }

    @observable emailReg = ''
    @observable usernameReg = ''
    @observable passwordReg = ''

    @action changeEmailReg = (e) => {
        this.emailReg = e.target.value
    }

    @action changeUsernameReg = (e) => {
        this.usernameReg = e.target.value
    }

    
    @action changePasswordReg = (e) => {
        this.passwordReg = e.target.value
    }

    @action registerSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/auth/register', {
            email: this.emailReg,
            username : this.usernameReg,
            password : this.passwordReg
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
        axios.post('api/auth/logout')
            .then(()=> {
                document.location.href="/"
            }).catch((err)=> {
                console.error(err);
                return
                
            })
    }
}