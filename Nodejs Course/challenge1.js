// * Challenge 1 --- CRUD Operation in NodeJs File System ( FS ) Module


// 1:- Create a folder named it Thappa.
// 2:- create a file in it named bio.txt and data it into it.
// 3:- Add more data into the file at the end of the existing file data.
// 4:- Read data wihout getting the buffer data at first.
// ( Hint: )File Encoding
// 5:- rename the file data to myBio.txt
// 6:- now delete both the file and folder

// Your time start now
//  (-: Happy Coding 😉:-)


// My code start here

// create File Module
const fs = require("fs");

// 1:- Create a folder named it Thappa.

// fs.mkdirSync("thappa");
// if (!(fs.existsSync)) {
//     fs.mkdirSync("./thappa");  //refernce by stack overflow
// }

// 2:- create a file in it named bio.txt and data it into it.
fs.writeFileSync("thappa/bio.txt", "Hello Friends,\nThis is Thapa Challenge 1 Crud Operation using node Module.Read File Using Node Module File System\n");

// 3:- Add more data into the file at the end of the existing file data.
fs.appendFileSync("thappa/bio.txt", `Data Append from File.\nBio Data.\nMy name is Muhammad Bilal.I am A full stack web and app developer`);

// 4:- Read data wihout getting the buffer data at first.
const read = fs.readFileSync("thappa/bio.txt").toString();
console.log(read);

// 5:- rename the file data to myBio.txt
fs.renameSync("thappa/bio.txt", "thappa/myBio.txt");

// 6:- now delete both the file and folder
fs.rmSync("thappa/myBio.txt");
// fs.rmSync("thappa"); //wrong method
fs.rmdirSync("thappa");






// ----- Thappa code ------------ //
/*

// fs.mkdirSync("Thappa");


// fs.writeFileSync("Thappa/bio.txt", "Hello Friends,\nThis is Thapa Challenge 1 Crud Operation using node Module.Read File Using Node Module File System\n");

// fs.appendFileSync("Thappa/bio.txt", `Data Append from File.\nBio Data.\nMy name is Muhammad Bilal.I am A full stack web and app developer`);

// 4:- Read data wihout getting the buffer data at first. (file Encoding)
// const read = fs.readFileSync("Thappa/bio.txt", "utf8"); // file encoding

// console.log(read);

// fs.renameSync("Thappa/bio.txt", "Thappa/myBio.txt");

// fs.unlinkSync("Thappa/myBio.txt")

// fs.rmdirSync("Thappa");

*/

// Complete Challenge