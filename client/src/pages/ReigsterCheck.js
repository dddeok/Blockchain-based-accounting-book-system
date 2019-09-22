import React from 'react';

import Account from '../components/auth/Account';
import queryString from 'query-string';

function ReigsterCheck({location, match}) {
    
    const query = queryString.parse(location.search);
    
    console.log(query.code);

    return (
        <div>
            <Account auth_code={query.code} />
        </div>
    );
};

export default ReigsterCheck;