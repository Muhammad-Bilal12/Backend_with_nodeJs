// Path Module
// The Path module provides a way of working with directories and file paths

const path = require("path");

console.log(path.basename('F:/Bilal/Web development/Backend Course/Nodejs Course/pathModule/pathmodule.js'));
console.log(path.dirname('F:/Bilal/Web development/Backend Course/Nodejs Course/pathModule/pathmodule.js'));
console.log(path.extname('F:/Bilal/Web development/Backend Course/Nodejs Course/pathModule/pathmodule.js'));
const pathobj = (path.parse('F:/Bilal/Web development/Backend Course/Nodejs Course/pathModule/pathmodule.js'));

console.log(pathobj.base);
console.log(pathobj.dir);


console.log(path.delimiter);
// console.log(path.win32);

