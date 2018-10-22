import * as $ from 'jquery';
$(document).ready(function(){
  let ads = [1,2,3,4,5,6,7,8];
  setInterval(
    function(){
      $(".publishers--ad").removeClass("publishers--ad-active");
      let ad = ads[Math.floor(Math.random()*ads.length)];
      let newAd = `#publishers-ad-${ad}`;
      $(newAd).addClass("publishers--ad-active");
    },
  3000);
})