import React from 'react';

import { Page } from '../components/common';
import { Auth } from '../components/auth';

function Authpage(props) {
    const { match } = props;

    return (
        <Page>
            <Auth mode={match.params.mode}/>
        </Page>

    );
};

export default Authpage;