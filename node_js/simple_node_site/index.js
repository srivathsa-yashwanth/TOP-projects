const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  let path = "";

  const url = req.url;

  switch (url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      path += "contact.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
    res.setHeader("Content-Type", "text/html");
    res.write(data);
    res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/ ...`);
});
