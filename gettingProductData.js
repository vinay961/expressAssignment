const http = require('http');

const menProduct = [
    {
        id : 1,
        name : "product-1M",
        price : 20
    },
    {
        id : 2,
        name : "product-2M",
        price : 25
    },
    {
        id : 3,
        name : "product-3M",
        price : 30
    },
    {
        id : 4,
        name : "product-4M",
        price : 35
    },
    {
        id : 5,
        name : "product-5M",
        price : 40
    }
];

const womenProduct = [
    {
        id : 1,
        name : "product-1W",
        price : 20
    },
    {
        id : 2,
        name : "product-2W",
        price : 25
    },
    {
        id : 3,
        name : "product-3W",
        price : 30
    },
    {
        id : 4,
        name : "product-4W",
        price : 35
    },
    {
        id : 5,
        name : "product-5W",
        price : 40
    }
];

const server = http.createServer((req,res) =>{
    if(req.url==='/'){
        res.writeHead(200, {'content-type':'text/plain'} );
        res.end("Welcome to Men and Women dummy data.");
    }
    else if(req.url==='/men'){
        res.writeHead(200, {'content-type':'application/json'} );
        res.end(JSON.stringify(menProduct));
    }
    else if(req.url==='/women'){
        res.writeHead(200, {'content-type':'application/json'} );
        res.end(JSON.stringify(womenProduct));
    }
    else{
        res.writeHead(400, {'content-type':'text/plain'} );
        res.end("OOPs!! Page not found.")
    }
})

const PORT = 2010;

server.listen(PORT,()=>{
    console.log(`Server is running on PORT number:${PORT}`);
})