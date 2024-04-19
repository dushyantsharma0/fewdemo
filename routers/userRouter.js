const express=require('express');
const modleSchma=require('../models/user')
const PostSchema=require('../models/postes')
const commentsSchema=require('../models/comments')
const LikeSchema=require('../models/likes')
const connection =require('../controllers/usercontroller')
const router=express();

router.get('/', function(req, res){
 res.send('Hello World');
})

router.get('/user',connection.usercontroller )
  router.get('/user2', async function(req, res){
    const data = await PostSchema.find()
    res.send(data);
  });

module.exports=router