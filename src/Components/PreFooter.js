import React, { Component } from 'react';

class PreFooter extends Component {
  render() {
    return (
      <section className="contact-pre-footer">
        <div className="contact-pre-footer--inner flex--grid-no-justify">
          <div className="pre-footer--demographic-module">
            <h2>Advertisers</h2>
            <p>Grow your audience confidently with premium placements and transparent metrics.</p>
            <a className="button button--navy" href="">Let’s work together</a>
          </div>
          <div className="pre-footer--demographic-divider"></div>
          <div className="pre-footer--demographic-module">
            <h2>Publishers</h2>
            <p>Monetize effortlessly with premium brands, clear analytics and best in class optimization.</p>
            <a className="button button--navy" href="">Let’s work together</a>
          </div>
        </div>
      </section>
    );
  }
}

export default PreFooter