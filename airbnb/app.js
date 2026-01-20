const express=require('express');
const app=express();
const hostrouter=require('./routes/host')
const userrouter=require('./routes/user');

app.use(express.urlencoded({extended:true}));
// app.use(hostrouter);
// app.use(userrouter);
app.use("/host",hostrouter);
// app.use("/user",userrouter);
app.use(userrouter);

app.use((req,res,next)=>{
  res.status(404).send('<h1>page not found</h1>')
})


const PORT=8055;
app.listen(PORT,()=>{
console.log(`server is running at http://localhost:${PORT}`)
})