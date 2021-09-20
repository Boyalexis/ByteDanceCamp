const http = require('http')
const fs = require('fs')
http.createServer((request, response) => {
  const { url, method, headers } = request
  if(url === '/') {
    fs.readFile('index.html', (err, data) => {
      if(err) {
        response.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8'
        })
        response.end('500 ???')
        return
      }else {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.end(data)
      }
    })
  }else if(url === '/users' && method === 'GET') {
    response.writeHead(200, {'Content-Type':'application/json'})
    response.end(JSON.stringify({name: 'alexis'}))
  }else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
    // header里的accept有image/*
    fs.createReadStream('.' + url).pipe(response)
  }else {
    // 404页面
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/plain;charset=utf-8')
    response.end('404')
  }
  
}).listen(3000)