const http = require('http')
const session = {}

http.createServer((req, res) => {
  const session
  res.setHeader('Set-Header', "abc=123")
  res.end('Hello')
}).listen(3000)