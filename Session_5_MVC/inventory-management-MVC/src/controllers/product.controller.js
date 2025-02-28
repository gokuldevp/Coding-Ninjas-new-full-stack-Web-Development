// Importing the ProductModel for database operations
import ProductModel from '../models/product.model.js';

// Controller class for product-related operations
export default class ProductController {
    // Handle GET request for product listing page
    getProduct(req, res) {
        // Fetch all products from model
        let products = ProductModel.get();
        // Render products view with product data
        return res.render('products', { products });
    }

    // Handle GET request for new product form
    getAddProduct(req, res) {
        // Render new-product form view
        return res.render('new-product');
    }

    // Handle POST request for new product submission
    postNewProduct(req, res) {
        ProductModel.add(req.body); // Add new product to the model using data from request body
        // Redirect to home page after submission
        return res.redirect('/');
    }
}