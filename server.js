var express = require("express")
var  path = require("path")
var bodyParser = require("body-parser")
var app = express()
var db = require("./models")

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extend: true}))
app.use (bodyParser.json())

var PORT = process.env.PORT || 3003;

app.use(express.static(__dirname + '/public'));



app.use(require("./controller/controller.js"))

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/api/books",function(req,res){
res.json(books)

})




db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
})