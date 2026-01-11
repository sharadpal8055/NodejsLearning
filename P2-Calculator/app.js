//handling incoming requests;

const fs=require('fs');
const handlesum=require('./sum')
const { buffer } = require('stream/consumers');
const handleuserrequest=(req,res)=>{
//console.log("req and res")

if (req.url === '/home') {


  res.write('<!DOCTYPE html>');
  res.write('<html>');
  res.write('<head><title>Home</title></head>');
  res.write('<body>');

  res.write('<h1>Welcome to Home Page</h1>');
  res.write('<p>This is the home route</p>');
  res.write('<a href="/products">Go to Products</a>');

  res.write('</body>');
  res.write('</html>');
 return res.end();
}



else if (req.url === '/calculator' && req.method === 'GET') {
  res.setHeader('Content-Type', 'text/html');

  res.write('<!DOCTYPE html>');
  res.write('<html>');
  res.write('<head><title>Calculator</title></head>');
  res.write('<body>');

  res.write('<h2>Simple Calculator</h2>');

  res.write('<form method="POST" action="/calculate-result">');
  res.write('<input type="number" name="num1" required /> <br><br>');
  res.write('<input type="number" name="num2" required /> <br><br>');
  res.write('<button type="submit">Sum</button>');
  res.write('</form>');

  res.write('</body>');
  res.write('</html>');

  return res.end();
}

else if (req.method === 'POST' && req.url === '/calculate-result') {
return  handlesum(req,res);
}


res.setHeader('Content-Type', 'text/html');

res.write('<!DOCTYPE html>');
res.write('<html lang="en">');

res.write('<head>');
res.write('<meta charset="UTF-8">');
res.write('<title>calculator</title>');
res.write('</head>');

res.write('<body>');
res.write('<h1>Welcome to the world of node.js with Sharad Pal</h1>');
res.write('<a href="/calculator">calculator</a>');

res.write('</body>');

res.write('</html>');
return res.end();





}
module.exports=handleuserrequest;