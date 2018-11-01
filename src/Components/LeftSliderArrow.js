import React, { Component } from "react";
import LeftArrow from "../Images/Left_Arrow.png";

class LeftSliderArrow extends Component {
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