// Dependencies
import React from 'react';
import Helmet from 'react-helmet';
import Slider from "react-slick";

// Style
import '../Company.css';

// Images
import TorontoIcon from '../Images/Toronto_Icon.png';
import WorldIcon from '../Images/World_Icon.png';
import PhoneIcon from '../Images/Phone_Icon.png';
import ClientsIcon from '../Images/Clients_Icon.png';
import TeamPhoto from '../Images/Team_Photo.png';
import SampleAd1 from '../Images/SampleAd1.png';
import SampleAd2 from '../Images/SampleAd2.png';
import SampleAd3 from '../Images/SampleAd3.png';

// Components
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";

const companyPhotoSlider = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: false,
  arrows: false,
  autoplaySpeed: 2500,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  speed: 300,
  cssEase: 'linear'
};

export default () => (
  <div id="company-page" className="page--body">
    <ScrollToTopOnMount />
    <section id="company--header">
      <div className="container">
        <div id="company-header--inner" className="section--header">
          <div id="company-header-inner--text">
            <h2>We put people first.<br/> Our and yours.</h2>
            <p>Curate Mobile was built by industry veterans on a mission to bring transparency and ethical practices to the field of mobile advertising. We’re passionate about what we do and we hope it shows.</p>
          </div>
          <div id="company-header--attributes" className="flex--grid">
            <div className="company-header-attribute--container">
              <div className="company-attributes-icon--container flex--grid">
                <img src={TorontoIcon} alt="Curate Product" className="company-attributes--icon icon--normal" id="toronto-icon"/>
              </div>
              <h2>2015</h2>
              <h3>Founded in Toronto</h3>
            </div>
            <div className="company-header-attribute--container">
              <div className="company-attributes-icon--container flex--grid">
                <img src={WorldIcon} alt="Curate Product" className="company-attributes--icon icon--normal" id="world-icon"/>
              </div>
              <h2>180+</h2>
              <h3>Countries served</h3>
            </div>
            <div className="company-header-attribute--container">
              <div className="company-attributes-icon--container flex--grid">
                <img src={PhoneIcon} alt="Curate Product" className="company-attributes--icon icon--normal" id="phone-icon"/>
              </div>
              <h2>3500+</h2>
              <h3>Managed apps</h3>
            </div>
            <div className="company-header-attribute--container">
              <div className="company-attributes-icon--container flex--grid">
                <img src={ClientsIcon} alt="Curate Product" className="company-attributes--icon icon--normal" id="client-icon"/>
              </div>
              <h2>300+</h2>
              <h3>Current clients</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="company--team">
      <div id="company-team--photo-container">
        <Slider {...companyPhotoSlider}>
          <img src={TeamPhoto} alt="Curate Team" id="team-photo"/>
          <img src={TeamPhoto} alt="Curate Team" id="team-photo"/>
          <img src={TeamPhoto} alt="Curate Team" id="team-photo"/>
        </Slider>
      </div>
      <div id="company-team--intro-text">
        <h2>Meet the team</h2>
        <p>Our business is founded on relationships and we bring fairness and <br/>commitment to each one them.</p>
      </div>
      <div className="container">
        <div id="company-team--members-container" className="flex--grid">
          <div className="team-member--large flex-duo--item">
            <h2>Marc Porcelli</h2>
            <h3>Founder & CEO</h3>
            <p>Extensive marketing experience on advertiser and network sides. VP Sales @ Azoogle/Epic Advertising. CMO @ Singlesnet.com (sold to Match.com). CRO/GM @ Mundo Media.</p>
          </div>
          <div className="team-member--large flex-duo--item">
            <h2>Moufid Al-Joundi</h2>
            <h3>Partner & CRO</h3>
            <p>20 years of advertising experience as an Executive Director behind brands and international exchanges such as Singlesnet.com, Dealfind, Epic Advertising and Mundo Media.</p>
          </div>
          <div className="team-member--small flex-trio--item">
            <h2>Rocky Appiah</h2>
            <h3>Chief Technology Officer</h3>
            <p>15 years in digital advertising building omni-channel solutions for cutting edge business demands. SVP Technology @ Epic Advertising. CTO/Founder @ Kinetic Social.</p>
          </div>
          <div className="team-member--small flex-trio--item">
            <h2>Chad Lavallee</h2>
            <h3>VP Operations & Product</h3>
            <p>15 years of experience across digital advertising sub-industries. VP Products @ AffNet.com. Chief Product Officer @ Admobix. Director of Product @ AcuityAds.</p>
          </div>
          <div className="team-member--small flex-trio--item">
            <h2>Conrad Frank</h2>
            <h3>Chief Financial Officer</h3>
            <p>10+ years of finance experience with a focus on system integration, automation, and data visualization. CFO @ Diamond Integrated Marketing.</p>
          </div>
        </div>
        <div id="company-team--rule"></div>
        <div id="company-team--hiring">
          <h2>We’re hiring</h2>
          <p>Are you ready to be part of a team that’s changing an industry?<br/> We want to meet you.</p>
          <a className="button button--light-blue" href="https://angel.co/curate-mobile-ltd/jobs" target="_blank" rel="noopener noreferrer">View open roles</a>
        </div>
      </div>
    </section>

    <section id="company--news" className="section--normal">
      <div className="container">
        <div id="company-news--intro-text">
          <h2>We’ve been<br/> making some waves</h2>
          <p>Read what people are saying about our work and decide for yourself.</p>
        </div>
      </div>
      <div id="company-news--items" className="flex--grid">
        <img src={SampleAd1} alt="Curate News Piece" className="company-news-item--image"/>
        <img src={SampleAd2} alt="Curate News Piece" className="company-news-item--image"/>
        <img src={SampleAd3} alt="Curate News Piece" className="company-news-item--image"/>
      </div>
    </section>

    <Helmet title='Platform'/>
  </div>
)