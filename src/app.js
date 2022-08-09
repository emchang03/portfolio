// require all modules 
const express = require("express"); 
const ejs = require("ejs"); 

// use express
const app = express();

// prep ejs + allow it to read static files
app.set("view engine", "ejs");
app.use(express.static("public"));

// allow our all to parse. 
app.use(express.urlencoded({extended:true}));

// GET routes
app.get("/", function(req, res){
    res.render("home");
}); 

app.get("/about", function(req, res){
    res.render("about");
}); 

app.get("/clubnext", function(req,res){
    res.render("clubnext");
});

// set up the server 
app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  
