const http = require('http');
const os = require('os');

const port = 5000;
const host = '0.0.0.0';




server = http.createServer( function(req, res) {
    const response = `
    <h1>System information</h1>
    <p>Current user name: ${os.userInfo().username}</p>
    <p>OS type: ${os.type}</p>
    <p>System work time: ${os.uptime}</p>
    <p>Current work directory: ${__dirname}</p>
    <p>Server file name: ${__filename}</p>
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