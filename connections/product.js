const studenddetail=require('../models/product')


const appProduct=async(req,resp)=>{

    const {name,father,mother,phone,sort,select,studentclass}=req.query
    const queryObject={}
    if(father){
        queryObject.father={$regex:father,$options:"i"};
     }
     if(name){
       queryObject.name={$regex:name,$options:"i"};
     }
     if(mother){
        queryObject.mother={$regex:mother,$options:"i"};s
      } if(phone){
        queryObject.phone={$regex:phone,$options:"i"};
      } if(studentclass){
        queryObject.studentclass={$regex:studentclass,$options:"i"};
      }

      let Apidata=  studenddetail.find(queryObject)
      if(sort){
        let shortFix=sort.split(",").join(" ");
        Apidata= Apidata.sort(shortFix)
        // console.log(shortFix)
        }
        if(select){
            let selectFix=select.split(",").join(" ");
            Apidata=Apidata.select(selectFix)
        }
    


    //    if adding pagination 
    // page set karna ka lea  / //////
//     let page=Number(req.query.page) || 1;
// let limit=Number(req.query.limit) || 3;
// let skip=(page-1)*limit;
// Apidata=Apidata.skip(skip).limit(limit)



// console.log(Apidata)
    let data= await Apidata
    resp.status(200).json(data)
}



module.exports=appProduct