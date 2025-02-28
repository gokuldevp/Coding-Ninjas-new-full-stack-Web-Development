// Importing the ProductModel for database operations
import ProductModel from '../models/product.model.js';

/**
 * Controller class for handling product-related operations.
 */
export default class ProductController {
    
    /**
     * Handles GET request for the product listing page.
     * Retrieves all products and renders the 'products' view.
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     */
    getProduct(req, res) {
        // Fetch all products from the model
        const products = ProductModel.get();
        
        // Render 'products' view with retrieved product data
        return res.render('products', { products });
    }

    /**
     * Handles GET request to display the "Add New Product" form.
     * Renders the 'new-product' view with an initial null error message.
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     */
    getAddProduct(req, res) {
        // Render 'new-product' form view with no initial error message
        return res.render('new-product', { error: null });
    }

    /**
     * Handles POST request to add a new product.
     * Extracts and trims user input, then adds the product to the database.
     * Redirects to the home page upon successful submission.
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     */
    postNewProduct(req, res) {
        // Extract and sanitize user input from request body
        const { name, desc, price, imageURL } = req.body;

        const productDetails = {
            name: name?.trim(),
            desc: desc?.trim(),
            price: price?.toString().trim(),
            imageURL: imageURL?.trim()
        };
    
        // Add new product to the model
        ProductModel.add(productDetails);

        // Redirect to home page after successful submission
        return res.redirect('/');
    }
}
