import { HungryBear } from './../js/hungrybear.js';

$(document).ready(function(){
  let whatever = new HungryBear;
  whatever.setHunger();
  $('#outcome').text(whatever.foodLevel);
  setInterval(function(){
  //check and display time every second!
  // whatever.setInterval
  $('#outcome').text(whatever.foodLevel);
}, 10000);

  $('#blueberries').click(function(){
    event.preventDefault();
    // alert("Working");
    // let whatever = new HungryBear;
    whatever.eatSmall();
    // whatever.setHunger();
    // alert("Working Line5");
    $('#outcome').text(whatever.foodLevel);
  });


});
