require("dotenv").config();

const express =require('express')
const cors=require('cors')
const app=express()
const port =process.env.PORT ||5000
const routers=require('./routers/product')
const studentDetail=require('./models/product')
const connectionDb=require('./db/product')
 app.use(cors())
app.get('/',(req,resp)=>{
    resp.send('hello i am live')
})

const user=require('./alldetael/student.json')
//{name:"akita",father:"sanjay",mother:"anjli",phone:4564564}
app.use(express.json())
app.post('/', async(req,resp)=>{
    let data=  new studentDetail(req.body)
   let result = await data.save()
    console.log(result)
    resp.send(result)
   
})
app.delete('/:_id',async(req,resp)=>{
    let data=  await studentDetail.deleteOne(req.params)
    console.log(data)
    resp.send(data)
})

app.put('/:_id',async(req,resp)=>{
    let data= await studentDetail.updateOne(req.params,{$set:req.body})
    console.log(data)
    resp.send(data)

})


app.use("/product",routers)

const start=async()=>{
    try{
        await connectionDb(process.env.MONGODB_URl)
        // all data add in one click 

        // await studentDetail.create(user)


        // all data dleat in one click
    
        // await studentDetail.deleteMany()
        app .listen(port,()=>{
            console.log(`app start on ${port}`)
        })
    }catch(error){
        console.log(error)
    }
}
start()
