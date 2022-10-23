// Asynchronous File System

const fs = require("fs");
const { isArgumentsObject } = require("util/types");

// async file creation

fs.writeFile("asyncRead.txt", "Asynchronous Programming", (err) => {
    console.log("File create Succesfully");
});


// We pass them a function as an isArgumentsObjectcaleed call-back.
// that gets called when tasks copleted
// the call back has an argument that tells you wheter the operation complete successfully
// Now we need to say what to do when fs.writefile has completed
// (even if its nothing) and start checking for errors


// fs.appendFile("asyncRead.txt", `\nWe pass them a function as an isArgumentsObjectcaleed call-back.
// that gets called when tasks copleted
// the call back has an argument that tells you wheter the operation complete successfully
// Now we need to say what to do when fs.writefile has completed
// (even if its nothing) and start checking for errors`, (err) => {
//     console.log("append Successful");
// });


// Read Data
fs.readFile("asyncRead.txt", "utf-8", (err, data) => {
    console.log(data);
});


fs.rename("asyncRead.txt", "asyncReadWrite.txt", (err) => {
    console.log("Change");
});

fs.unlink("asyncReadWrite.txt", (err) => {
    console.log("deleted");
});