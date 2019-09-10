import React from 'react';

import { Header, Footer } from '../common/'

import '../../scss/Page.scss'

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