    


import asyncHandler from "../middlewears/asyncHandler.js";
import Product from "../models/productModel.js";

const addProduct = asyncHandler(async (req, res) => {
    try {
        const { name, description, price, category, quantity, brand } = req.fields;

        switch (true) {
            case !name:
                return res.status(400).json({ error: "Name is required" });
            case !brand:
                return res.status(400).json({ error: "Brand is required" });
            case !description:
                return res.status(400).json({ error: "Description is required" });
            case !category:
                return res.status(400).json({ error: "Category is required" });
            case !quantity:
                return res.status(400).json({ error: "Quantity is required" });
            case !price:
                return res.status(400).json({ error: "Price is required" });
        }

        const product = await new Product({ ...req.fields }).save();
        res.json(product);

    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

const updateProductDetails = asyncHandler(async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { ...req.fields },
            { 
                new: true, 
                runValidators: true 
            }
        );

        if (!updateProduct) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.json(updateProduct);

    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
});

const removeProduct = asyncHandler(async(req,res)=>{
    try{
        const remove = await Product.findByIdAndDelete(req.params.id)
        res.json("product removed")
    }catch(error){
        console.error(error)
        res.status(400).json(error.message)
    }
})


const fetchProduct = asyncHandler(async(req,res)=>{

    try{

        const getallProduct = await Product.find({})
        res.json(getallProduct)

    }catch(error){
        
        console.error(error)
        res.status(500).json("server issues")
    }

})


export { addProduct, updateProductDetails ,removeProduct,fetchProduct};



