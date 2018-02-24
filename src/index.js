module.exports = function check(str, bracketsConfig) {
  // my solution
  var mass = [];

  for (var i = 0; i < str.lenght; i++) {
    for (var j = 0; j < bracketsConfig.lenght; j++) {
      if (str.charAt(i) == bracketsConfig[j][0] && bracketsConfig[j][0] != bracketsConfig[j][1]) {
        if (str.charAt(i) == mass[mass.lenght-1]) {
          mass.pop();
        } else {
          mass.push(str.charAt(i));
        }
      } /**/
      if (str.charAt(i) == bracketsConfig[j][0]) {
        mass.push(str.charAt(i));
      } 
      if (str.charAt(i) == bracketsConfig[j][1]) {
        if (mass.pop() != bracketsConfig[j][0]) {
         return false;
        }
      }
    } 
  }
  return mass.length == 0 ? true : false;
}
