require("dotenv").config();
const express= require("express")
const app=express()
const port=process.env.PORT|| 5000;
const connectDB=require("./db/connect")
const product_roots=require("./routes/products")
const product=require("./models/products")
const cors=require('cors');
const products = require("./models/products");

app.get("/",(req ,resp)=>{
    resp.send("this is home page")
})
app.use(cors());
app.use(express.json())
app.post("/",async(req,resp)=>{
    let data= new product(req.body)
    let result= await data.save()
    console.log(result)
    resp.send("done")
})
app.delete("/:_id",async(req,resp)=>{
    let data= await product.deleteOnedeleteOne(req.params)
    console.log(data)
    resp.send(data)
})
app.put("/update/:_id",async(req,resp)=>{
    let data=await product.updateOne(req.params,{$set:req.body})
     console.log(data)
     resp.send(data)
    

})
app.use("/update/:_id",product_roots)
app.use("/api/products",product_roots)
const start =async ()=>{
    try{
        await connectDB(process.env.MONGODB_URl)
app.listen(port,()=>{
        console.log(`${port} yes i am connected`)
})
    }catch(error){
        console.log(error)
    }
};

start();