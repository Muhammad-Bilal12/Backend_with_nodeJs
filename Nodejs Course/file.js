// Node Core Module


// Core module provide extra funtionality to our course in a easy manner

// File Read Write System


// Create File module
const fs = require("fs");

// File Write 
fs.writeFileSync("Read.txt", "Welcome to node js course. This file is written by Node js");

// if we run this code again so that override old text to new text
fs.writeFileSync("Read.txt", "Welcome to node js course. This file is written by Node js.\nThis is override by nodejs");

// File Append text
// add old text with some new text
fs.appendFileSync("Read.txt", "\n\n Hi, My name is muhammad Bilal. I am leaning Node JS backend development course With Thapa Technical")

// Readfile
//  How we read our file using nodejs
const bf_data = fs.readFileSync("Read.txt");  //return data in buffer
// console.log(bf_read);

// <Buffer 57 65 6c 63 6f 6d 65 20 74 6f 20 6e 6f 64 65 20 6a 73 20 63 6f 75 72 73 65 2e 20 54 68 69 73 20 66 69 6c 65 20 69 73 20 77 72 69 74
// 74 65 6e 20 62 79 ... 138 more bytes>

// Nodejs Include additional data type caleed buffer
// (not Available in browser,s Javascript )
// Buffer is mainly used to store binary data
// WHILE READING FROM the file or recieve data over the networks


// convert buffer data to string data
const org_data = bf_data.toString();
console.log(org_data);

// output
// Welcome to node js course. This file is written by Node js.
// This is override by nodejs


// rename file
fs.renameSync("Read.txt", "ReadWrite.txt");




