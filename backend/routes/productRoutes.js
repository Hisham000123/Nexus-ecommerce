import express from "express"
import formidable from 'express-formidable'
const router =  express.Router()

import { authenticate , authorizeAdmin } from "../middlewears/authMiddleware.js"

import checkId from "../middlewears/checkId.js" 

import {addProduct,updateProductDetails,removeProduct,fetchProduct}  from '../controllers/productController.js'

router.get("/" ,fetchProduct)
router.post("/", authenticate,authorizeAdmin,formidable(),addProduct)
router.put("/:id",authenticate,authorizeAdmin, formidable(),  updateProductDetails)
router.delete("/:id",authenticate,authorizeAdmin,removeProduct)

export default router