// Dependencies
import React from 'react';
import Helmet from 'react-helmet';

// Style
import '../Platform.css';

// Images
import ShieldIcon from '../Images/Shield_Icon.png';
import OptimizationIcon from '../Images/Optimization_Icon_2.png';
import TargetingIcon from '../Images/Targeting_Icon_2.png';
import ReportingIcon from '../Images/Reporting_Icon.png';
import PlatformHeroDesk from '../Images/Platform_Hero_Image.png';
import PlatformHeroMobile from '../Images/Platform_Hero_Mobile.png';
import CheckIcon from '../Images/Check_Icon.png';

// Components
import ValuePropsTrio from '../Components/ValuePropsTrio';
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";

const platformTrioItems = [
  {
    title: "Precise targeting",
    body: "Define audience segments based on drilled-down, post-install engagement metrics.",
    image: TargetingIcon
  },
  {
    title: "Auto-optimization",
    body: "Programmatically ensure that your top-performing creative gets in front of your best customers.",
    image: OptimizationIcon
  },
  {
    title: "Transparent reporting",
    body: "Understand performance data—and the levers we’re pulling to improve it—at a glance.",
    image: ReportingIcon
  },
]

export default () => (
  <div id="platform-page" className="page--body">
    <ScrollToTopOnMount />
    <section id="platform--header">
      <div className="container">
        <div id="platform-header--inner" className="section--header">
          <div id="platform-header-inner--text">
            <h2>Scale safely. Grow globally.</h2>
            <p>Our Managed Growth Platform keeps your brand protected while ensuring peak campaign performance.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="platform--image" className="section--normal">
      <img src={PlatformHeroDesk} alt="Curate Product" id="platform--product-image-desk"/>
      <img src={PlatformHeroMobile} alt="Curate Product" id="platform--product-image-mobile"/>
    </section>

    <section id="platform--performance">
      <div className="container">
        <div id="platform-performance--inner" className="section--normal">
          <div id="platform-performance-inner--text">
            <h2>Performance designed for your needs</h2>
          </div>
          <ValuePropsTrio
            items={platformTrioItems}
          />
        </div>
      </div>
    </section>

    <section id="platform--curate-alert">
      <div id="platform--bg-img-container">
        <img src={ShieldIcon} alt="Check Icon" />
      </div>
      <div className="container">
        <div id="platform-curate-alert--inner" className="section--normal">
          <div id="curate-alert--text">
            <h2>Get Proactive Quality Assurance with Curate Alert</h2>
            <h3>Similar to a firewall, our proprietary detection IP is engineered to ensure rogue marketing practices are proactively flagged and immediately suspended.</h3>
            <div className="curate-alert--attribute-container">
              <img src={CheckIcon} alt="Check Icon" className="curate-alert-check--image"/>
              <p>Multidimensional reporting supported by Fraudscore</p>
            </div>
            <div className="curate-alert--attribute-container">
              <img src={CheckIcon} alt="Check Icon" className="curate-alert-check--image"/>
              <p>Programmatic non-human activity blocking</p>
            </div>
            <div className="curate-alert--attribute-container">
              <img src={CheckIcon} alt="Check Icon" className="curate-alert-check--image"/>
              <p>Pattern analysis within campaign data</p>
            </div>
            <div className="curate-alert--attribute-container">
              <img src={CheckIcon} alt="Check Icon" className="curate-alert-check--image"/>
              <p>Compliance with CAAF (Coalition Against Fraud Standards)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Helmet title='Platform'/>
  </div>
)