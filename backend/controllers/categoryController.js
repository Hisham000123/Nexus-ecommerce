import Category from "../models/categoryModel.js";

import asyncHandler from "../middlewears/asyncHandler.js";


const createCategory = asyncHandler (async(req,res)=>{
    try{
  
  const {name } = req.body
  if(!name   ){
    return res.json({error: "Name is required"})
  }
  const existingCategory = await Category.findOne({name})

 if(existingCategory){
    return res.json({error: "Already exists"});
 }

 const category = await new Category({name}).save()
 res.json(category)

    }catch(error) {
        console.log(error)
    return res.status(400).json(error )
    }
    
})

const categoryUpdate = asyncHandler(async(req,res)=>{
try{

    const {name} = req.body;
    const {categoryId}= req.params


    const category = await Category.findOne({_id : categoryId})

    if(!category){
        return res.status(404).json({error: "category not found"})
    }

    category.name = name

    const updatedCategory = await category.save()
    res.json(updatedCategory)

}catch(error){

    console.error(error)
    res.status(500).json({error:"internal server error"})
}

})



const removeCategory= asyncHandler(async(req,res)=>{
 try{
    const remove = await Category.findByIdAndDelete(req.params.categoryId)
    res.json({message: "category deleted"})

 }catch(error){
    res.status(500).json({ error:" internal server issues"})
 }

})

const getAllCategory = asyncHandler(async(req,res)=>{
    try{

        const getall = await Category.find({})
        res.json(getall)

    }catch(error){
        console.error(error)
        res.status(500).json({error:"server issues"})

    }
})


const readCategory = asyncHandler(async(req,res)=>{
    try{
        const readcategory = await Category.findOne({_id :req.params.id})
        res.json(readcategory)
    }catch(error) {
        console.error(error)
        res.status(400).json(error.message)
        
    }
})



 export {createCategory,categoryUpdate,removeCategory,getAllCategory,readCategory}