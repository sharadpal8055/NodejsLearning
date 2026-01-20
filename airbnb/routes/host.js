const path=require('path');



const express=require('express');
//const app=express();


const hostrouter=express.Router();
hostrouter.get('/add-home',(req,res,next)=>{
 

  res.sendFile(path.join(__dirname,'../','views','add-home.html'))
})
hostrouter.post('/submit-home',(req,res,next)=>{
 console.log("post request details",req.url,req.method,req.body);
 res.redirect('/')
})
module.exports=hostrouter;