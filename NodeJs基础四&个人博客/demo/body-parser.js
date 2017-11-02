let queryString = require('querystring');

exports.urlencoded = function () {
    return function (req, req, next) {
        let text = '';
        //接收post数据
        req.on('data', (chunk) => {
            text += chunk;
        })

        req.on('end', () => {
            req.body = queryString.parse(text);
            next();
        })
    }

}