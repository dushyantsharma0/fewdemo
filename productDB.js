require("dotenv").config();
const connectDB=require("./db/connect");
const product=require("./models/products")
const productJson=require("./product.json")
    const start =async()=>{
        try{
await connectDB(process.env.MONGODB_URl);
await product.create(productJson)
console.log("success")
        }catch(error){
            console.log(error)
        }
    }
    start()