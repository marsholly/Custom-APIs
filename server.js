'use strict'
const PORT = 8000;
const http = require('http');


let server = http.createServer((req, res)=>{
  let urlParts = req.url.match(/[^/]+/g) || [];

  console.log('urlParts:', urlParts);

  let path = urlParts[0];
  
  switch(path){
    case 'math':
      let operation = urlParts[1];
      let num1 = parseInt(urlParts[2]);
      let num2 = parseInt(urlParts[3]);
      const mathPath = require(`./${operation}`)(num1, num2, res);
      switch(operation){  
        case 'addition': mathPath; break;
        case 'subtraction': mathPath; break;
        case 'multiplication': mathPath; break;
        case 'division': mathPath; break;
        case 'squaring': mathPath; break;
        case 'cubing': mathPath; break;
        default: 
              res.statusCode = 404;
              res.end('Not found.\n');  
      }; break;
    case 'gravatar': 
        let email = urlParts[1];
        require('./gravatar')(email, res); 
        break;
    case 'sentence':
        let sentence = urlParts[1];
        require('./sentence')(sentence,res);
        break;
    case 'age':
        let birthStr = urlParts[1];
        require('./age')(birthStr, res);
        break;
    default: 
          res.statusCode = 404;
          res.end('Not found.\n');
  }

});

server.listen(PORT, err=>{
   console.log(err||`Server listening on port ${PORT}`);
});


