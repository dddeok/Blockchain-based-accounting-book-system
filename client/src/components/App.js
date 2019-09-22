import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';




import { Mainpage, Authpage, RegisterAccountpage, RegisterCheck, InformationPage } from '../pages'
class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Mainpage} />
                    <Route path="/auth/:mode" component={Authpage} />
                    <Route path="/register/account" component={RegisterAccountpage} />
                    <Route path="/account/check" component={RegisterCheck} />
                    <Route path="/account/information" component={InformationPage} />

                </Switch>
            </div>           
        );
    }
};

export default App;