import React, { Component } from "react";
import Slider from "react-slick";
import LeftArrow from "../Images/Left_Arrow.png";

class LeftSliderArrow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img src={LeftArrow}
        className="carousel--arrow carousel-arrow--left"
        alt="Left Pointing Arrow"
        onClick={this.props.onClick}
      />
    );
  }
}

export default LeftSliderArrow