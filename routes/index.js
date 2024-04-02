var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get("/create" , (req,res)=>{
  res.render("entry");
});


router.get("/readall" , (req,res)=>{
  res.render("library");
});


router.get("/about" , (req,res)=>{
  res.render("aboutus");
});


module.exports = router;
