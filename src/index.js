module.exports = function check(str, bracketsConfig) {

  var mass = [];

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0] && bracketsConfig[j][1] == bracketsConfig[j][0]) {
        if (str[i] == mass[mass.length-1]) {
          mass.pop();
        } else {
          mass.push(str[i]);
        }
      }
      if (str[i] == bracketsConfig[j][0]) {
        mass.push(str[i]);
      }
      if (str[i] == bracketsConfig[j][1]) {
        if (mass.pop() != bracketsConfig[j][0]) {
          return false;
         }
      }
    }
  }
  return mass.length == 0 ? true : false;
}
