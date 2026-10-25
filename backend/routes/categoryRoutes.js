import express from "express";
const router = express.Router()
import {createCategory,categoryUpdate,removeCategory,getAllCategory,readCategory} from "../controllers/categoryController.js"



import { authenticate,authorizeAdmin } from "../middlewears/authMiddleware.js";

router.post("/" , authenticate,authorizeAdmin,createCategory)
router.put("/:categoryId",authenticate, authorizeAdmin, categoryUpdate)
router.delete("/:categoryId",authenticate,authorizeAdmin, removeCategory)
router.get("/categories",authenticate,authorizeAdmin, getAllCategory)
router.get("/:id", authenticate, authorizeAdmin, readCategory)

export default router
