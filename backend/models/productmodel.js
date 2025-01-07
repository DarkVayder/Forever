import mongoose from "mongoose";

// Connect to MongoDB
const productSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},
    image: {type:Array, required:true},
    category: {type:String, required:true},
    subCategory: {type:String, required:true},
    sizes: {type:Array, required:true},
    date: {type:Date, default: Date.now},
    rating: {type:Number, default: 0},
    bestseller: {type:Boolean, default:false},
    stock: {type:Number, required:true, default:0},
})

const productModel = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel;