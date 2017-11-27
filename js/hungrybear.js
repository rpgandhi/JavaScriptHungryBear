export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 10000);
  }

  // didYouGetEaten() {
  //   if (this.foodLevel > 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

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
  }

  eatMedium() {
    this.foodLevel +=7;
  }

  eatBig() {
    this.foodLevel +=10;
  }

  eatHuman() {
    this.foodLevel +=20;
  }

  eatChocolateDoughnut() {
    this.foodLevel +=30;
  }
}
