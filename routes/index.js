var express = require('express');
var router = express.Router();

const BOOKS = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get("/create" , (req,res)=>{
  res.render("entry");
});


router.post("/create" , (req,res)=>{
  BOOKS.push(req.body);
  res.redirect("/readall")
});


router.get("/readall" , (req,res)=>{
  res.render("library", { books : BOOKS} );
}); 


router.get("/delete/:index" , (req,res)=>{
  BOOKS.splice(req.params.index,1);
  res.redirect("/readall");
}); 




router.get("/about" , (req,res)=>{
  res.render("aboutus");
});


module.exports = router;
