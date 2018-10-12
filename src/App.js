// Dependencies
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet';
import * as $ from 'jquery';

// CSS
import 'normalize.css';
import './Shared.css';

// Components
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer';
import PreFooter from './Components/PreFooter';
import Carousel from './Carousel';

// Views
import LandingPage from './Views/Landing';
import NoMatch from './Views/NoMatch';

const title = 'Story Ventures';
const routes = [
  {
    title: 'Curate Mobile',
    path: '/',
    component: LandingPage,
    exact: true
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page container-fluid">
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
      </Router>
    );
  }
}

export default App;
