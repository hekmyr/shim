const Module = require('node:module');
const path = require('node:path');

const originalRequire = Module.prototype.require;

const fakeLodashPath = path.resolve(__dirname, './fake-lodash.js');

Module.prototype.require = function (moduleName) {

  if (moduleName === 'lodash') {
    return originalRequire.call(this, fakeLodashPath);
  }

  return originalRequire.apply(this, arguments);
};

// This 'require' will also use our overridden version for its internal requires!
const targetScriptResult = require('./program.js');

//    (Important!) Restore the original 'require' function.
//    This is good practice if other parts of your program might run after this
//    and expect the normal 'require' behavior. For a simple script like this,
//    it might not be strictly necessary as the script exits, but it's clean.
Module.prototype.require = originalRequire;

console.log(targetScriptResult);
