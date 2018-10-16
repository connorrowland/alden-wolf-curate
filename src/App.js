// Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import * as $ from 'jquery';

// CSS
import 'normalize.css';
import './Shared.css';

// Components
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer';
import PreFooter from './Components/PreFooter';

// Views
import LandingPage from './Views/Landing';
import PlatformPage from './Views/Platform';
import NoMatch from './Views/NoMatch';

const title = 'Story Ventures';
const routes = [
  {
    title: 'Curate Mobile',
    path: '/',
    component: LandingPage,
    exact: true,
    id: "page--landing"
  },
  {
    title: 'Curate Mobile — Platform',
    path: '/platform',
    component: PlatformPage,
    exact: true,
    id: "page--platform"
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={(props) => {
          return (
            <div className="page container-fluid" id={`${props.location.pathname.substr(1)}`}>
              <Helmet titleTemplate={`%s - ${title}`} />
              <NavBar/>
              <Switch>
                {routes.map((route, i) => (
                  <Route key={i} {...route} />
                ))}
                <Route component={NoMatch} />
              </Switch>
              <PreFooter />
              <Footer />
            </div>
          )
        }} />
      </Router>
    );
  }
}

export default App;
