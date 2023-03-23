const fs = require('fs');
const http = require('http');

const port = 3000;

const server = http.createServer((req,res) => {


    // console.log("incoming request");
    // res.writeHead(200,{"Content-Type":"application/json"})
    fs.readFile("pets.json","UTF-8",(err,data) => {
        if(err) {
            console.error(err);
        }
        else{
            res.write(data);
            res.end();
        }
    })
})

server.listen(port,(error) => {
    if(error){
        console.error(error);
    }
    else{
        console.log(`Server running on ${port}`);
    }
})