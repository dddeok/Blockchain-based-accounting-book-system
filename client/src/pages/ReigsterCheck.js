import React, {Component} from 'react';

import Account from '../components/auth/Account';
import queryString from 'query-string';
import { inject,observer } from 'mobx-react';

@inject('auth')
@observer
class ReigsterCheck extends Component{ 

    componentDidMount(){
        this.props.auth.isLoggedIn()
    }

    render() {
        const { location, match} = this.props;
        const query = queryString.parse(location.search);
    
        console.log(query.code);
    
        return (
            <div>
                <Account auth_code={query.code} />
            </div>        
           
        );
    }
};

export default ReigsterCheck;