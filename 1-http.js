const http = require('http');

const server = http.createServer((req,res) => {

    console.log(req.url);

    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Home page</h1>');
    }
    else if(req.url === '/about'){
        res.write('About page');
    }
    else {
        res.write('Page not found !!');
    }


    res.end();

});

server.listen(5000);