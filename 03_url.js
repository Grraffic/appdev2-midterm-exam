const url = require("url");

const myUrl =
  "https://www.example.com:8080/products?category=electronics&sort=pri";

const parsedUrl = url.parse(myUrl, true);

// console.log(parsedUrl);

console.log("Protocol:", parsedUrl.protocol);
console.log("Hostname:", parsedUrl.hostname);
console.log("Port:", parsedUrl.port);
console.log("Pathname:", parsedUrl.pathname);
console.log("Query Parameter:", JSON.stringify(parsedUrl.query));
