import React, { Component }  from 'react';
import {  HashRouter, Route } from 'react-router-dom';

import Users from "./components/Users";
import AppLayout from "./components/AppLayout";
import UserProfileDetails from './components/UserProfileDetails';
import UserCreate from './components/UserCreate';

class App extends Component {
 render() {
    return (
        <AppLayout/>,
            <HashRouter>
                <div>
                    <Route path="/" component={AppLayout}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/profile/:number" component={UserProfileDetails}/>
                    <Route path="/create" component={UserCreate}/>
                </div>
            </HashRouter>
    );
  }

}

export default App;
