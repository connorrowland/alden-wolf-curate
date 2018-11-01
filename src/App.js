// Dependencies
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import * as $ from 'jquery';

// import SlickCarousel from 'slick-carousel';
// import Carousel from './Carousel';

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
import PublishersPage from './Views/Publishers';
import CompanyPage from './Views/Company';
import NoMatch from './Views/NoMatch';
import Terms from './Views/Terms';
import PrivacyPolicy from './Views/PrivacyPolicy';

const title = 'Story Ventures';
const routes = [
  {
    title: 'Curate Mobile',
    path: '/',
    component: LandingPage,
    exact: true
  },
  {
    title: 'Curate Mobile — Platform',
    path: '/platform',
    component: PlatformPage,
    exact: true
  },
  {
    title: 'Curate Mobile — Publishers',
    path: '/publishers',
    component: PublishersPage,
    exact: true
  },
  {
    title: 'Curate Mobile — Company & Events',
    path: '/company',
    component: CompanyPage,
    exact: true
  }
  ,
  {
    title: 'Curate Mobile — Privacy Policy',
    path: '/PrivacyPolicy',
    component: PrivacyPolicy,
    exact: true
  }
  ,
  {
    title: 'Curate Mobile — Terms & Conditions',
    path: '/Terms',
    component: Terms,
    exact: true
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
