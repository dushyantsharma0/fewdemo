const userSchma=require('../models/user');
const PostSchma=require('../models/postes');
const commentSchma=require('../models/comments');
const likesSchma=require('../models/likes');

const getAllProducts=async(req,resp)=>{



   const data = await PostSchma.find().populate([
    {
      path: 'author',
      select: 'name', // Selecting the 'name' field in the 'author' path
    },
    {
      path: 'comment',
      populate:{
        path: 'sender',
     
      }
    },   { path: "like",
    populate:{
     path: 'users'
    }
 }
  ]);
resp.status(200).json(data)
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