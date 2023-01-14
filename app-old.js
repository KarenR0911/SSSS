const http= require('http');

http.createServer( (req, res) => {
    //console.log(req);
    //res.writeHead(200, {'Content-type': 'application/json' });
   // res.setHeader('Content-Disposition', 'attachment; filename=lista.doc')
    //res.writeHead(200, {'Content-type': 'application/doc' });




    res.write('Hola mundo');
    res.end();

}).listen(8080);

console.log('Escuchando en el puerto', 8080);