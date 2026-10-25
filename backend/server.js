import path from 'path'
import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import userRoutes from './routes/userRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'

import connectDB from './config/db.js'


dotenv.config()

const port = process.env.PORT || 5000

connectDB()

const app = express()
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cookieParser())

app.use('/api/users' , userRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/product', productRoutes)

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
