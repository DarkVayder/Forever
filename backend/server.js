import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'

const app = express()
const port = process.env.PORT || 5000
connectDB()

//Middle ware
app.use(express.json())
app.use(cors())

// Mock API for products

app.get('/',(req, res) => {
    res.send('API is working!!')
})

app.listen(port, () => console.log("server started on PORT : '+ port"))