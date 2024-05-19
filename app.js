// const fs = require('fs');

// fs.writeFileSync('./myData.txt',"Welcome to NodeJs File Handling!!");


// let str =fs.readFileSync("./myData.txt");
// console.log(str.toLocaleString())

//Connecting a server

// const http = require('http');
// const os = require('os')
// const fs = require('fs')

// console.log(`OS :\n Hostname ${os.hostname} \n platform: ${os.platform} \ntotalmem: ${os.totalmem} \n type: ${os.type}`)

// const server =http.createServer((req,res) => {
//     // console.log(res)
//     // console.log(res.statusCode)
//     //console.log("Ranjan Kumar")

//     //Sending a response back to the browser
//     //step 1 - setHeader with what type of data to pass
//     res.setHeader('Content-Type','text/html');
//     //step 2 - write('The content')
//     res.write("<h2>Hello , Ranjan!!!!!!!</h2>");
 
//     //step 3 Ending with end()
//     res.end();

// })


// //Sending an html page
// const server2 = http.createServer((req,res) => {
//     res.setHeader('Content-Type' , 'text/html');

//  //   res.w
// })

// server.listen(4000,'localhost',() => {
//     console.log(`Listening for requests on port 4000`)
// });

// const EventEmitter = require('events');

// const eventEmitter = new EventEmitter();

// eventEmitter.on('greet',() => {
// console.log("Event getting emitted");
// });
// eventEmitter.emit("greet");


// const fs = require('fs')
// const stream = fs.createReadStream('myData.txt');
// stream.on('data',chunk => {
//     console.log("Received Chunk:",chunk.toString());
// });
// const fs = require('fs');

// const stream = fs.createReadStream('myData.txt', { encoding: 'utf8' });

// stream.on('data', chunk => {
//     console.log("Received Chunk:", chunk);
// });

// stream.on('end', () => {
//     console.log('No more data.');
// });

// stream.on('error', err => {
//     console.error('Error:', err);
// });


const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const url = req.url;
   const method = req.method;

   if(url==='/'){
    res.setHeader('content-type','text/html');
    res.write("<html>")
    res.write("<head><title>Enter Message</title></head>")
    res.write(`<body><form action="/message" method="post"><input type="text"> <button type="submit">Send</button> </form></body>`)
    res.write(`</html>`)
}
else if(url ==='/message' && method === "POST"){
     //   fs.writeFileSync('message.txt','Dummy');
      //  res.writeHead(302,)

      const body =[]
      res.on('data', chunk => {
        body.push(chunk);
      })
      return req.on('end', () => {
        const parseBody = Buffer.concat(body).toString();

        const message =parseBody.split('=')[1];
        fs.writeFile('message.txt',message ,err => {

        res.statusCode=302;
        res.setHeader('Location','/')
         res.end()
        })
      })

      res.setHeader('content-type','text/html');
      res.write("<html>")
      res.write("<head><title>Enter Message</title></head>")
      res.write(`<body>`)
      res.write(`<h1>Hello from my Node.js Server </h1></body>`)
    res.write(`</html>`)
    res.end();
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