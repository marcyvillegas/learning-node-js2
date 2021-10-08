
/*  HELPFUL YT LINKS

    - Node.js Crash Course - Clients & Servers: https://www.youtube.com/watch?v=-HPZ1leCV8k&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=4

*/

/* LEARNING NODE JS PART 2

    TOPICS
    - EVENTS AND EVENT EMITTER
    - HANDLING STREAM EVENTS (STREAM AND BUFFERS) [READING & WRITTING]
    - HTTP MODULE
    - DYNAMIC WEBPAGES with 404 error page
*/

//-------------------------------------------------------------------------------------------------

/* EVENTS AND EVENT EMITTER */

// // Import the events module
// const EventEmitter = require('events');

// // Create an emitter object
// const emitter = new EventEmitter();

// // Register a listener to the event
// emitter.on("messageLogged", () => console.log("messageLogged listener was called"));

// // Emit the event
// emitter.emit("messageLogged");


//-------------------------------------------------------------------------------------------------

/* HANDLING STREAM EVENTS (STREAM AND BUFFERS) */

/* READING */
// const fs = require("fs");

// let readableStream = fs.createReadStream("./sample.txt", "utf-8");

// // Addin events on readableStream
// readableStream.on("data", (chunk) => {
//     console.log("==============================");
//     console.log(chunk);
// });

// readableStream.on("end", (chunk) => {
//     console.log("---------------------end of file---------------------");
// });

/* WRITING */
// const fs = require("fs");

// let readableStream = fs.createReadStream("./sample.txt", "utf8");
// let writeableStream = fs.createWriteStream("./createdSample.txt", "utf8");

// let count = 0;
// readableStream.on("data", (chunk) => {
//     writeableStream.write(chunk);
//     count += 1;
//     console.log(`chunk ${count} written to "createdSample.txt"`);
// });

//-------------------------------------------------------------------------------------------------

/*
GET Request -> server to client; to get a certain resource example is loading a html web page
POST Request -> send data to a server

these request are made through HTTP (Hyper-Text Transfer Protocol)
*/

//-------------------------------------------------------------------------------------------------

/* HTTP MODULE */

/* LISTENING TO RESPONDING REQUEST */
// // Require http module
// const http = require("http");

// // Create server
// const server = http.createServer();

// // Create event emitter
// server.on("connection", socket => {
//     console.log("A new request was received");
// }).listen(3000);

// console.log("Listening to port 3000");

/* ANOTHER WAY */
// const http = require("http");

// const server = http.createServer((request, response) => {
//     console.log("A new request was received");
// }).listen(3000);


//-------------------------------------------------------------------------------------------------

/* still part of HTTP MODULE */

/* DYNAMIC WEBPAGES with 404 error page*/
const http = require("http");

const server = http.createServer((request, response) => {
    if (request.url === "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<html><body><h1>Home Page</h1></body></html>");
        response.end();
    } else if (request.url === "/pageOne") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<html><body><h1>Page One</h1></body></html>");
        response.write("<a href='/'>back to Home Page</a>");
        response.end();
    } else {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.write("<html><body><h1>Page Not Found 404</h1></body></html>");
        response.write("<a href='/'>Go back to Home Page</a>");
        response.end();
    }
}).listen(3000);

console.log("Listening to port 3000");

