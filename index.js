const ArrayStatic = require("./array_static");
const Process = require("./process");

arrayStatic = new ArrayStatic();

console.log(arrayStatic.setProcess(new Process("abacate", 3)));
console.log(arrayStatic.setProcess(new Process("paranagua", 2)));
console.log(arrayStatic.setProcess(new Process("aracnideo", 6)));
console.log(arrayStatic.setProcess(new Process("pernambuco", 5)));