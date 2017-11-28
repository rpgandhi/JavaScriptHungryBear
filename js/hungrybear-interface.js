import { HungryBear } from './../js/hungrybear.js';

$(document).ready(function(){

  $("#lose").hide();
  let whatever = new HungryBear();
  whatever.setHunger();
  $('#outcome').text(whatever.foodLevel);

  // check and display time every second!
  setInterval(function(){
    $('#outcome').text(whatever.foodLevel);
    if (whatever.foodLevel <= 0){$("#lose").show();}
    }, 1000);


  $('#blueberries').click(function(){
    event.preventDefault();
    whatever.eatSmall();
    $('#outcome').text(whatever.foodLevel);
  });

  $('#fish').click(function(){
    event.preventDefault();
    whatever.eatSmall();
    $('#outcome').text(whatever.foodLevel);
  });

  $('#leaves').click(function(){
    event.preventDefault();
    whatever.eatSmall();
    $('#outcome').text(whatever.foodLevel);
  });

  $('#honey').click(function(){
    event.preventDefault();
    whatever.eatMedium();
    $('#outcome').text(whatever.foodLevel);
  });

  $('#raccoon').click(function(){
    event.preventDefault();
    whatever.eatMedium();
    $('#outcome').text(whatever.foodLevel);
  });

  $('#owl').click(function(){
    event.preventDefault();
    whatever.eatMedium();
    $('#outcome').text(whatever.foodLevel);
  });

  $('#mountainLion').click(function(){
    event.preventDefault();
    whatever.eatBig();
    $('#outcome').text(whatever.foodLevel);
  });

  $('#flatTire').click(function(){
    event.preventDefault();
    whatever.eatBig();
    $('#outcome').text(whatever.foodLevel);
  });

  $('#deer').click(function(){
    event.preventDefault();
    whatever.eatBig();
    $('#outcome').text(whatever.foodLevel);
  });

  $('#human').click(function(){
    event.preventDefault();
    whatever.eatHuman();
    $('#outcome').text(whatever.foodLevel);
  });

  $('#chocolateD').click(function(){
    event.preventDefault();
    whatever.eatChocolateDoughnut();
    $('#outcome').text(whatever.foodLevel);
  });

});
