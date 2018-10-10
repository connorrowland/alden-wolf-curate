import React, { Component } from 'react';

class ContactPreFooter extends Component {
  render() {
    return (
      <section className="contact-pre-footer">
        <div className="contact-pre-footer--inner">
          <div className="pre-footer--demographic-module">
            <h5>Advertisers</h5>
            <p>Grow your audience confidently with premium placements and transparent metrics.</p>
            <a className="button--navy" href="">Let’s work together</a>
          </div>
          <div className="pre-footer--demographic-divider"></div>
          <div className="pre-footer--demographic-module">
            <h5>Publishers</h5>
            <p>Monetize effortlessly with premium brands, clear analytics and best in class optimization.</p>
            <a className="button--navy" href="">Let’s work together</a>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactPreFooter