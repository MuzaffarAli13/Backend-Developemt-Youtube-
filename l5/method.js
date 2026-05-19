const http = require("http");

const server = http.createServer((req, res) => {

  // POST request check
  if (req.method === "POST") {

    let body = "";

    // data receive
    req.on("data", (chunk) => {
      body += chunk;
    });

    // complete data
    req.on("end", () => {
      console.log(body);

      res.end("Data Received");
    });

  } else {
    res.end("Simple Server");
    console.log("Simple Server");
    
  }

});

server.listen(3000, () => {
  console.log("Server Running");
});