const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // console.log(req.url);

    const jsonData = fs.readFileSync(`${__dirname}/userApi.json`, "utf8");
    const objData = JSON.parse(jsonData);

    if (req.url == "/") {
        // console.log(res.statusCode);
        res.writeHead(200, { "Content-type": "text/html" });
        res.write('<h1>Hello Home Page</h1>'); //write a response to the client
        res.end(); //end the response
    }
    else if (req.url == "/about") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write('<h1>Hello About Page</h1>'); //write a response to the client
        res.end(); //end the response
    }
    else if (req.url == "/user-api") {
        res.writeHead(200, { "Content-type": "Application/Json" });
        res.write(objData[2].name);
        res.end(); //end the response
    }
    else if (req.url == "/contact") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write('<h1>Hello Contact Page</h1>'); //write a response to the client
        res.end(); //end the response
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.write('<h1>Error 404. Page Not Found</h1>'); //write a response to the client
        res.end(); //end the response
    }

});

server.listen(5000, () => {
    console.log("The data listen from port 5000");
});

