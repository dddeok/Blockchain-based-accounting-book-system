import React from 'react';

import { Header, Footer } from '../common/'

// import 'scss/Page.css'

function Page (props) {
    return (
        <div className="page">
            <Header/>

            <main>
                {props.children}
            </main>

            <Footer/>
        </div>
    );
};

export default Page;