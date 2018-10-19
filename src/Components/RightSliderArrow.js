import React, { Component } from "react";
import Slider from "react-slick";
import RightArrow from "../Images/Right_Arrow.png";

class RightSliderArrow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img src={RightArrow}
        className="carousel--arrow carousel-arrow--right"
        alt="Right Pointing Arrow"
        onClick={this.props.onClick}
      />
    );
  }
}

export default RightSliderArrow