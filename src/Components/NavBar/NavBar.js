import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import XIcon from './x_icon.png';
import Logo from './Logo_Black.png';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileFlyoutOpen: false
    }
  }

  closeMobileNavigation = () => {
    this.setState({
      mobileFlyoutOpen: false
    })
  }

  toggleMobileNavigation = (e) => {
    if(e.target.id === "mobile-flyout--trigger" || e.target.id === "nav-close"){
      e.preventDefault();
    }

    this.setState({
      mobileFlyoutOpen: !this.state.mobileFlyoutOpen
    })
  }

  render() {
    return (
      <div className="nav--outer">
        <div className={`mobile-flyout--container ${this.state.mobileFlyoutOpen ? "mobile-flyout--open" : "mobile-flyout--closed"}`}>
          <div className="mobile-flyout--inner">
            <div className="mobile-flyout--menu">
              <Link to="/" className="nav--link" onClick={this.toggleMobileNavigation}>
                <img src={Logo} className="nav-logo--img" alt="Curate Mobile Logo" />
              </Link>
              <a href="#" className="nav--x-container" id="nav-close" onClick={this.toggleMobileNavigation}>
                <img src={XIcon} className="mobile-nav-x--img" alt="Curate Mobile Logo" />
              </a>
            </div>
            <Link to="/Platform" className="nav--link">Platform</Link>
            <Link to="/Publishers" className="nav--link">Publishers</Link>
            <Link to="/Company" className="nav--link">Company & Events</Link>
          </div>
        </div>

        <nav className="nav-links--container">
          <div className="nav--inner">
            <div className="nav-inner--left">
              <a href="/" className="nav--link" id="mobile-flyout--trigger" onClick={this.toggleMobileNavigation}>
                <span className="navigation--burger-menu-line"></span>
                <span className="navigation--burger-menu-line"></span>
                <span className="navigation--burger-menu-line"></span>
              </a>
              <Link to="/" className="nav--logo">
                <img src={Logo} className="nav-logo--img" alt="Curate Mobile Logo" />
              </Link>
              <div className="nav-inner-left--links">
                <Link to="/Platform" className="nav--link">Platform</Link>
                <Link to="/Publishers" className="nav--link">Publishers</Link>
                <Link to="/Company" className="nav--link">Company & Events</Link>
              </div>
            </div>
            <div className="nav-inner--right">
              <a className="button" href="">Get Started</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavBar