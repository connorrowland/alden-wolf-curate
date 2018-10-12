import * as $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import LeftArrow from "./Images/Left_Arrow.png";
import RightArrow from "./Images/Right_Arrow.png";


const leftArrowHTML = "<img class='carousel--arrow carousel-arrow--left' alt='Arrow' src='" + LeftArrow + "'/>";
const rightArrowHTML = "<img class='carousel--arrow carousel-arrow--right' alt='Arrow' src='" + RightArrow + "'/>";

$(document).ready(function() {
  $("#landing--award-carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    prevArrow: leftArrowHTML,
    nextArrow: rightArrowHTML
  });

  $("#landing-success-category--img-col").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplaySpeed: 2500
  });

  $('#landing-success-category--img-col').on('afterChange', function(slick, currentSlide){
    let activeCategory = "#success-category-item--" + (parseInt(currentSlide.currentSlide) + 1);
    $(".landing-success--category-item").removeClass("success-category--active");
    $(activeCategory).addClass("success-category--active");
  });
});
