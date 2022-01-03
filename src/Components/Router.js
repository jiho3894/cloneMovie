import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from '../Routes/Home';
import TV from '../Routes/TV';
import Search from '../Routes/Search';
import Detail from '../Routes/Detail';
import Header from './Header';

const RouterHandle = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Route path="/movie/:id" exact component={Detail} />
        <Route path="/show/:id" exact component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);

export default RouterHandle;