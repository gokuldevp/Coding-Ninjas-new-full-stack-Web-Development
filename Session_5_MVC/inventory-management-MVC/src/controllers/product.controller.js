import path from 'path'; // Importing the path module for file path operations
import ProductModel from '../models/product.model.js'; // Importing the model in product controller

// Defining the ProductController class
export default class ProductController {
    // Method to handle GET requests for product data
    getProduct(req, res) {
        let products = ProductModel.get() // getting prodduct details
        // Sending the products.html file as a response
        return res.sendFile(path.resolve("src", 'views', "products.html"));
    }
}
