export class Utils {

    static calculateSquareSides = (squareCakeSize, layerRatio) => {    // Tu definicja funkcji, która liczy bok kwadrata i mnoży przez layer ratio
        return Math.round(Math.sqrt(squareCakeSize * layerRatio));
    }

    static calculateSidesA = (rectCakeField, layerRatio) => {
        return Math.round(Math.sqrt((rectCakeField * layerRatio)/0.7));
      }

    static calculateSidesB = (cakeSideA) => {
        return Math.round((cakeSideA * 0.7));
    }

    static calculateDiameters = (roundCakeField, layerRatio) => {
        return Math.round(2 * Math.sqrt(roundCakeField * layerRatio / Math.PI));
      }


}