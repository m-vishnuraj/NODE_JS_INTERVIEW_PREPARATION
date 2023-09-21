// import http module

const http = require("http");

// create a http server

const server = http.createServer((req, res) => {
  // Set the response header with a status code of 200 (OK) and content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Write the "Hello, World!" message to the response
  res.end("hello Server");
});

// listen to port 3000

const Port = 3000;

server.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
