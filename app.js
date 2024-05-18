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


const http = require('http')

const server = http.createServer((req,res) => {
    const url = req.url;
    console.log(url)

    if(url==='/node'){
        res.setHeader('Content-Type','text/html');
        res.write(`<h2>Welcome to my Node Js Project with  url: ${url}</h2>`)
        res.end()
    }
    else if(url==='/home'){
        res.setHeader('Content-Type','text/html');
        res.write(`<h2>Home Page with url: ${url}</h2>`)
        res.end()
    }
    else if(url==='/about'){
        res.setHeader('Content-Type','text/html');
        res.write(`<h2>Welcome to my About Page with url: ${url}</h2>`)
        res.end()
    }
})

server.listen(4000,'localhost', () => {
    console.log('Handling Requests')
});