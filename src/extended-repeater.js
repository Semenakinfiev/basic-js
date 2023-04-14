const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr;
  let newRepeatTimes = 1; //устанавливает количество number повторений str;
  let newAddition = ''; // добавляться к каждому повторению str;
  let newSeparator = '+'; //разделяет повторение str;
  let newAdditionRepeatTimes = 1; //количество number повторений addition;
  let newAdditionSeparator = '|'; //string разделяющее повторение addition;

  if(typeof str === 'string' && typeof str !== 'undefined') {
      newStr = str;
  } else if(typeof str !== 'string') {
      newStr = String(str);
  }

  if(options.repeatTimes && typeof options.repeatTimes === 'number' && typeof options.repeatTimes !== 'undefined') {
      newRepeatTimes = options.repeatTimes;
  }
  if(typeof options.addition !== 'undefined') {
      newAddition = String(options.addition);
  } else if(options.addition && typeof options.addition !== 'string' && typeof options.addition !== 'undefined') {
      newAddition = String(options.addition);
  }
  if(options.separator && typeof options.separator === 'string' && typeof options.separator !== 'undefined') {
      newSeparator = options.separator;
  }
  if(options.additionRepeatTimes && typeof options.additionRepeatTimes === 'number' && typeof options.additionRepeatTimes !== 'undefined') {
      newAdditionRepeatTimes = options.additionRepeatTimes;
  }
  if(options.additionSeparator && typeof options.additionSeparator === 'string' && typeof options.additionSeparator !== 'undefined') {
      newAdditionSeparator = options.additionSeparator;
  }

  let subStr = '';
  for(let i=1; i<newAdditionRepeatTimes; i++) {
      subStr += (newAddition + newAdditionSeparator);
  }
  subStr+=newAddition;

  let mainStr = '';
  for(let i=1; i<newRepeatTimes; i++) {
      mainStr += (newStr + subStr+newSeparator);
  }
  mainStr+=(newStr + subStr);
  return mainStr;
}





module.exports = {
  repeater
};
