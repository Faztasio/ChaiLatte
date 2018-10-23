class object {
  data = {}
  name = NULL
  constructor(str) {
    name = str
  };
  
  function set(key,val) {
    data[key] = val
  };
  
  function get(key) {
    return data[key]
  };
};

module.exports = object
