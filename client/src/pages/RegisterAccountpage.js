import React from 'react';

import { Page } from '../components/common';
import { RegisterAccount } from '../components/register';

function Authpage(props) {
    const { match } = props;

    return (
        <Page>
            <RegisterAccount />
        </Page>

    );
};

export default Authpage;