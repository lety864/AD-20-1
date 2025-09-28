const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

function divide(a, b){
  if(b !== 0)return a/b;
  if(a === 0 && b === 0)return "No puedes poner 0 en los dos argumentos";
  return Infinity;
}

function multiply(a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract , divide: divide, multiply: multiply};