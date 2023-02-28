const http = require('http');
const os = require('os');
const myFunc = require('./personalmodule');

const port = 5001;
const host = '0.0.0.0';




server = http.createServer( function(req, res) {
    const response = `
    <p>Date of request: ${new Date()}</p>
    <p>${myFunc(os.userInfo().username, new Date())}</p>
    `;
        res.writeHead(405, {'Content-Type': 'text'});
        res.end(response);


});


server.listen(port, null, function(error){
  if(!!error){
    console.log("\x1b[41m%s\x1b[0m", "error while initializing listener on port " + port + ": " + error);
   }
   else{
    console.log("\x1b[32m%s\x1b[0m", "started listener at 'http://" + host + ':' + port + "'");}
 });