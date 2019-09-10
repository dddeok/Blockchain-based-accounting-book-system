import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Mainpage } from '../pages' 
class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Mainpage} />
            </Switch>
        );
    }
};

export default App;