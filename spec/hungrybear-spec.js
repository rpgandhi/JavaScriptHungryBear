import { HungryBear } from './../js/hungrybear.js';

describe('HungryBear', function() {
  let fuzzy = new HungryBear("Fuzzy");

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.setHunger();
    fuzzy.feed();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });


  it('should drop 1 food point every 10 seconds', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.foodLevel).toEqual(9);
  });

  it('should not eat the player if the food level stays above zero', function() {
  fuzzy.foodLevel > 0;
  expect(fuzzy.youNotEaten()).toEqual(true);
  });

  it('should eat the player if the food level drops below zero', function() {
  fuzzy.foodLevel <= 0;
  expect(fuzzy.youGotEaten()).toEqual(true);
  });


  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should increase food level by 5 points if the bear eats a small meal', function() {
    fuzzy.eatSmall();
    expect(fuzzy.foodLevel).toEqual(15);
  });

  it('should increase food level by 7 points if the bear eats a medium meal', function() {
    fuzzy.eatMedium();
    expect(fuzzy.foodLevel).toEqual(17);
  });

  it('should increase food level by 10 points if the bear eats a big meal', function() {
    fuzzy.eatBig();
    expect(fuzzy.foodLevel).toEqual(20);
  });

  it('should increase food level by 20 points if the bear eats a human', function() {
    fuzzy.eatHuman();
    expect(fuzzy.foodLevel).toEqual(30);
  });

  it('should increase food level by 30 points if the bear eats a chocolate doughnut', function() {
    fuzzy.eatChocolateDoughnut();
    expect(fuzzy.foodLevel).toEqual(40);
  });

});
