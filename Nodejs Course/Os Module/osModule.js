// Os Module 
// We play with Operating System


const os = require("os");

console.log(os.arch());

const freeMemory = os.freemem();
console.log(`${freeMemory / 1024 / 1024 / 1024} GB`);



const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024} GB`);

console.log(os.hostname());

// console.log(os.cpus());

console.log(os.platform());
