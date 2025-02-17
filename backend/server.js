import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

const app = express()
const port = process.env.PORT || 5000
connectDB()
connectCloudinary()

//Middle ware
app.use(express.json())
app.use(cors())

// Mock API for endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

app.get('/',(req, res) => {
    res.send('API is working!!')
})

app.listen(port, () => console.log("server started on PORT : '+ port"))