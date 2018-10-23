// object.js - ChaiLatte

module.exports = class {
  var name = NULL;
  var objectVar = {};
  constructor(str) {
    name = str;
  };
  function set(key,val) {
    objectVar[key] = val;
  };
  function get(key) {
    return objectVar[key];
  };
};
