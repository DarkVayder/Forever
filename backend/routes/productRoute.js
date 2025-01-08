import express from "express";
import {listProducts, removeProduct, singleProduct, addProduct} from "../controllers/productController.js"

const productRouter = express.Router();

productRouter.get('/listProducts', listProducts);
productRouter.post('/add', addProduct);
productRouter.post('/remove', removeProduct);
productRouter.post('/single', singleProduct);

export default productRouter;