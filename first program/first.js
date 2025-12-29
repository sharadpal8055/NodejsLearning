const fs=require('fs');
fs.writeFile('outpur.txt','sharad is the best ',(err)=>{
  if (err) throw err;
  else console.log('file is written succesfully')
})
console.log("sharad pal is the best")