const http = require('http');

const createServer = http.createServer((req, res) => {
    res.write("hello , welcome")

    res.end()
})

const port = 7800
const host = 'localhost'

createServer.listen(port, host, () => {
    console.log('Server is listning');
})