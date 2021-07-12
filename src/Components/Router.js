import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from '../Routes/Home';
import TV from '../Routes/TV';
import Search from '../Routes/Search';
import Header from './Header';

const RouterHandle = () => (
  <Router>
    <>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/tv/top" render={() => <h1>hi</h1>} />
        <Route path="/search" exact component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);

export default RouterHandle;