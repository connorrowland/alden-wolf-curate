// Dependencies
import React from 'react';
import Helmet from 'react-helmet';

// Style
import '../Company.css';

// Images
import TorontoIcon from '../Images/Toronto_Icon.png';
import WorldIcon from '../Images/World_Icon.png';
import PhoneIcon from '../Images/Phone_Icon.png';
import ClientsIcon from '../Images/Clients_Icon.png';
import TeamPhoto from '../Images/Team_Photo.png';
import SampleAd1 from '../Images/Sample_Ad1.png';
import SampleAd2 from '../Images/Sample_Ad2.png';
import SampleAd3 from '../Images/Sample_Ad3.png';

export default () => (
  <div id="company-page">
    <section id="company--header">
      <div className="container">
        <div id="company-header--inner" className="section--header">
          <div id="company-header-inner--text">
            <h1>We put people first.<br/> Our and yours.</h1>
            <p>Curate Mobile was built by industry veterans on a mission to bring transparency and ethical practices to the field of mobile advertising. We’re passionate about what we do and we hope it shows.</p>
          </div>
          <div id="company-header--attributes" className="flex--grid">
            <div className="company-header-attribute--container">
              <div className="company-attributes-icon--container flex--grid">
                <img src={TorontoIcon} alt="Curate Product Image" className="company-attributes--icon" id="toronto-icon"/>
              </div>
              <h2>2015</h2>
              <h3>Founded in Toronto</h3>
            </div>
            <div className="company-header-attribute--container">
              <div className="company-attributes-icon--container flex--grid">
                <img src={WorldIcon} alt="Curate Product Image" className="company-attributes--icon" id="world-icon"/>
              </div>
              <h2>180+</h2>
              <h3>Countries served</h3>
            </div>
            <div className="company-header-attribute--container">
              <div className="company-attributes-icon--container flex--grid">
                <img src={PhoneIcon} alt="Curate Product Image" className="company-attributes--icon" id="phone-icon"/>
              </div>
              <h2>3500+</h2>
              <h3>Managed apps</h3>
            </div>
            <div className="company-header-attribute--container">
              <div className="company-attributes-icon--container flex--grid">
                <img src={ClientsIcon} alt="Curate Product Image" className="company-attributes--icon" id="client-icon"/>
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
        <img src={TeamPhoto} alt="Curate Team Photo" id="team-photo"/>
      </div>
      <div id="company-team--intro-text">
        <h1>Meet the team</h1>
        <p>Our business is founded on relationships and we bring fairness and <br/>commitment to each one them.</p>
      </div>
      <div className="container">
        <div id="company-team--members-container" className="flex--grid">
          <div className="team-member--large flex-duo--item">
            <h2>Marc Porcelli</h2>
            <h3>Founder & CEO</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
          </div>
          <div className="team-member--large flex-duo--item">
            <h2>Moufid Al-Joundi</h2>
            <h3>Partner & Chief Revenue Officer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
          </div>
          <div className="team-member--small flex-trio--item">
            <h2>Rocky Appiah</h2>
            <h3>Chief Technology Officer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </div>
          <div className="team-member--small flex-trio--item">
            <h2>Chad Frank</h2>
            <h3>VP of Operations & Product</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </div>
          <div className="team-member--small flex-trio--item">
            <h2>Conrad Lavallee</h2>
            <h3>Chief Financial Officer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </div>
        </div>
        <div id="company-team--rule"></div>
        <div id="company-team--hiring">
          <h1>We’re hiring</h1>
          <p>Our business is founded on relationships and we bring fairness and commitment to each one them.</p>
          <a className="button button--light-blue" href="">Join our team</a>
        </div>
      </div>
    </section>

    <section id="company--news" className="section--normal">
      <div className="container">
        <div id="company-news--intro-text">
          <h1>We’ve been<br/> making some waves</h1>
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