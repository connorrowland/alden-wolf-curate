// Dependencies
import React from 'react';
import Helmet from 'react-helmet';

// Style
import '../Landing.css';

// Images
import LandingHeroAd from '../Images/01LandingPageAdHero.gif';
import GlobalScalingAd from '../Images/02LandingPageAdLandscape.gif';
import CollabIcon from '../Images/Collaboration_Icon.png';
import TargetingIcon from '../Images/Targeting_Icon.png';
import OptimizationIcon from '../Images/Optimization_Icon.png';
import DataIcon from '../Images/Data_Icon.png';
import ProductMockup from '../Images/Landing_Product_Mockup.png';

export default () => (
  <div id="landing-page">
    <section id="landing--header">
      <div className="container">
        <div id="landing-header--inner" className="flex--grid">
          <div id="landing-header-inner--text">
            <h1>Mobile growth you can trust.</h1>
            <p>We empower brands and agencies with transparent, sustainable, performance-driven customer acquisition solutions.</p>
            <a className="button" href="">Get Started</a>
          </div>
          <img src={LandingHeroAd} alt="Curate Mobile Ad" id="landing-header-inner--ad"/>
        </div>
      </div>
    </section>

    <section id="landing--process" className="section--normal">
      <div className="container">
        <div id="landing-process--intro-text">
          <h4 className="eyebrow">OUR PROCESS</h4>
          <h2>Case-specific strategies that bridge brands and audiences.</h2>
        </div>
        <div id="landing-process--attributes-container" className="flex--grid">
          <div className="landing-process--attribute">
            <div className="landing-process-attribute--icon-container">
              <img src={CollabIcon} alt="Curate Icon"/>
            </div>
            <div className="landing-process-attribute--text-container">
              <h3>Close collaboration</h3>
              <p>We get to know your business, set customized goals together and keep you well-informed at every stage of the process.</p>
            </div>
          </div>
          <div className="landing-process--attribute">
            <div className="landing-process-attribute--icon-container">
              <img src={TargetingIcon} alt="Curate Icon"/>
            </div>
            <div className="landing-process-attribute--text-container">
              <h3>LTV-driven targeting</h3>
              <p>We track post-install behavior, not clicks and downloads, to identify your highest LTV users and find lookalikes in the wild.</p>
            </div>
          </div>
          <div className="landing-process--attribute">
            <div className="landing-process-attribute--icon-container">
              <img src={OptimizationIcon} alt="Curate Icon"/>
            </div>
            <div className="landing-process-attribute--text-container">
              <h3>Real-time optimization</h3>
              <p>We monitor ad performance vigilantly, bid aggressively on placements that work for your brand and drop the ones that don’t.</p>
            </div>
          </div>
          <div className="landing-process--attribute">
            <div className="landing-process-attribute--icon-container">
              <img src={DataIcon} alt="Curate Icon"/>
            </div>
            <div className="landing-process-attribute--text-container">
              <h3>Clear, actionable data</h3>
              <p>You’ll always see what your growth is attributed to, how we got there and exactly what we plan to do to keep it going.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="landing--global-scaling" className="section--normal">
      <div className="container">
        <div id="landing-global-scaling--text">
          <h2>Brand-safe global scaling</h2>
          <p>We partner with a wide array of trusted publishers to offer premium media placements that put your brand in the best light, always.</p>
        </div>
        <div id="landing-global-scaling--image">
          <img src={GlobalScalingAd} alt="Global Scaling Advertisement" />
        </div>
      </div>
    </section>

    <section id="landing--optimization" className="section--normal">
      <div className="container">
        <div id="landing-optimization--inner" className="flex--grid">
          <div id="landing-optimization-inner--text">
            <h2>Optimized for your evolving needs</h2>
            <p>Our Managed Growth Platform keeps up with the dynamic marketplace so you can seize opportunities in real time.</p>
            <div id="landing-optimization--links" className="flex--grid">
              <div className="landing-optimization--link-column">
                <a href="" class="landing-optimization--link">Premium placement</a>
                <a href="" class="landing-optimization--link">Focused geo-targeting</a>
                <a href="" class="landing-optimization--link">Data augmentation</a>
              </div>
              <div className="landing-optimization--link-column">
                <a href="" class="landing-optimization--link">Robust integrations</a>
                <a href="" class="landing-optimization--link">Billions of transactions</a>
                <a href="" class="landing-optimization--link">Personalized support</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={ProductMockup} alt="Curate Product Mockup" id="landing-optimization-inner--mockup"/>
    </section>

    <Helmet title=''/>
  </div>
)