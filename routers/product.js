const express=require('express')
const router=express.Router()
const appProduct=require('../connections/product')

router.route('/').get(appProduct)

module.exports=router

