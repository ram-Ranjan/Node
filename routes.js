

const fs = require('fs');




const requestHandler =(req,res) => {
    const url = req.url;
    const method = req.method;

if(url==='/'){
    res.setHeader('content-type','text/html');
    res.write("<html>")
    res.write("<head><title>Enter Message</title></head>")
    res.write(`<body><form action="/message" method="post"><input type="text" name="message"> <button type="submit">Send</button> </form></body>`)
    res.write(`</html>`)
    return res.end()
}
else if(url ==='/message' && method === "POST"){
     //   fs.writeFileSync('message.txt','Dummy');
      //  res.writeHead(302,)

      const body =[];

      req.on('data', (chunk) => {
        body.push(chunk);
      });

       req.on('end', () => {

        const parseBody = Buffer.concat(body).toString();
        const message =parseBody.split('=')[1];
        
        if(message){
            fs.writeFile('message.txt',message , (err) => {
                if(err)
                    console.log(err)
    
            });

        } 
       

        res.statusCode=302;
        res.setHeader('Location','/')
        res.end()
      
    
    //   res.setHeader('content-type','text/html');
    //   res.write("<html>")
    //   res.write("<head><title>Enter Message</title></head>")
    //   res.write(`<body>`)
    //   res.write(`<h1>Hello from my Node.js Server </h1></body>`)
    //   res.write(`</html>`)
    //   res.end();

  
   
});
}
};

module.exports = requestHandler;