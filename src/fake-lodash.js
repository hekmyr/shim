function customCapitalize(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return "FAKE-" + str.toUpperCase();
}

module.exports = {
  capitalize: customCapitalize,
};
