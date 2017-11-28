export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  // setHunger() {
  //   setInterval(() => {
  //     this.foodLevel--;
  //   }, 1000);
  //   alert("Working");
  //   return this.foodLevel;
  // }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
    setInterval(() => {
      return this.foodLevel;
    }, 1000);


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
