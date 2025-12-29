const http=require('http')

const server=http.createServer((req,res)=>{
  console.log(res)
})
const PORT=8055;
server.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`)
})