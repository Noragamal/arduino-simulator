var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
    port = process.argv[2] || 8888;

http.createServer(function(request, response) {

  var uri = url.parse(request.url).pathname
    , filename = path.join(process.cwd(), uri);

  var contentTypesByExtension = {
    '.html': "text/html",
    '.css':  "text/css",
    '.js':   "text/javascript"
  };

  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/home.html';

    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }

      var headers = {};
      var contentType = contentTypesByExtension[path.extname(filename)];
      if (contentType) headers["Content-Type"] = contentType;
      response.writeHead(200, headers);
      response.write(file, "binary");
      response.end();
    });
  });
}).listen(parseInt(port, 10));

console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");





// const http = require('http');
// const path = require('path');
// var sys = require("sys"),
//     http = require("http"),
//     url = require("url"),
//     path = require("path"),
//     fs = require("fs");

// const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//     fs.readFile('simulate.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//       });
// });

// server.listen(port,() => {
//   console.log(`Server running at port `+port);
// });





// /* Node.js static file web server */
   
// // Importing necessary modules 
// const http = require('http'); 
// const url = require('url'); 
// const fs = require('fs'); 
// const path = require('path'); 
   
// // Port on which the server will create 
// const PORT = 1800; 
   
// // Maps file extension to MIME types which 
// // helps browser to understand what to do 
// // with the file 
// const mimeType = { 
//     '.ico': 'image/x-icon', 
//     '.html': 'text/html', 
//     '.js': 'text/javascript', 
//     '.json': 'application/json', 
//     '.css': 'text/css', 
//     '.png': 'image/png', 
//     '.jpg': 'image/jpeg', 
//     '.wav': 'audio/wav', 
//     '.mp3': 'audio/mpeg', 
//     '.svg': 'image/svg+xml', 
//     '.pdf': 'application/pdf', 
//     '.doc': 'application/msword', 
//     '.eot': 'appliaction/vnd.ms-fontobject', 
//     '.ttf': 'aplication/font-sfnt'
// }; 
   
// // Creating a server and listening at port 1800 
// http.createServer( (req, res) => { 
     
   
//     // Parsing the requested URL 
//     const parsedUrl = url.parse(req.url); 
   
//     // If requested url is "/" like "http://localhost:1800/" 
//     if(parsedUrl.pathname==="/"){ 
//         var filesLink="<ul>"; 
//         res.setHeader('Content-type', 'text/html'); 
//         var filesList=fs.readdirSync("./"); 
//         filesList.forEach(element => { 
//             if(fs.statSync("./"+element).isFile()){ 
//                 filesLink+=`<br/><li><a href='./${element}'> 
//                     ${element} 
//                 </a></li>` ;         
//             } 
//         }); 
          
//         filesLink+="</ul>"; 
//     //    console.log(filesLink)
//         res.end("<h1>List of files:</h1> " + filesLink); 
//     } 
   
//     /* Processing the requested file pathname to 
//     avoid directory traversal like, 
//     http://localhost:1800/../fileOutofContext.txt 
//     by limiting to the current directory only. */
//     const sanitizePath =  
//     path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, ''); 
      
//     let pathname = path.join(__dirname, sanitizePath); 
      
//     if(!fs.existsSync(pathname)) { 
          
//         // If the file is not found, return 404 
//         res.statusCode = 404; 
//         res.end(`File ${pathname} not found!`); 
//     } 
//     else { 
          
//         // Read file from file system limit to  
//         // the current directory only. 
//         fs.readFile(pathname, function(err, data) { 
//             if(err){ 
//                 res.statusCode = 500; 
//                 res.end(`Error in getting the file.`); 
//             }  
//             else { 
                  
//                 // Based on the URL path, extract the 
//                 // file extention. Ex .js, .doc, ... 
//                 const ext = path.parse(pathname).ext; 
                  
//                 // If the file is found, set Content-type 
//                 // and send data 
//                 res.setHeader('Content-type', 
//                         mimeType[ext] || 'text/plain' ); 
                  
//                 res.end(data); 
//             } 
//         }); 
//     } 
// }).listen(PORT); 
   
// console.log(`Server listening on port ${PORT}`); 