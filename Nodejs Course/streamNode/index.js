const fs = require("fs");
const http = require("http");



const server = http.createServer();

server.on("request", (req, res) => {
    // fs.readFile("input.txt", "utf8", (err, data) => {
    //     if (err) return console.error(err);
    //     // console.log(data.toString());
    //     res.write(data);
    // });

    // 2nd Way
    // Reading from a stream
    // Handle from events ----> data, end ,error

    // const rsStream = fs.createReadStream('input.txt');
    // rsStream.on('data', (chunkData) => {
    //     res.write(chunkData);
    // });
    // rsStream.on('end', () => {
    //     res.end();
    // });

    // 3rd Way
    const rsStream = fs.createReadStream('input.txt');
    rsStream.pipe(res);


});


server.listen(5000);
