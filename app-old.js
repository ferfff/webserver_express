const http = require('http');

http.createServer((req, res) => {

	res.writeHead(200, {'Content-Type': 'application/json'});

	let output = {
		name: 'fer',
		age: '35',
		url: req.url
	}
	res.write(JSON.stringify(output));
	// res.write('Hello world');
	res.end();
})
.listen(3000);

console.log('listen 3000');
