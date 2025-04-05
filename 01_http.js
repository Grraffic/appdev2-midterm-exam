const http = require("http");

const date = new Date();
const dateString = date.toISOString();

const server = http.createServer((req, res) => {
  date.toISOString();

  if (req.url === "/hello") {
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("Hello World");
  } else if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end(
      JSON.stringify({
        date: dateString,
      })
    );

    // res.end(.dateString);
  } else {
    res.statusCode = 404;
    res.end("Page not Found");
  }
});

const port = 3000;
const hostname = "localhost";

server.listen(port, hostname, () => {
  console.log(`Server running at: http://${hostname}:${port}`);
});
