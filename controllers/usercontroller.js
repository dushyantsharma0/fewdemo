
const modleSchma=require('../models/user')
const PostSchema=require('../models/postes')
const commentsSchema=require('../models/comments')
const LikeSchema=require('../models/likes')
const usercontroller=async(req,res)=>{
  const data = await PostSchema.find().populate([
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
  
  res.status(200).json(data)
}

module.exports={usercontroller};