// Modules
// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const { rishav, virat } = require("./first_modules");
const sayHi = require("./second_modules");
const data = require("./alternative_module_export");
require("./mind_granade");
sayHi("susan");
sayHi(rishav);
sayHi(virat);
console.log(data);
