module.exports=(app)=>{
  // var data={
  //   name:"Vakil",
  //   status:"Programmer"
  // }

// var data=['code','sleep'];
const mongoose=require('mongoose');
const {mongourl}=require('./config/keys');
mongoose.connect(mongourl,{useNewUrlParser: true});
const Wish=require('./models/wish');
app.get('/',(req,res)=>{
  Wish.find({}).then(data=>{
    console.log(data)
    res.render('home',{data:data})
  })
  
})
app.get('/about',(req,res)=>{
  res.render('about');
})
app.post('/sent',(req,res)=>{
  const Item=new Wish({
    wish:req.body.item
  });
  Item.save().then(data=>{
    console.log("saved");
    res.send(data);
  })
  //  console.log(req.body.item)
  //  data.push(req.body.item)
  //  res.send(data)
})
// app.get('/profile/:id',(req,res)=>{
//   data={
//      name:req.params.id
//   }
//   res.render('home',{data:data})
// })
app.delete('/remove/:id',(req,res)=>{
  Wish.findOneAndDelete({wish:req.params.id}).then(data=>{
    console.log("deleted");
    res.send(data);
  })
  // data=data.map(item=>{
  //   if(item!=req.params.id)
  //   {
  //     return item
  //   }
  // })
  //  console.log("deleted",req.params.id)
   
})
}