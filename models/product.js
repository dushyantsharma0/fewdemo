const mongoose=require('mongoose')

const productSchm=mongoose.Schema({
    name:{
        type:String,
        required:true
    },father:{
        type:String,
        required:true
    },mother:{
        type:String,
        required:true
    },phone:{
        type:Number,
        required:true
    },studentclass:{
        type:String,
        required:true,
        enum:{
            values:["x","x+1","x+2"],
            message:'${values} is not supported'
           }
    },
    
    createdAt:{
        type:Date,
        default:Date.now
    }

})
 
 module.exports=mongoose.model("student",productSchm)