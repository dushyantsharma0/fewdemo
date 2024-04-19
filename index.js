require('dotenv').config()
const mongoose= require('mongoose')
mongoose.connect(process.env.MONGODB_URl)
const express = require('express')
const cors=require('cors')
const modleSchma=require('./models/user')
const PostSchema=require('./models/postes')
const commentsSchema=require('./models/comments')
const LikeSchema=require('./models/likes')

const app = express()
app.use(cors())
app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.get('/', function(req, res){
    res.send('Hello World');
   })

   app.get('/user', async function(req, res){
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
  app.get('/user2', async function(req, res){
    const data = await PostSchema.find()
    res.send(data);
  });


app.listen(3001,()=>{
    console.log('Server is running on port 3001')
})