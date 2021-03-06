import React, { Component } from 'react';

import AdOne from '../Images/Publishers_Ads/PublishersPageAd1.png';
import AdTwo from '../Images/Publishers_Ads/PublishersPageAd2.png';
import AdThree from '../Images/Publishers_Ads/PublishersPageAd3.png';
import AdFour from '../Images/Publishers_Ads/PublishersPageAd4.gif';
import AdFive from '../Images/Publishers_Ads/PublishersPageAd5.png';
import AdSix from '../Images/Publishers_Ads/PublishersPageAd6.gif';
import AdSeven from '../Images/02LandingPageAdLandscape.gif';

import PublishersAnimation from "../PublishersAnimation";

class PublisherAds extends Component {
  render() {
    return (
      <section id="publishers--ads">
        <div id="publishers--ads-container" className="flex--grid-no-justify">
          <div className="publishers-ads--row" id="publishers-ads--row-1">
            <img src={AdFour} alt="Curate Sample Ad" className="publishers--ad" id="publishers-ad-4"/>
            <img src={AdTwo} alt="Curate Sample Ad" className="publishers--ad" id="publishers-ad-2"/>
            <img src={AdThree} alt="Curate Sample Ad" className="publishers--ad" id="publishers-ad-3"/>
          </div>
          <div className="publishers-ads--row" id="publishers-ads--row-2">
            <img src={AdSeven} alt="Curate Sample Ad" className="publishers--ad" id="publishers-ad-7"/>
            <img src={AdFive} alt="Curate Sample Ad" className="publishers--ad" id="publishers-ad-5"/>
            <img src={AdSix} alt="Curate Sample Ad" className="publishers--ad" id="publishers-ad-7"/>
            <img src={AdOne} alt="Curate Sample Ad" className="publishers--ad publishers--ad-active" id="publishers-ad-1"/>
          </div>
        </div>
      </section>
    );
  }
}

export default PublisherAds