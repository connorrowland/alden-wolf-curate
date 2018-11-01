import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import XIcon from './x_icon.png';
import Logo from './Logo.png';
import Hamburger from './Hamburger_Icon.png';

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
        <div id="mobile-flyout--outer">
          <div className={`mobile-flyout--container ${this.state.mobileFlyoutOpen ? "mobile-flyout--open" : "mobile-flyout--closed"}`}>
            <div className="mobile-flyout--inner">
              <div className="mobile-flyout--menu">
                <div className="mobile-flyout--menu-inner">
                  <NavLink to="/" onClick={this.toggleMobileNavigation}>
                    <img src={Logo} className="nav-logo--img" alt="Curate Mobile Logo" />
                  </NavLink>
                  <a href="#" className="nav--x-container" id="nav-close" onClick={this.toggleMobileNavigation}>
                    <img src={XIcon} className="mobile-nav-x--img" alt="Curate Mobile Logo" />
                  </a>
                </div>
                <div id="mobile-flyout--divider"></div>
              </div>
              <div className="mobile-flyout--links-container">
                <NavLink to="/Platform" className="nav--link" activeClassName="nav--link-selected" onClick={this.closeMobileNavigation}>Platform</NavLink>
                <NavLink to="/Publishers" className="nav--link" activeClassName="nav--link-selected" onClick={this.closeMobileNavigation}>Publishers</NavLink>
                <NavLink to="/Company" className="nav--link" activeClassName="nav--link-selected" onClick={this.closeMobileNavigation}>Company & Events</NavLink>
              </div>
            </div>
          </div>
        </div>

        <nav className="nav-links--container">
          <div className="nav--inner">
            <div className="nav-inner--left">
              <a href="#" className="nav--link" id="mobile-flyout--trigger" onClick={this.toggleMobileNavigation}>
                <img src={Hamburger} alt="Hamburger Menu Icon" id="burger-menu--icon" />
              </a>
              <NavLink to="/" className="nav--logo">
                <img src={Logo} className="nav-logo--img" alt="Curate Mobile Logo" />
              </NavLink>
              <div className="nav-inner-left--links">
                <NavLink to="/Platform" className="nav--link" activeClassName="nav--link-selected">Platform</NavLink>
                <NavLink to="/Publishers" className="nav--link" activeClassName="nav--link-selected">Publishers</NavLink>
                <NavLink to="/Company" className="nav--link" activeClassName="nav--link-selected">Company & Events</NavLink>
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