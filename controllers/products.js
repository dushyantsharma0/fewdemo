const product=require("../models/products")

const getAllProducts=async(req,resp)=>{
    let products= await product.find()
resp.status(200).json(products)
};
const getAllProductsTesting=async(req,resp)=>{
    resp.status(200).json({msg:"i am get all getAllProductsTesting"})
    };



const PostProduct=async(req,resp)=>{
    resp.status(200).json({msg:"save all data"})
}
const DleatProduct=async(req,resp)=>{
    resp.status(200).json({msg:"dleat data"})
}
const UpdateProduct=async (req,resp)=>{
    resp.status(200).json({msg:"update successfull"})
}


module.exports={getAllProducts,getAllProductsTesting,PostProduct,DleatProduct,UpdateProduct};