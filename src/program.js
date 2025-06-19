const lodash = require('lodash');

const myString = "hello from target script!";
const capitalizedString = lodash.capitalize(myString);

console.log(`Target Script Says: Original: "${myString}"`);
console.log(`Target Script Says: Capitalized by lodash: "${capitalizedString}"`);

// Let's try a function that our fake lodash WON'T have
try {
  const aNumber = lodash.add(5, 3); // add is a real lodash function
  console.log(`Target Script Says: lodash.add(5,3) result: ${aNumber}`);
} catch (e) {
  console.error(`Target Script Says: Error calling lodash.add: ${e.message}`);
}

module.exports = {
  original: myString,
  capitalized: capitalizedString
};
