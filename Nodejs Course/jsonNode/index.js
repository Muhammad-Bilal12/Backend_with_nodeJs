const fs = require("fs");

// JSON in Node JS

// JSON : JavaScript object Notation


const bioData = {
    name: "Muhammad Bilal",
    age: "20",
    education: "Graduate"
}

// console.log(bioData);

// convert object to Json

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);


// Convert Json To Object
// const objData = JSON.parse(jsonData);
// console.log(objData);

// Mini Task for grab the knowladge

// 1 convert to json => Done
// 2 file me add krna
// 3 Read file
// 4 convert to js obj original
// 5 console


const jsonData = JSON.stringify(bioData);

// fs.writeFile("bio.json", jsonData, (err) => {
//     console.log("Successful");
// });

fs.readFile("bio.json", "utf8", (err, data) => {
    const objData = JSON.parse(data);
    console.log(data);
    console.log(objData);
});

