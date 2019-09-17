import {observable, action} from 'mobx';
import axios from 'axios';

const ROOT = 'http://127.0.0.1:4000';

export default class PageStore {
    
    constructor(root) {
        console.log("PageStore Consturct");
        this.root= root;
    }

    @observable transactionList;

    @action loadTransactions = async (unionName) => {
        console.log("=== loadTransactions ===" + unionName);
        await axios.get(ROOT + '/api/transactions',{
            params: {union_name : unionName}
        })
            .then(res => {
                console.log("=== Load Success ====");
                console.log(res.data);
                this.transactionList = res.data;
            })
            .catch((err) => {
                console.log(err);
        });
    }


}