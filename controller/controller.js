var router = require("express").Router()
var db = require("../models")
var books=[ { name:"javascript", author:"x", comment:"great book"}]

router.get("/", function(req,res){
 //   res.sendFile(path.join(__dirname, "./public/index.html"))
 res.render("index")
})

router.get("/index", function(req,res){
    //   res.sendFile(path.join(__dirname, "./public/index.html"))
    res.render("index")
   })
   

router.get("/save", function(req,res){
    //   res.sendFile(path.join(__dirname, "./public/index.html"))
    db.Book.findAll({}).then(function(data){
     console.log(data)

    })
    res.render("save",{books:books})
})


router.post("/api/books",function(req,res){

    console.log(req.body)
    var newbook = { name:req.body.name,author: req.body.author,comment: req.body.comment}
    books.push(newbook)

db.Book.create(newbook).then(function(book){
    res.json(book)
})


  //  res.json(books)

})
// router.get("/api/books",function(req,res){
// res.json(books)

// })


module.exports = router;