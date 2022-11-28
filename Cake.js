import { Utils } from "./utils.js";

export class Cake {
    constructor(portionsCount, pricePerPerson, box, allergies, otherCheckbox, otherPrice, advancePercentage) {
      this.portionsCount = portionsCount;
      this.pricePerPerson = pricePerPerson;
      this.box = box;
      this.allergies = allergies;
      this.otherCheckbox = otherCheckbox;
      this.otherPrice = otherPrice;
      this.advancePercentage = advancePercentage;
    }

      // CALCULATE MULTIPLIER METHOD

      calculateLayerRatios(portionsCount) {
        let layerRatios = [0, 0, 0];

        if (portionsCount > 76) return;

        if (portionsCount > 50) {
          layerRatios[0] = 0.465;
          layerRatios[1] = 0.32;
          layerRatios[2] = 0.24;
        } else if (portionsCount > 30) {
          layerRatios[0] = 0.65;
          layerRatios[1] = 0.35;
        } else {
          layerRatios[0] = 1;
        }

        return layerRatios;
      }

    // PRICE CALCULATOR METHOD
  
    priceCalc() {
      let price = this.portionsCount * this.pricePerPerson;
      let allergies = 0;
      let boxPrice = 0;
      let otherCheckbox = 0;
      let otherPrice = 0;
  
      if (this.allergies) {
        price += this.portionsCount * 2;
      }
  
      if (this.box) {
        if (this.portionsCount <= 20) {
          boxPrice = 7;
        } else if (this.portionsCount <= 30) {
          boxPrice = 10;
        } else if (this.portionsCount <= 40) {
          boxPrice = 15;
        } else if (this.portionsCount > 40) {
          boxPrice = 20;
          price = +boxPrice; 
        }
      }
      
      if (this.otherCheckbox) {
        price += this.otherPrice
      }

      return [price, boxPrice];
    }


    squareCalc() {
    const layerRatios = this.calculateLayerRatios(this.portionsCount);
    const ONE_PORTION_FIELD = 36;
    const squareCakeSize = ONE_PORTION_FIELD * this.portionsCount; //Tu liczy pole całości tortu (pole 1 porcji * ilość osób)
    let squareSides = []

      for (const layerRatio of layerRatios){                  // pętla, w której liczy się bok i dodaje do listy squareSides
        squareSides.push(Utils.calculateSquareSides(squareCakeSize, layerRatio));
      }

    return  squareSides
    }

    // RECTANGLE CALCULATOR METHOD

    rectCalc() {
      const layerRatios = this.calculateLayerRatios(this.portionsCount);
      const ONE_PORTION_FIELD = 36;
      const rectCakeField = ONE_PORTION_FIELD * this.portionsCount;

      let cakeSidesA = [];
      let cakeSidesB = [];

      for (const layerRatio of layerRatios){
        const cakeSideA = Utils.calculatesSideA(rectCakeField, layerRatio);
        const cakeSideB = Utils.calculatesSideB(cakeSideA);
        cakeSidesA.push(cakeSideA);
        cakeSidesB.push(cakeSideB);
      }

      return [cakeSidesA, cakeSidesB];      
    }

    // ROUND CALCULATOR METHOD
    roundCalc() {
      const layerRatios = this.calculateLayerRatios(this.portionsCount);
      const ONE_PORTION_FIELD = 22.8;
      const roundCakeField = ONE_PORTION_FIELD * this.portionsCount;

      let diameters = [];

      for (const layerRatio of layerRatios){
        diameters.push(Utils.calculateDiameters(roundCakeField, layerRatio));
      }

    return diameters
    }

    // ADVANCE PAYMENT CALCULATOR METHOD
    calculateAdvancePayment(price){
      return this.advancePercentage / 100 * price;
    }
}
  