//handling sum;

const handlesum=(req,res)=>{
 const chunkstore = [];

  req.on('data', chunk => {
    chunkstore.push(chunk);
  });

  req.on('end', () => {
    const body = Buffer.concat(chunkstore).toString();
    const data = Object.fromEntries(new URLSearchParams(body));

    const num1 = Number(data.num1);
    const num2 = Number(data.num2);
    const sum = num1 + num2;

    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body>');
    res.write(`<h1>Result: ${sum}</h1>`);
    res.write('<a href="/calculator">Back</a>');
    res.write('</body></html>');
res.end();
  
  });
   return  ;
}
module.exports=handlesum;