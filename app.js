const http = require('http');
http.createServer((req, res) => {
	res.write("Hello from AWS CI/CD");
	res.end();
}).listen(3000);

