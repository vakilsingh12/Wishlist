const express=require('express');
const { static } = require('express');
var bodyParser = require('body-parser')
const app=express();
const port=5000
app.use(express.static('public'))  //it's called middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
require('./Route')(app);

app.set('view engine','ejs');
app.listen(port,()=>{
  console.log("server is runnning....");
})