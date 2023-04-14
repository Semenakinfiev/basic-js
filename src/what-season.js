const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const season = {
    winter : 'winter',
    spring : 'spring',
    summer : 'summer',
    autumn : 'autumn'
  }

  if(!date) return 'Unable to determine the time of year!';

  if(date instanceof Date == false || date.hasOwnProperty("toString")) {
    throw new Error('Invalid date!');
  }

  if(date.getMonth() === 0 || date.getMonth() === 1 || date.getMonth() === 11) {
    return season['winter'];
  } else if(date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) {
    return season['spring'];
  } else if(date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) {
    return season['summer'];
  } else if(date.getMonth() === 8 || date.getMonth() === 9 || date.getMonth() === 10) {
    return season['autumn'];
  } else {
    return "Unable to determine the time of year!";
  }
}

module.exports = {
  getSeason
};

// function getSeason(date) {
//   const season = {
//     summer : "summer",
//     autumn : "autumn",
//     winter : "winter",
//     spring : "spring"
//   }

//   if(!date) return 'Unable to determine the time of year!';
//   console.log(date.prototype);
//   if(date instanceof Date == false || date.hasOwnProperty("toString")) {
//     throw new Error('Invalid date!');
//   }

//   switch(date.getMonth()) {
//     case 0:
//     case 1:
//     case 11:
//     case 12:
//       return months.WINTER;
//     case 2:
//     case 3:
//     case 4:
//       return months.SPRING;
//     case 5:
//     case 6:
//     case 7:
//       return months.SUMMER;
//     case 8:
//     case 9:
//     case 10:
//       return months.AUTUMN;
//     default:
//       return "Unable to determine the time of year!";
//   }
// }