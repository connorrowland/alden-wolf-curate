import React, { Component } from 'react';
import FacebookLogo from "../Images/Facebook_Logo.png";
import LinkedinLogo from "../Images/Linkedin_Logo.png";

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="flex--grid footer--inner">
          <div className="footer--left flex--grid">
            <div className="footer--col">
              <a href="" className="footer-link--lg">About us</a>
              <a href="" className="footer-link--lg">How it works</a>
              <a href="" className="footer-link--lg">News & Events</a>
            </div>
            <div className="footer--col">
              <a href="" className="footer-link--lg">Publishers</a>
              <a href="" className="footer-link--lg">Terms & Conditions</a>
              <a href="" className="footer-link--lg">Privacy Policy</a>
            </div>
          </div>
          <div className="footer--right flex--grid">
            <div className="footer--col" id="footer--address-col">
              <p className="footer-sm-link--title">Address</p>
              <a href="https://goo.gl/maps/oybdofrMaBx" target="_blank" rel="noopener noreferrer" className="footer-link--sm">8 Market Street, Suite 500 Toronto, Ontario, M5E 1M6, Canada</a>
            </div>
            <div className="footer--col flex--grid--col-orient">
              <div id="footer-col--phone">
                <p className="footer-sm-link--title">Phone</p>
                <a href="tel:1-416-840-4619" target="_blank" rel="noopener noreferrer" className="footer-link--sm">416-840-4619</a>
              </div>

              <p className="footer-sm-link--title">Fax</p>
              <a href="tel:1-416-352-1858" target="_blank" rel="noopener noreferrer" className="footer-link--sm">416-352-1858</a>
            </div>
          </div>
        </div>
        <div className="footer--end-col flex--grid">
          <div id="footer--social-links" className="flex--grid">
            <img src={FacebookLogo} alt="Facebook Logo"/>
            <img src={LinkedinLogo} alt="LinkedIn Logo"/>
          </div>
          <p className="footer--copyright">Copyright © 2017 Curate Mobile ltd. All Rights Reserved</p>
          <div id="fake-col"></div>
        </div>
      </section>
    );
  }
}

export default Footer