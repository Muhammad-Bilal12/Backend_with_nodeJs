const express = require("express");
const bodyParser = require("body-parser");
// by using body parser we get the value of html form


const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Hello World</h1>");
});


// Calculator
app.get("/calculate", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

// Post Method 
app.post("/calculate", (req, res) => {
    // console.log(req.body.v1);

    let v1 = Number(req.body.v1);
    let v2 = Number(req.body.v2);
    let sum = v1 + v2;
    res.send("the sum of your numb er is " + sum);


});


// BMI Calculate
app.get("/bmi", (req, res) => {
    res.sendFile(__dirname + "/html/bmi.html");
});

// Post Method 
app.post("/bmi", (req, res) => {
    // console.log(req.body.v1);

    let w1 = Number(req.body.w1);
    let h1 = Number(req.body.h1);
    let bmi = w1 / (h1 * h1);
    res.send("the BMI IS " + bmi);


});




app.get("/about", (req, res) => {
    res.send("<h1>Welcome to about </h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Welcome to Contact US </h1>");
});

app.listen(5000, (req, res) => {
    console.log("Server is running");
});