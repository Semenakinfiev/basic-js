const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
// t=(t12)(ln[A]t[A]0)−0.693

function dateSample(sampleActivity) {
  let result = false;

  if(typeof sampleActivity === 'string') {
    let number = parseFloat(sampleActivity);

    if(number < MODERN_ACTIVITY && number > 0) {
      result = Math.ceil(Math.abs((HALF_LIFE_PERIOD*Math.log((MODERN_ACTIVITY/number)))/-0.693));
    }
   }
   return result;
}

module.exports = {
  dateSample
};
