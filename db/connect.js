const mongoose=require("mongoose")
const { options } = require("../routes/products")

const connectDB=(uri)=>{
    return mongoose.connect( uri );
}
module.exports=connectDB;  