import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        // Process images
        const images = ["image1", "image2", "image3", "image4"]
            .map((key) => req.files[key] && req.files[key][0])
            .filter((item) => item !== undefined);

        const imagesUrl = await Promise.all(
            images.map(async (item) => {
                const result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
                return result.secure_url;
            })
        );

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true",
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now(),
        };

        const product = new productModel(productData);
        await product.save();

        res.json({ success: true, message: "Product added successfully.", product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error!" });
    }
};

const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error!" });
    }
};

const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;

        const product = await productModel.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found!" });
        }

        res.json({ success: true, message: "Product deleted successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error!" });
    }
};

const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;

        const product = await productModel.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found!" });
        }

        res.json({ success: true, product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error!" });
    }
};

export { listProducts, removeProduct, singleProduct, addProduct };
