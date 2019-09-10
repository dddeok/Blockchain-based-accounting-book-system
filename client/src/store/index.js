import HeaderStore from './header';

export default class RootStore {
    constructor(){
        this.header = new HeaderStore(this);
    }
}