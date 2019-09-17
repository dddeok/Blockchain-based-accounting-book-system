import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';



import { Mainpage, Authpage, RegisterAccountpage } from '../pages'
class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Mainpage} />
                    <Route path="/auth/:mode" component={Authpage} />
                    <Route path="/register/account" component={RegisterAccountpage} />
                </Switch>
            </div>           
        );
    }
};

export default App;