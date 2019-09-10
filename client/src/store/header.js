import {observable, action} from 'mobx';

export default class HeaderStore {

    @observable menuOpen = false;
    
    constructor(root) {
        this.root = root
    }

    @action toggleMenu = () => {
        this.menuOpen = !this.menuOpen
    }
    
}