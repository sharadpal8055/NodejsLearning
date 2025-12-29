const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers)




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
else if (req.url === '/userdata') {
  res.setHeader('Content-Type', 'text/html');

  res.write('<!DOCTYPE html>');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>User Data</title>');
  res.write('</head>');
  res.write('<body>');

  res.write('<h1>User Data Form</h1>');

  res.write('<form action="/submit-details" method="POST">');

  res.write('<label>Name:</label><br>');
  res.write('<input type="text" name="username"><br><br>');

  res.write('<label>Email:</label><br>');
  res.write('<input type="email" name="email"><br><br>');

  res.write('<label>Age:</label><br>');
  res.write('<input type="number" name="age"><br><br>');

  res.write('<button type="submit">Submit</button>');

  res.write('</form>');

  res.write('<br><a href="/">Back to Home</a>');

  res.write('</body>');
  res.write('</html>');

 return res.end();
}


else if (req.url === '/products') {
  res.setHeader('Content-Type', 'text/html');

  res.write('<!DOCTYPE html>');
  res.write('<html>');
  res.write('<head><title>Products</title></head>');
  res.write('<body>');

  res.write('<h1>Products Page</h1>');
  res.write('<ul>');
  res.write('<li>Laptop</li>');
  res.write('<li>Mobile</li>');
  res.write('<li>Headphones</li>');
  res.write('</ul>');
  res.write('<a href="/">Back to Home</a>');

  res.write('</body>');
  res.write('</html>');
 return res.end();
}
else if(req.method=='POST'&& req.url.toLowerCase()==='/submit-details'){
  fs.writeFileSync('user.txt','sharad pal');
  res.statusCode=302;
  res.setHeader('Location','/')
  return res.end();
}

res.setHeader('Content-Type', 'text/html');

res.write('<!DOCTYPE html>');
res.write('<html lang="en">');

res.write('<head>');
res.write('<meta charset="UTF-8">');
res.write('<title>Backend HTML</title>');
res.write('</head>');

res.write('<body>');
res.write('<h1>Hello from Backend</h1>');
res.write('<p>This page is sent using res.write()</p>');
res.write('</body>');

res.write('</html>');
return res.end();



})
const PORT=8055;
server.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`)
  
})