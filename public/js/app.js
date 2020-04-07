$(document).ready(function(){


    $("#bookbtn").on("click",function(){

var name = $("#bname").val().trim();
var author = $("#aname").val().trim()
var comment = $("#comment").val().trim()

var data ={
    name:name,
    author:author,
    comment:comment
}

axios.post("/api/books",data).then(function(response){

console.log(response)
location.reload();

})

    })


})