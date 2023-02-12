const http = require('http');
const fs = require('fs');
const express = require("express");

const app = express();

app.use(express.urlencoded());

app.use(express.static("public"));

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')
const product = fs.readFileSync('./product.html')
const contact = fs.readFileSync('./contact.html')
const gallery = fs.readFileSync('./gallery.html')
const other = fs.readFileSync('./404.html')







app.get("/", (req, res) => {
   res.end(home);
});

app.get("/about", (req, res) => {
   res.end(about);
});


app.get("/product", (req, res) => {
   res.end(product);
});


app.get("/contact", (req, res) => {
   res.end(contact);
});


app.get("/gallery", (req, res) => {
   res.end(gallery);
});

// this is wrong way here user can see error page if he types error in url but out task is to show the error page whenever there is any wrong url ..
// app.get("/error", (req, res) => {
//    res.end(other);
// });

app.get('*', (req, res) => {
   res.end(other)
})


app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});



//_____________________________________________________________________________________________________________________________


//this is the pure node method to create custom backend without using any express so here if we want to incluce out css file then we have to incluce the css in the html page.......

// here we are basically doing routing of html pages ...


// const server = http.createServer((req, res) => {

//    url = req.url;

//    res.statusCode = 200;
//    res.setHeader('Content-Type', 'text/html');
//    if (url == '/' || url == '') {
//       res.end(home);
//    }
//    else if (url == '/about') {
//       res.end(about);
//    }
//    else if (url == '/product') {
//       res.end(product);
//    }
//    else if (url == '/contact') {
//       res.end(contact);
//    }
//    else if (url == '/gallery') {
//       res.end(gallery);
//    }
//    else {
//       res.statusCode = 404;
//       // res.end("<h1>404 not found</h1>");
//       res.end(other);
//    }
// });

// server.listen(port, hostname, () => {
//    console.log(`Server running at http://${hostname}:${port}/`);
// });