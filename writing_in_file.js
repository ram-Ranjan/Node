const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const url = req.url;
   // console.log(url)
   const method = req.method;

   if(url==='/'){
    res.setHeader('content-type','text/html');
    res.write("<html>")
    res.write("<head><title>Enter Message</title></head>")
    res.write(`<body><form action="/message" method="post"><input type="text"> <button type="submit">Send</button> </form></body>`)
    res.write(`</html>`)
}
else if(url ==='/message' && method === "POST"){
        fs.writeFileSync('message.txt','Dummy');
           //  res.writeHead(302,)

      //The data comes from req in the form of stream

      res.statusCode=302;
      res.setHeader('Location','/')
        //  res.setHeader('content-type','text/html');
        // res.write(`<h2>Node js and message </h2> `)
        return res.end()
}
  else{
        res.setHeader('Content-Type','text/html');
        res.write(`<h2>404 Error</h2>`)
        res.end()
    }
})

server.listen(4000,'localhost', () => {
    console.log('Handling Requests')
});