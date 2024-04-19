const express=require('express');
const modleSchma=require('../models/user')
const PostSchema=require('../models/postes')
const commentsSchema=require('../models/comments')
const LikeSchema=require('../models/likes')
const router=express();

router.get('/', function(req, res){
 res.send('Hello World');
})

router.get('/user', async function(req, res){
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
    res.send(data);
  });
  router.get('/user2', async function(req, res){
    const data = await PostSchema.find()
    res.send(data);
  });

module.exports=router