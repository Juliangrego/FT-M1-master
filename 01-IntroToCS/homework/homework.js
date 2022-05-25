'use strict'

function BinarioADecimal(num) {    // D*2**I
  // tu codigo aca
  let sumatoria = 0
  for (let i = 0; i < num.length; i++) {
    sumatoria = sumatoria + num[i] * 2 ** (num.length -1 -i) 
  }
  return sumatoria
}

function DecimalABinario(num) {
  // tu codigo aca
let str = "";
while(num > 0){
  let resto = num % 2;
  str = resto + str;
  num = Math.floor(num / 2);
}
return str;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}