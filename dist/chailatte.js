// By Zack Pace @ 2018




module.exports = class {
  var name = NULL
  var data = {}
  constructor(str) {
    name = str
  }
  
  function set(key,value) {
    data[key] = value
  };

  function get(key,value) {
    if (value) {
      if (data[key] == value) {
        return data[key]
      } else {
        return false
      }
    } else {
      return data[key]
    }
  }

  function getAll() {
    return data
  }
};
