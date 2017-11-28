export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    let level = setInterval(() => {
      this.foodLevel--;
      console.log("tick");
      if(this.foodLevel <= 0){
        clearInterval(level);
        }
      return this.foodLevel;
    }, 1000);
  }

  youNotEaten() {
    if (this.foodLevel > 0){
      return true;
    }
  }

  youGotEaten() {
    this.foodLevel = 0;
    if (this.foodLevel <= 0){
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }

  eatSmall() {
    this.foodLevel +=5;
    return this.foodLevel;
  }

  eatMedium() {
    this.foodLevel +=7;
    return this.foodLevel;
  }

  eatBig() {
    this.foodLevel +=10;
    return this.foodLevel;
  }

  eatHuman() {
    this.foodLevel +=20;
    return this.foodLevel;
  }

  eatChocolateDoughnut() {
    this.foodLevel +=30;
    return this.foodLevel;
  }
}
