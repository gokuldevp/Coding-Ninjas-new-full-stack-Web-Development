// Importing the ProductModel for database operations
import ProductModel from '../models/product.model.js';
import * as fs from 'fs'
import * as path from 'path'

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
        const { name, desc, price} = req.body;
        const imageURL = 'images/' + req.file.filename;

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

    /**
     * Handles GET request to display the product update form.
     * Retrieves the product by ID and renders the 'update-product' view.
     * If the product is not found, responds with a 400 status and an error message.
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     */
    getUpdateProductView(req, res) {
        // Extract product ID from request parameters
        const { id } = req.params;
    
        // Fetch product details based on the provided ID
        const productFound = ProductModel.getProduct(id); 

        if (productFound) {
            // Render the 'update-product' view with the retrieved product details
            return res.render("update-product", { product: productFound, error: null }); 
        } else {
            // Send a 400 status response if the product is not found
            return res.status(400).send("Product not found");
        }
    }

    /**
     * Handles POST request to update an existing product.
     * Extracts and trims user input, then updates the product in the database.
     * Redirects to the home page upon successful update.
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     */
    postUpdateProduct(req, res) {
        // Extract and sanitize user input from request body
        const { id, name, desc, price } = req.body;
        let imageURL = null;
        
        if (req.file) {
            // Attempting to delete the existing product image
            const product = ProductModel.getProduct(id);

            if (product) {
                const fullPath = path.resolve('public', product.imageUrl);

                try {
                    if (fs.existsSync(fullPath)) {
                        fs.unlinkSync(fullPath); // Delete the file safely
                    }
                } catch (error) {
                    console.error(`Error deleting image: ${error.message}`);
                }
            }

            // Ensure filename exists before concatenating
            if (req.file.filename) {
                imageURL = 'images/' + req.file.filename;
            }
        }

        const productDetails = {
            id: id?.trim(),
            name: name?.trim(),
            desc: desc?.trim(),
            price: (price ?? '').toString().trim(), // Prevents TypeError if price is null
            imageURL: imageURL?.trim()
        };

        // Update the product in the model
        ProductModel.update(productDetails);

        // Redirect to home page after successful update
        return res.redirect('/');
    }

    /**
     * Handles DELETE request to remove a product.
     * Extracts the product ID from request parameters and attempts to delete the product using the model.
     * Redirects to the home page whether deletion is successful or not.
     * 
     * @param {Object} req - Express request object containing product ID in params.
     * @param {Object} res - Express response object used to redirect the user.
     */
    deleteProductDetails(req, res) {
        // Extract product ID from request parameters
        const { id } = req.params;

        // Attempting to delete the product image
        const product = ProductModel.getProduct(id);

        // Ensure product has an image before attempting deletion
        if (product) {

            const fullPath = path.resolve('public', product.imageUrl);
            if (fs.existsSync(fullPath)) {
                fs.unlinkSync(fullPath); // Delete the file
            }

            // Attempt to delete the product from the model
            const isDeleted = ProductModel.delete(id);
        }
        
        // Redirect to home page after deletion attempt
        return res.redirect('/');
    }
    
}
