const express = require('express');
const app = express();
app.use(express.json());
const port = 5000;
//Schemas
const userModel = require('./models/user');
const productModel = require('./models/product')
//For Database Connection
const mongoose = require('mongoose');
const productModal = require('./models/product');


mongoose
    .connect("mongodb://localhost:27017/crud")
    .then(() => console.log("mongodb connected"));

app.get('/api', (req, res) => res.send('Hello World!'));
    
//Get List(Display User)
app.get('/api/list', async(req,res) => {
const userList = await userModel.find({},{username: true});

if(userList === 0){
    return res.json({data:"not found any data"})
}
    return res.json({data: userList})
});
 
//Inser (Register user ) User
app.post('/api/register', async (req,res) => {
const newUser = req.body;
userModel.create(newUser);
return res.json({data:"successfully registred"})

});

//Loin user
app.post("/api/login", async (req,res) => {
  const uname = req.body.username;
  const pass = req.body.password;
  const user  = await userModel.findOne({username:uname,password:pass})

  if(user){
    return res.json({data:"Login Successfull",user:user})
  } else {
    return res.json({data:"Wrong Credentials"})
  }

});

//Update user
app.put('/api/updateUser', (req,res) => {


});

//Delete user
app.delete('/api/deleteUser', (req,res) => {


});


//Product

//addproduct
app.post("/api/addProduct", async(req,res) => {
    const newproduct = req.body;
    productModel.create(newproduct)
    return res.json({data:"Product Added Successfully"})

});

//getProduct detail

app.get('/api/productList', async(req,res) => {
  const productList = await productModal.find({});
  
  if(productList === 0){
      return res.json({data:"not found any data"})
  }
      return res.json({data: productList})
  });




//Delete product
app.post('/api/deleteProduct',async(req,res)=>{
  const pid = req.body.id;
  const deleteProduct = await productModal.findOneAndDelete({_id:pid});
  if(deleteProduct){
      return res.json({data: "Product deleted successfully"});
  } else {
    return res.json({data: "can't delete"});
  }
  });

  //Update Product
  app.put("/api/updateProduct/:id", async (req, res) => {
    const prod = req.body;
    const product = await productModal.findOneAndUpdate(
      {_id:req.params.id},
      {  
        pimg:prod.pimg,
        pname:prod.pname,
        pdesc:prod.pdesc,
        pprice:prod.pprice
      },
      {new:true}
    );
    return res.json({ data: "Product Updated successfully",p:product });
  });


app.listen(port, () => console.log(`Example app listening on port ${port}!`));