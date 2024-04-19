const express = require("express")
    const router=express.Router()
const {getAllProducts,getAllProductsTesting,PostProduct,DleatProduct,UpdateProduct}=require("../controllers/products")



    router.route("/").get(getAllProducts);
    router.route("/user").get(getAllProductsTesting);
    router.route("/").post(PostProduct)
    router.route("/").delete(DleatProduct)
    router.route("/update").put(UpdateProduct)
module.exports =router;
 