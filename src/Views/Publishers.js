// Dependencies
import React from 'react';
import Helmet from 'react-helmet';

// Style
import '../Publishers.css';

// Images
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

// Components
import ValuePropsTrio from '../Components/ValuePropsTrio';
import PublisherAds from '../Components/PublisherAds';

const publishersTrioItems = [
  {
    title: "Intuitive design",
    body: "Start monetizing in minutes with user-friendly tools that won’t slow you down.",
    image: DesignIcon
  },
  {
    title: "Top-notch support",
    body: "Get hands-on guidance from marketers with years of experience in the field.",
    image: SupportIcon
  },
  {
    title: "Simple integration",
    body: "Use Curate seamlessly with hundreds of integration-ready platforms and services.",
    image: IntegrationIcon
  },
]

export default () => (
  <div id="publishers-page" className="page--body">
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

    <PublisherAds />

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
          <ValuePropsTrio
            items={publishersTrioItems}
          />
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