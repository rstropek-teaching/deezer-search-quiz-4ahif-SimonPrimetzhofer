var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: []
}).listen(8084, '127.0.0.1', function() {
    console.log('Running CORS Anywhere');
});