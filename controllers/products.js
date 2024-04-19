const product=require("../models/products")

const getAllProducts=async(req,resp)=>{
    const {company,name,sort,select}=req.query;
    
const queryObject={}
if(company){
    queryObject.company=company
    
}if(name){
    queryObject.name={$regex: name,$options:"i"}
}


let apiData=product.find(queryObject)


if(sort){
let shortFix=sort.split(",").join(" ");
apiData=apiData.sort(shortFix)
}
if(select){
    let selectFix=select.split(",").join(" ");
    apiData=apiData.select(selectFix)
}

// let page=Number(req.query.page) || 1;
// let limit=Number(req.query.limit) || 3;
// let skip=(page-1)*limit;

apiData=apiData//.skip(skip).limit(limit)


    const products=await apiData//.sort(sort)
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