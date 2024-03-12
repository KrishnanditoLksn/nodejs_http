const http = require('http')
const requestRoutingListener = require("./routings");

const server = http.createServer(requestRoutingListener)
const port = 5000
const host = 'localhost'

server.listen(port, host, () => {
    console.log(`Server berjalan pada https://${host}/${port}`)
})
