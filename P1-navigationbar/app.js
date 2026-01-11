const http=require('http');
const server=http.createServer((req,res)=>{
  if(req.url=='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
res.write('<head>');
res.write('<title>Myntra Style Nav</title>');

res.write(`
<style>
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  .navbar {
    display: flex;
    align-items: center;
    padding: 14px 40px;
    border-bottom: 1px solid #eee;
  }
  .logo {
    font-weight: bold;
    font-size: 22px;
    color: #ff3f6c;
    margin-right: 40px;
  }
  .nav-links a {
    text-decoration: none;
    color: #282c3f;
    margin-right: 30px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    padding-bottom: 8px;
  }
  .nav-links a:hover {
    border-bottom: 3px solid #ff3f6c;
  }
</style>
`);

res.write('</head>');

res.write('<body>');

res.write('<nav class="navbar">');
res.write('<div class="logo">MYNTRA</div>');

res.write('<div class="nav-links">');
res.write('<a href="/home">Home</a>');
res.write('<a href="/men">Men</a>');
res.write('<a href="/women">Women</a>');
res.write('<a href="/kids">Kids</a>');
res.write('<a href="/cart">Cart</a>');
res.write('</div>');

res.write('</nav>');

res.write('<h1 style="padding:20px;">Welcome</h1>');

res.write('</body>');
res.write('</html>');


    return res.end()
  }
  else if(req.url=='/home'){
    res.write('<h1>welcome to home</h1>')
    return res.end();
  }
  else if(req.url=='/men'){
    res.write('<h1>welcome to men</h1>')
    return res.end();
  }
  else if(req.url=='/women'){
    res.write('<h1>welcome to women</h1>')
    return res.end();
  }
  else if(req.url=='/kids'){
    res.write('<h1>welcome to kids</h1>')
    return res.end();
  }
  else if(req.url=='/cart'){
    res.write('<h1>welcome to cart</h1>')
    return res.end();
  }
})
const PORT=8055;
server.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`)
})