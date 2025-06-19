function customCapitalize(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return "FAKE-" + str.toUpperCase();
}

export default {
  capitalize: customCapitalize,
};
