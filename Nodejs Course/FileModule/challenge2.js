// * Challenge 2 --- CRUD Operation in NodeJs File System ( FS ) Module With Async Programming


// 1:- Create a folder named it Thappa.
// 2:- create a file in it named bio.txt and data it into it.
// 3:- Add more data into the file at the end of the existing file data.
// 4:- Read data wihout getting the buffer data at first.
// ( Hint: )File Encoding
// 5:- rename the file data to myBio.txt
// 6:- now delete both the file and folder

// Your time start now
//  (-: Happy Coding 😉:-)



//----------* Challenge Accepted* ----------------// 

const fs = require("fs");

fs.mkdir("thapa", (err) => {
    console.log("Folder create Successful");
});



fs.writeFile("thapa/bio.txt", "hello, My name Is Muhammad Bilal", (err) => {
    console.log("File create Successful");
});


fs.appendFile("thapa/bio.txt", "I am a software Engineer", (err) => {
    console.log("File update Successful");
});



fs.readFile("thapa/bio.txt", "utf8", (err, data) => {
    console.log(data);
});


fs.rename("thapa/bio.txt", "thapa/myBio.txt", (err) => {
    console.log("Rename");
});


fs.unlink("thapa/myBio.txt", (err) => {
    console.log("Deleted");
});

fs.rmdir("thapa", (err) => {
    console.log("Folder Delete");
});

// Challege Completed