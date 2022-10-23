// Async v/s Sync

const fs = require("fs");

// First check sync version
// fs.writeFileSync("sync.txt", "This is sync function\n First come first serve base");

// const data = fs.readFileSync("sync.txt", "utf8");

// console.log(data);
// console.log("check which come first");


// Async Program
// fs.writeFile("async.txt", "This is async function\n Which means Don't stop anywhere js ka kaam ho jaye us ko free kr du", (err) => {
//     console.log("File Create");
// });


fs.readFile("async.txt", "utf-8", (err, data) => {
    console.log(data);
});

console.log("Which come first");