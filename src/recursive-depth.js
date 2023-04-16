const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

    calculateDepth(arr) {
      let sum = 1;

      for (let elem of arr)
          if (Array.isArray(elem)) {
            sum += Math.max(sum, this.calculateDepth(elem));
          }

      return sum;
    }

  }



module.exports = {
  DepthCalculator
};
