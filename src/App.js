import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/index';
import Blog from './pages/blog'
import Blog2 from './pages/blog2'
import Blog3 from './pages/blog3'
import Events from './pages/Events'
import EventsDetail from './pages/EventsDetail'
import Impressum from './pages/Impressum'
import './App.scss'
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Home} ></Route>
        <Route exact path='/blog' component={Blog} ></Route>
        <Route exact path='/blog2' component={Blog2} ></Route>
        <Route exact path='/blog3' component={Blog3} ></Route>
        <Route exact path='/events' component={Events} ></Route>
        <Route exact path='/events/:id' component={EventsDetail} ></Route>
        <Route exact path='/impressum' component={Impressum} ></Route>
      </Switch>
    </Router>
  );
}
export default App;
