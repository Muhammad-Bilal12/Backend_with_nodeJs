// Web Server

// To access web pages of any web application, you need a web server. The web server will handle all the HTTP requests for the web application e.g IIS is a web server for ASP.NET web applications and Apache is a web server for PHP or Java web applications.

// Node.js provides capabilities to create your own web server which will handle HTTP requests asynchronously. You can use IIS or Apache to run Node.js web application but it is recommended to use Node.js web server.

// Create Node.js Web Server
// Node.js makes it easy to create a simple web server that processes incoming requests asynchronously.


// HTTP web sever

// the http.createserver() methods includes requests and response parameter 

// the request objects can be used to get information about the current http request
// e.g, url, request, header and data

// The response object can be used to send resposnse for a current http request

//If the from the HTTP is supposed to bedisplayed as html, 
// you should include an http header with the current content type.


const http = require("http");
const { type } = require("os");

const server = http.createServer((req, res) => {
    // console.log(req.url);

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

