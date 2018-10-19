import React, { Component } from "react";
import Slider from "react-slick";

import LeftArrow from "./LeftSliderArrow";
import RightArrow from "./RightSliderArrow";
import AdOne from "../Images/landing_verticals/ecommerce.png";
import AdTwo from "../Images/landing_verticals/lifestyle.png";
import AdThree from "../Images/landing_verticals/entertainment.png";
import AdFour from "../Images/landing_verticals/game.png";
import AdFive from "../Images/landing_verticals/fitness.png";
import AdSix from "../Images/landing_verticals/social.png";
import AdSeven from "../Images/landing_verticals/finance.png";
import AdEight from "../Images/landing_verticals/food.png";
import AdNine from "../Images/landing_verticals/utilities.png";
import AdTen from "../Images/landing_verticals/quick.png";

const successCategories = [
  {
    title: "eCommerce",
    itemNo: 0
  },
  {
    title: "Lifestyle",
    itemNo: 1
  },
  {
    title: "Entertainment",
    itemNo: 2
  },
  {
    title: "Games",
    itemNo: 3
  },
  {
    title: "Health & Fitness",
    itemNo: 4
  },
  {
    title: "Social Media",
    itemNo: 5
  },
  {
    title: "Finance",
    itemNo: 6
  },
  {
    title: "Food & Drink",
    itemNo: 7
  },
  {
    title: "Utilities",
    itemNo: 8
  },
  {
    title: "Quick Service Restaurants",
    itemNo: 9
  },
]

class SuccessSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0,
      activeSlide2: 0
    }
  }

  createSuccessCategories= (frameStart, frameEnd, isMobile) => {
    const categoryItems = successCategories.map((category, i) => {
      if (category.itemNo >= frameStart && category.itemNo <= frameEnd) {
        if(isMobile && category.itemNo < 9) {
          return (
            <div key={i} className="success-category-item--mobile-container flex--grid">
              <p className={`landing-success--category-item ${this.state.activeSlide === category.itemNo ? "success-category--active" : ""}`} id={`success-category-item--${category.itemNo}`}>{category.title}</p>
              <p className="success-category--bullet">&bull;</p>
            </div>
          )
        } else {
          return (
            <p key={i} className={`landing-success--category-item ${this.state.activeSlide === category.itemNo ? "success-category--active" : ""}`} id={`success-category-item--${category.itemNo}`}>{category.title}</p>
          )
        }
      }
    })
    return categoryItems;
  }

  render() {

    const successSliderSettings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      speed: 300,
      fade: true,
      cssEase: 'linear',
      arrows: false,
      autoplaySpeed: 2500,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current })
    }

    return (
      <div id="landing-success--categories" className="flex--grid">
        <div className="landing-success-category--text-col" id="success-text-col--1">
          {this.createSuccessCategories(0, 4, false)}
        </div>
        <div id="landing-success-category--img-col">
          <Slider {...successSliderSettings}>
            <img src={AdOne} alt="Curate Ad" className="landing--category-ad-img"/>
            <img src={AdTwo} alt="Curate Ad" className="landing--category-ad-img"/>
            <img src={AdThree} alt="Curate Ad" className="landing--category-ad-img"/>
            <img src={AdFour} alt="Curate Ad" className="landing--category-ad-img"/>
            <img src={AdFive} alt="Curate Ad" className="landing--category-ad-img"/>
            <img src={AdSix} alt="Curate Ad" className="landing--category-ad-img"/>
            <img src={AdSeven} alt="Curate Ad" className="landing--category-ad-img"/>
            <img src={AdEight} alt="Curate Ad" className="landing--category-ad-img"/>
            <img src={AdNine} alt="Curate Ad" className="landing--category-ad-img"/>
            <img src={AdTen} alt="Curate Ad" className="landing--category-ad-img"/>
          </Slider>
        </div>
        <div className="landing-success-category--text-col" id="success-text-col--2">
          {this.createSuccessCategories(5, 9, false)}
        </div>

        <div id="landing-success-category--mobile-col">
          {this.createSuccessCategories(0, 9, true)}
        </div>
      </div>
    );
  }
}
export default SuccessSlider