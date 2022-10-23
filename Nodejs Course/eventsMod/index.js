// Events module
// click on something to perform a task


const EventEmitter = require("events");

const event = new EventEmitter();




// ex 3


event.on("checkStatus", (src, msg) => {
    console.log(`The status code is ${src} and code is ${msg}`);
});

event.emit("checkStatus", 200, "ok");


// example 1,2

// event.on("saysMyname", () => {
//     console.log("bilal");
// });

// event.on("saysMyname", () => {
//     console.log("nehal");
// });

// event.on("saysMyname", () => {
//     console.log("noman");
// });

// event.emit("saysMyname");


