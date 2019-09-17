import React from 'react';

import Account from '../components/auth/Account';

function ReigsterCheck(props) {
    const { match } = props
    return (
        <div>
            <Account access={match.params.access} />
        </div>
    );
};

export default ReigsterCheck;