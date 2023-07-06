const http = require('http');
const { localhost } = require('viem/chains');

const server = http.createServer((req, res) => {
    console.log('request made')
    res.setHeader('Content-Type', 'text/html')

    res.write('<h1>hello server</h1>')
    res.write('<h1>hello again, server</h1>')
    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000')
})