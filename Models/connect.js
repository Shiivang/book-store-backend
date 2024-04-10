const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/booksstoredb").then(() => console.log("data base connection established")).catch((err) => console.log(err.message));