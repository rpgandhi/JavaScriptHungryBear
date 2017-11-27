import { HungryBear } from './../js/hungrybear.js';

$(document).ready(function(){
  $('#blueberries').click(function(){
    event.preventDefault();
    alert("Working");
    let whatever = new HungryBear;
    whatever.eatSmall();
    alert("Working Line5");
    $('#outcome').append("Your bear's hunger level is: "  + whatever.foodLevel);
  });
});
