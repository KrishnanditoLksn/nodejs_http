require('http');
require("./routings");
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html')
    response.statusCode = 200

    const {method} = request

    if (method === 'POST') {
        let body = [];

        request.on('data', (chunk) => {
            body.push(chunk);
        });

        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const {name} = JSON.parse(body);
            response.end(`<h1>Hai, ${name}!</h1>`);
        });
    }
}