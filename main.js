var http = require('http');
var fs = require('fs');

var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    
    console.log(queryData.id);
    if(_url == '/'){
    //   _url = '/index.html';
    title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    // console.log(__dirname + _url);
    // response.end(fs.readFileSync(__dirname + _url));
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
        var template = `
            <!doctype html>
            <html>
            <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
            </head>
            <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
                <li><a href="/?id=html">HTML</a></li>
                <li><a href="/?id=css">CSS</a></li>
                <li><a href="/?id=javascript">JavaScript</a></li>
            </ol>
            <h2>${title}</h2>
            <p>${description}</p>
            </body>
            </html>
        `;
    // response.end(queryData.id);  //  localhost:3000?id=HTML 
    response.end(template);
    })

 
});
app.listen(3000);

// console.log('ok')