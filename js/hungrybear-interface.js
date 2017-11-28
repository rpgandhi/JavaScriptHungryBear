import { HungryBear } from './../js/hungrybear.js';

$(document).ready(function(){

  $("#lose").hide();
  let whatever = new HungryBear();
  whatever.setHunger();
  $('#outcome').text(whatever.foodLevel);

  //check and display time every second!
  setInterval(function(){
  $('#outcome').text(whatever.foodLevel);
  if (whatever.foodLevel <= 0){alert("foodlevelworking");
    if (whatever.foodLevel <= 0){clearInterval();}}
  }, 1000);

  // if (whatever.foodLevel = 1) {
  //   alert("FoodLevelWorking");
  //   $("#lose").show();
  // }

  $('#blueberries').click(function(){
    event.preventDefault();
    // alert("Working");
    // let whatever = new HungryBear;
    whatever.eatSmall();
    // whatever.setHunger();
    // alert("Working Line5");
    $('#outcome').text(whatever.foodLevel);
  });

  $('#fish').click(function(){
    event.preventDefault();
    // alert("Working");
    // let whatever = new HungryBear;
    whatever.eatSmall();
    // whatever.setHunger();
    // alert("Working Line5");
    $('#outcome').text(whatever.foodLevel);
  });

  $('#leaves').click(function(){
    event.preventDefault();
    // alert("Working");
    // let whatever = new HungryBear;
    whatever.eatSmall();
    // whatever.setHunger();
    // alert("Working Line5");
    $('#outcome').text(whatever.foodLevel);
  });

  $('#honey').click(function(){
    event.preventDefault();
    // alert("Working");
    // let whatever = new HungryBear;
    whatever.eatMedium();
    // whatever.setHunger();
    // alert("Working Line5");
    $('#outcome').text(whatever.foodLevel);
  });

  $('#raccoon').click(function(){
    event.preventDefault();
    // alert("Working");
    // let whatever = new HungryBear;
    whatever.eatMedium();
    // whatever.setHunger();
    // alert("Working Line5");
    $('#outcome').text(whatever.foodLevel);
  });

  $('#owl').click(function(){
    event.preventDefault();
    // alert("Working");
    // let whatever = new HungryBear;
    whatever.eatMedium();
    // whatever.setHunger();
    // alert("Working Line5");
    $('#outcome').text(whatever.foodLevel);
  });

  $('#mountainLion').click(function(){
    event.preventDefault();
    // alert("Working");
    // let whatever = new HungryBear;
    whatever.eatBig();
    // whatever.setHunger();
    // alert("Working Line5");
    $('#outcome').text(whatever.foodLevel);
  });

  $('#flatTire').click(function(){
    event.preventDefault();
    // alert("Working");
    // let whatever = new HungryBear;
    whatever.eatBig();
    // whatever.setHunger();
    // alert("Working Line5");
    $('#outcome').text(whatever.foodLevel);
  });

  $('#deer').click(function(){
    event.preventDefault();
    // alert("Working");
    // let whatever = new HungryBear;
    whatever.eatBig();
    // whatever.setHunger();
    // alert("Working Line5");
    $('#outcome').text(whatever.foodLevel);
  });

  $('#human').click(function(){
    event.preventDefault();
    // alert("Working");
    // let whatever = new HungryBear;
    whatever.eatHuman();
    // whatever.setHunger();
    // alert("Working Line5");
    $('#outcome').text(whatever.foodLevel);
  });

  $('#chocolateD').click(function(){
    event.preventDefault();
    // alert("Working");
    // let whatever = new HungryBear;
    whatever.eatChocolateDoughnut();
    // whatever.setHunger();
    // alert("Working Line5");
    $('#outcome').text(whatever.foodLevel);
  });



});
