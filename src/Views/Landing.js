// Dependencies
import React from 'react';
import Helmet from 'react-helmet';
import Slider from "react-slick";

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
import MonitoringIcon from '../Images/Monitoring_Icon.png';
import SecurityIcon from '../Images/Security_Icon.png';

import LeftArrow from "../Components/LeftSliderArrow";
import RightArrow from "../Components/RightSliderArrow";

import SuccessSlider from "../Components/SuccessSlider";

const awardSliderSettings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  prevArrow: <LeftArrow />,
  nextArrow: <RightArrow />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        dots: false,
        prevArrow: <LeftArrow />,
        nextArrow: <RightArrow />
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        dots: false,
        prevArrow: <LeftArrow />,
        nextArrow: <RightArrow />
      }
    }
  ]
};

export default () => (
  <div id="landing-page">
    <section id="landing--header">
      <div className="container">
        <div id="landing-header--inner" className="flex--grid section--header">
          <div id="landing-header-inner--text">
            <h2>Mobile growth you can trust.</h2>
            <p>We empower brands and agencies with transparent, sustainable, performance-driven customer acquisition solutions.</p>
            <a className="button" href="">Get Started</a>
          </div>
          <div id="landing-hero-ad--container">
            <img src={LandingHeroAd} alt="Curate Mobile Ad" id="landing-header-inner--ad"/>
          </div>
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
                <a href="" className="landing-optimization--link">Premium placement</a>
                <a href="" className="landing-optimization--link">Focused geo-targeting</a>
                <a href="" className="landing-optimization--link">Data augmentation</a>
              </div>
              <div className="landing-optimization--link-column">
                <a href="" className="landing-optimization--link">Robust integrations</a>
                <a href="" className="landing-optimization--link">Billions of transactions</a>
                <a href="" className="landing-optimization--link">Personalized support</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="optimization-mockup--container">
        <img src={ProductMockup} alt="Curate Product Mockup" id="landing-optimization-inner--mockup"/>
      </div>
    </section>

    <section id="landing--features" className="section--normal">
      <div className="container">
        <div id="landing-features--inner" className="flex--grid">
          <div className="landing-features--item flex-duo--item">
            <img src={MonitoringIcon} alt="Monitoring Icon" className="landing-feature-item--icon"/>
            <h2>Proactive monitoring</h2>
            <p>With the ability to track over 1,000 queries per second (QPS) without the loss of any clicks, we optimize under-performing placements in real-time.</p>
          </div>
          <div className="landing-features--item flex-duo--item">
            <img src={SecurityIcon} alt="Security Icon" className="landing-feature-item--icon"/>
            <h2>Cutting-edge security</h2>
            <p>Our platform programmatically blocks suspicious, non-human activity from emulators, install-bot farms, device-spoofing, and proxy unmasking.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="landing--leadership" className="section--normal">
      <div className="container">
        <div id="landing-leadership--inner">
          <h2>Award-winning leadership</h2>
          <p>We’ve been recognized throughout the industry for our commitment to ethical practices and forward-thinking approach.</p>
        </div>
      </div>
      <div id="landing--award-carousel">
        <Slider {...awardSliderSettings}>
          <div className="landing-award--carousel-item">
            <h3>2018 E&Y Entrepreneur of the Year</h3>
          </div>
          <div className="landing-award--carousel-item">
            <h3>2018 Canadian Business ‘Top New Growth Company’</h3>
          </div>
          <div className="landing-award--carousel-item">
            <h3>Coalition Against Ad Fraud Member</h3>
          </div>
          <div className="landing-award--carousel-item">
            <h3>Coalition Against Ad Fraud Member</h3>
          </div>
        </Slider>
      </div>
    </section>

    <section id="landing--success" className="section--normal">
      <div className="container">
        <div id="landing-success--inner">
          <div id="landing-success--heading">
            <h2>Proven success in a variety of categories</h2>
          </div>
          <SuccessSlider />
        </div>
      </div>
    </section>

    <Helmet title=''/>
  </div>
)