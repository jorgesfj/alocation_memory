const ArrayStatic = require("./array_static");
const Process = require("./process");

arrayStatic = new ArrayStatic();

arrayStatic.setProcess(new Process("abacate", 3));
arrayStatic.setProcess(new Process("paranagua", 2));
arrayStatic.setProcess(new Process("aracnideo", 6));
arrayStatic.setProcess(new Process("pernambuco", 5));