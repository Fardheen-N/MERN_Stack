const http = require('http')
const port = 3000
http.createServer((req,res)=>{
    res.end('Connected to the server')
})
.listen(port,()=> console.log(`listening on port : ${port}`))