// Dependencies
import React from 'react';
import Helmet from 'react-helmet';

// Style
import '../Publishers.css';

// Images
import AdOne from '../Images/Publishers_Ads/PublishersPageAd1.png';
import AdTwo from '../Images/Publishers_Ads/PublishersPageAd2.png';
import AdThree from '../Images/Publishers_Ads/PublishersPageAd3.png';
import AdFour from '../Images/Publishers_Ads/PublishersPageAd4.gif';
import AdFive from '../Images/Publishers_Ads/PublishersPageAd5.gif';
import AdSix from '../Images/Publishers_Ads/PublishersPageAd6.png';
import PublishersMockupOne from '../Images/Publishers_Mockup_1.png';
import PublishersMockupTwo from '../Images/Publishers_Mockup_2.png';
import PublishersMockupThree from '../Images/Publishers_Mockup_3.png';
import DesignIcon from '../Images/Design_Icon.png';
import SupportIcon from '../Images/Support_Icon.png';
import IntegrationIcon from '../Images/Integration_Icon.png';
import ApsalarLogo from '../Images/Publishers_Logos/Apsalar_Logo.png'
import TuneLogo from '../Images/Publishers_Logos/Tune_Logo.png'
import AdjustLogo from '../Images/Publishers_Logos/Adjust_Logo.png'
import CakeLogo from '../Images/Publishers_Logos/Cake_Logo.png'
import KochavaLogo from '../Images/Publishers_Logos/Kochava_Logo.png'
import LiveRampLogo from '../Images/Publishers_Logos/LiveRamp_Logo.png'
import AppsFlyerLogo from '../Images/Publishers_Logos/AppsFlyer_Logo.png'
import BlueKaiLogo from '../Images/Publishers_Logos/BlueKai_Logo.png'
import TenjinLogo from '../Images/Publishers_Logos/Tenjin_Logo.png'

export default () => (
  <div id="publishers-page">
    <section id="publishers--header" className="centered-text--header">
      <div className="container">
        <div id="publishers-header--inner" className="section--header centered-text-header--inner">
          <div id="publishers-header-inner--text" className="centered-text-header-inner--text">
            <h2>Monetize more efficiently.</h2>
            <p>Start driving ad revenue today with intuitive tools, proven ad creative and expert support.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="publishers--ads">
      <div id="publishers--ads-container" className="flex--grid-no-justify">
        <div className="publishers-ads--row" id="publishers-ads--row-1">
          <img src={AdThree} alt="Curate Sample Ad" className="publishers--ad"/>
          <img src={AdOne} alt="Curate Sample Ad" className="publishers--ad"/>
          <img src={AdFive} alt="Curate Sample Ad" className="publishers--ad"/>
          <img src={AdTwo} alt="Curate Sample Ad" className="publishers--ad"/>
        </div>
        <div className="publishers-ads--row" id="publishers-ads--row-2">
          <img src={AdTwo} alt="Curate Sample Ad" className="publishers--ad"/>
          <img src={AdFour} alt="Curate Sample Ad" className="publishers--ad"/>
          <img src={AdSix} alt="Curate Sample Ad" className="publishers--ad"/>
          <img src={AdOne} alt="Curate Sample Ad" className="publishers--ad"/>
        </div>
      </div>
    </section>

    <div className="rule--gray"></div>

    <section id="publishers--features" className="centered-text--header">
      <div className="container">
        <div id="publishers-features--inner">
          <div className="publishers-features--item-right flex--grid">
            <img src={PublishersMockupOne} alt="Curate Publishers Mockup" className="publishers--mockup"/>
            <div className="publishers-feature-item--text">
              <h2>Performance-optimized creative</h2>
              <p>Access a wide array of top-tier brands and serve ads designed to appeal to your audience.</p>
            </div>
          </div>
          <div className="publishers-features--item-left flex--grid">
            <div className="publishers-feature-item--text">
              <h2>Always-on monitoring</h2>
              <p>Get drilled-down performance insights in real-time, so you can apply your learnings instantly.</p>
            </div>
            <img src={PublishersMockupTwo} alt="Curate Publishers Mockup" className="publishers--mockup"/>
          </div>
          <div className="publishers-features--item-right flex--grid">
            <img src={PublishersMockupThree} alt="Curate Publishers Mockup" className="publishers--mockup"/>
            <div className="publishers-feature-item--text">
              <h2>Transparent reporting</h2>
              <p>Understand what’s working and  why at a glance from your beautifully designed dashboard.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="publishers--up-running" className="section--normal">
      <div className="container">
        <div id="publishers-up-running--inner">
          <div id="up-running--intro-text">
            <h2>Get up and running fast.</h2>
          </div>
          <div className="flex--grid">
            <div className="flex-trio--item trio-image-text--item">
              <div className="trio-image--container">
                <img src={DesignIcon} alt="Curate Sample Ad" className="publishers--ad"/>
              </div>
              <h3>Intuitive design</h3>
              <p>Start monetizing in minutes with user-friendly tools that won’t slow down.</p>
            </div>
            <div className="flex-trio--item trio-image-text--item">
              <div className="trio-image--container">
                <img src={SupportIcon} alt="Curate Sample Ad" className="publishers--ad"/>
              </div>
              <h3>Top-notch support</h3>
              <p>Get hands-on guidance from a marketers with years of experience in the field.</p>
            </div>
            <div className="flex-trio--item trio-image-text--item">
              <div className="trio-image--container">
                <img src={IntegrationIcon} alt="Curate Sample Ad" className="publishers--ad"/>
              </div>
              <h3>Simple integration</h3>
              <p>Use Curate seamlessly with hundreds of integration-ready platforms and services.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="publishers--partners" className="section--normal">
      <div className="container">
        <div id="publishers-partners--inner">
          <div id="partners--intro-text">
            <h2>Trusted<br id="parners-intro-text--break"/> attribution partners</h2>
          </div>
        </div>
      </div>
      <div className="flex--grid-no-justify" id="partners--logos-container">
        <div className="publishers-logo--container">
          <img src={ApsalarLogo} alt="Logo" className="publishers--logo"/>
        </div>
        <div className="publishers-logo--container">
          <img src={TuneLogo} alt="Logo" className="publishers--logo"/>
        </div>
        <div className="publishers-logo--container">
          <img src={AdjustLogo} alt="Logo" className="publishers--logo"/>
        </div>
        <div className="publishers-logo--container">
          <img src={CakeLogo} alt="Logo" className="publishers--logo"/>
        </div>
        <div className="publishers-logo--container">
          <img src={KochavaLogo} alt="Logo" className="publishers--logo"/>
        </div>
        <div className="publishers-logo--container">
          <img src={LiveRampLogo} alt="Logo" className="publishers--logo"/>
        </div>
        <div className="publishers-logo--container">
          <img src={AppsFlyerLogo} alt="Logo" className="publishers--logo"/>
        </div>
        <div className="publishers-logo--container">
          <img src={BlueKaiLogo} alt="Logo" className="publishers--logo"/>
        </div>
        <div className="publishers-logo--container">
          <img src={TenjinLogo} alt="Logo" className="publishers--logo"/>
        </div>
      </div>
    </section>

    <Helmet title='Platform'/>
  </div>
)