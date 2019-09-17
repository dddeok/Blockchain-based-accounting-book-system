import HeaderStore from './header';
import AuthStore from './auth';
import PageStore from './page';
import MainPageStore from "./main_page";

export default class RootStore {
    constructor(){
        this.header = new HeaderStore(this);
        this.auth = new AuthStore(this);
        this.page = new PageStore(this);
        this.main_page = new MainPageStore(this);
    }
}