import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";


class App extends Component {
  render() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" exact component={About}/>
                <Route path="/contacts" exact component={Contacts}/>
                <Route render={() => <h1>404 page not found</h1>}/>
            </Switch>
        </Layout>

    );
  }
}

export default App;
