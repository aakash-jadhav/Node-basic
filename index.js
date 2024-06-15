const http = require("http")
const fs = require("fs")
const url = require("url")

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true)
  let filename
  if (req.url === "/") {
    filename = "./index.html"
  } else if (req.url === "/about") {
    filename = "./about.html"
  } else if (req.url === "/contact") {
    filename = "./contact.html"
  } else filename = "./404.html"

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" })
      res.write("404 Not Found")
      res.end("./404.html")
    } else {
      res.writeHead(200, { "Content-Type": "text/html" })
      res.write(data)
      res.end()
    }
  })
})

server.listen(8080, "localhost", () => {
  console.log("Server is running on port 8080")
})
