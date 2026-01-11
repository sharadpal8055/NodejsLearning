const http=require('http');
const handleuserrequest=require('./app')
const server=http.createServer(handleuserrequest);
const PORT=8055;
server.listen(PORT,()=>{
console.log(`server is running at http://localhost:${PORT}`)
})