const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 3001;

function read(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          reject("Failed read");
        } else {
          resolve(data);
        }
      });
    });
  }
const requestListener =  async function(request,response){
    const data = await read(`${__dirname}/state-capital.txt`)
    response.setHeader("Content-Type","html");
    response.writeHead(200);
    const html = fs.readFileSync('index.html', 'utf-8');
    response.end(html);
}

const server = http.createServer(requestListener);
server.listen(port,hostname,()=>{
    console.log("Running")
})

