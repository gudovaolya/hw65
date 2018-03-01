import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from "./containers/Home/Home";
import InnerPage from "./containers/InnerPage/InnerPage";
import EditPage from "./containers/Admin/EditPage/EditPage";


class App extends Component {
  render() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/pages/:id" exact component={InnerPage}/>
                <Route path="/edit" exact component={EditPage}/>
                <Route render={() => <h1>404 page not found</h1>}/>
            </Switch>
        </Layout>

    );
  }
}

export default App;
