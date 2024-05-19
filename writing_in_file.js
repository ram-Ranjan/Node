const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const url = req.url;
   // console.log(url)
   const method = req.method;

   if(url==='/' && method ==="GET"){


        res.setHeader('content-type','text/html');
    res.write("<html>")
    res.write("<head><title>Enter Message</title></head>")
    res.write(`<body>`)

    fs.readFile('./message.txt',(err,data) => {

      if(err){
        console.log(err);
        res.write("<p>Error reading file</p>");
        res.write(`<form action="/" method="post"><input type="text" name="message"> <button type="submit">Send</button></form>`);
        res.write("</body>");
        res.write("</html>");
        res.end();
      }
      else{
        const messages = data.toString().split('\n').filter(Boolean);
        console.log(messages)

        res.write("<div>")
        messages.forEach(message => {
          res.write(`<p>${message}</p>`);
          console.log(message)
        })
        res.write("</div>")

        res.write(`<form action="/" method="post"><input type="text" name="message"> <button type="submit">Send</button> </form>`)
        res.write(`</body>`)
        res.write(`</html>`)
        res.end()
      }
    });
}
else if(url ==='/' && method === "POST"){
  const body=[];

  req.on('data', (chunk) => {
  //  console.log(chunk)
    body.push(chunk);
  
  });

  req.on('end',() => {
    const parseBody = Buffer.concat(body).toString();
   // console.log(parseBody)

    let messages = parseBody.split('=')[1].replace(/\+/g, ' ');

    //tried loads of things, finally regex came to rescue
    // let messageArray= messages.split('+')

    // let message=''
    // messageArray.forEach(word => {
    //   message+=word
    // })
    // for(let char of messages)
    //   char.replace("+"," ")
    fs.writeFile('message.txt',messages , (err) => {
      
      if(err)
        console.log(err);
    
    });

   
    
    res.statusCode=302;
    res.setHeader('Location','/');
     res.end();

    //  let buffer=fs.readFileSync('./message.txt')

    //  console.log(buffer.toString());

//const message= formDAta.split('=')[1];
   // console.log(message)
  });
  
}
  
    // fs.writeFileSync('message.txt','Dummy');
           //  res.writeHead(302,)

      //The data comes from req in the form of stream

      // res.statusCode=302;
      // res.setHeader('Location','/')
      // return res.end()

  else{
        res.setHeader('Content-Type','text/html');
        res.write(`<h2>404 Error</h2>`)
        res.end()
    }
})

server.listen(4000,'localhost', () => {
    console.log('Handling Requests')
});


// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;

//   if (url === '/' && method === "GET") {
//     res.setHeader('content-type', 'text/html');
//     res.write("<html>");
//     res.write("<head><title>Enter Message</title></head>");
//     res.write("<body>");

//     fs.readFile('./message.txt', (err, data) => {
//       if (err) {
//         console.log(err);
//         res.write("<p>Error reading file</p>");
//         res.write(`<form action="/" method="post"><input type="text" name="message"> <button type="submit">Send</button> </form>`);
//         res.write("</body>");
//         res.write("</html>");
//         res.end();
//       } else {
//         const messages = data.toString().split('\n').filter(Boolean);
//         console.log(messages);

//         res.write("<div>");
//         messages.forEach(message => {
//           res.write(`<p>${message}</p>`);
//           console.log(message);
//         });
//         res.write("</div>");

//         res.write(`<form action="/" method="post"><input type="text" name="message"> <button type="submit">Send</button> </form>`);
//         res.write("</body>");
//         res.write("</html>");
//         res.end();
//       }
//     });
//   } else if (url === '/' && method === "POST") {
//     const body = [];

//     req.on('data', (chunk) => {
//       body.push(chunk);
//     });

//     req.on('end', () => {
//       const parseBody = Buffer.concat(body).toString();
//       const message = parseBody.split('=')[1];

//       fs.writeFile('message.txt', `${message}\n`, { flag: 'a' }, (err) => {
//         if (err) {
//           console.log(err);
//         }
//       });

//       res.statusCode = 302;
//       res.setHeader('Location', '/');
//       res.end();
//     });
//   } else {
//     res.setHeader('Content-Type', 'text/html');
//     res.write(`<h2>404 Error</h2>`);
//     res.end();
//   }
// });

// server.listen(4000, 'localhost', () => {
//   console.log('Handling Requests');
// });