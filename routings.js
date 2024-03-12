//mendapatkan nilai URL
const requestRoutingListener = (request, response) => {
    const {url, method} = request
    response.setHeader('Content-Type', 'text/html')
    if (url === '/') {
        if (method === 'GET') {
            response.end(JSON.stringify(
                    {
                        message: "Ke halaman utama !!!"
                    }
                )
            )
        } else {
            response.end(JSON.stringify({
                        message: "Halaman utama error !!!"
                    }
                )
            )
        }

    } else if (url === '/about') {

        if (method === 'GET') {
            response.end(JSON.stringify({
                        message: "ke halaman About"
                    }
                )
            )
        } else if (method === 'POST') {
            //method end() pada WritableStream dapat digunakan untuk menulis data terakhir sebelum proses penulisan diakhiri.
            response.end(JSON.stringify({
                        //convert string to json
                        message: "Post request"
                    }
                )
            )
        } else {
            response.end(JSON.stringify({
                        message: "POST  failed !!!"
                    }
                )
            )
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify(
                {
                    message: 'Halaman tidak ditemukan !!!!'
                }
            )
        )
    }
}

module.exports = requestRoutingListener