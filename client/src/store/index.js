import HeaderStore from './header';
import AuthStore from './auth';

export default class RootStore {
    constructor(){
        this.header = new HeaderStore(this);
        this.auth = new AuthStore(this);
    }
}