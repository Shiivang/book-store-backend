var express = require('express');
var router = express.Router();

const upload = require("../utils/multer").single("image")

// const BOOKS = [{
//   name : "shivang"

// }];

const Books = require("../Models/Booksmodels");
// const Books = require('../Models/Booksmodels');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get("/create" , (req,res)=>{
  res.render("entry");
});


router.post("/create", upload ,async function(req,res){
  try {
    // res.json ({body : req.body , file : req.file});
    const newbook = new Books({...req.body , image : req.file.filename});
    await newbook.save();
    res.redirect("/readall");
  } catch (error) {
    res.send(error);
  }

  // BOOKS.push(req.body);
  // res.redirect("/readall")
  // Books.create(req.body).then(() =>{
  //   res.redirect("/readall");
  // }).catch((err) => res.send(err) );
  // Books.create(req.body)
  //       .then(() => {
  //           res.redirect("/readall");
  //       })
  //       .catch((err) => res.send(err));
});


router.get("/readall" , async (req,res)=>{
  try {
    const books = await Books.find();
    res.render("library", { books: books });
  } catch (error) {
    res.send(error);
  }

  // Books.find()
  // .then((books) => {
  //     res.render("library", { books: books });
  // })
  // .catch((err) => res.send(err));

  // Books.find().then((books) => {
  //   res.render("library", { books : books} );
  // }).catch((err) => res.send(err));
  // res.render("library", { books : BOOKS} );
}); 


router.get("/delete/:id" , async (req,res)=>{

  try {
    await Books.findByIdAndDelete(req.params.id)
    res.redirect("/readall");
    
  } catch (error) {
    res.send(error)
  }


  // BOOKS.splice(req.params.index,1);
  // res.redirect("/readall");

}); 


router.get("/update/:id" , async (req,res)=>{
  try {
    const book = await Books.findById(req.params.id);
    res.render("update" , { book : book })
    
  } catch (error) {
    res.send(error)
  }
  // BOOKS.push(req.params.index,1);
  // const data =  BOOKS.splice(req.params.index,1)
  // const i = req.params.index ;

  // const b = BOOKS[i];
  // res.render("update" , { book : b , index : i});
}); 



router.post("/update/:id" , async (req,res)=>{
  try {
    await Books.findByIdAndUpdate(req.params.id , req.body);
    res.redirect("/readall");
    
  } catch (error) {
    res.send(error)
  }
  // BOOKS.push(req.params.index,1);
  // const data =  BOOKS.splice(req.params.index,1)
  // const i = req.params.index ;

  // BOOKS[i] = req.body; 
  // res.redirect("/readall");
}); 



router.get("/about" , (req,res)=>{
  res.render("aboutus");
});


module.exports = router;  