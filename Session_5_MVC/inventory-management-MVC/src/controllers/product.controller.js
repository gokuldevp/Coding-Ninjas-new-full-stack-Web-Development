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
        return res.render('new-product', { error: null });
    }

    // Handle POST request for new product submission
    postNewProduct(req, res) {
        const { name, desc, price, imageURL } = req.body;
        let errors = [];
    
        // Trim input values
        const trimmedName = name?.trim();
        const trimmedDesc = desc?.trim();
        const trimmedPrice = price?.toString().trim();
        const trimmedImageURL = imageURL?.trim();
    
        // Name Validation
        if (!trimmedName) {
            errors.push("Product name is required.");
        } else {
            if (trimmedName.length < 3 || trimmedName.length > 100) {
                errors.push("Product name must be between 3 and 100 characters.");
            }
            if (!/^[a-zA-Z0-9\s]+$/.test(trimmedName)) {
                errors.push("Product name can only contain letters, numbers, and spaces.");
            }
            if (/\s{2,}/.test(trimmedName)) {
                errors.push("Product name cannot have consecutive spaces.");
            }
            if (/^\d+$/.test(trimmedName)) {
                errors.push("Product name cannot be only numbers.");
            }
            const bannedWords = ["spam", "fake", "test"];
            if (bannedWords.some(word => trimmedName.toLowerCase().includes(word))) {
                errors.push("Product name contains inappropriate words.");
            }
        }
    
        // Description Validation
        if (!trimmedDesc) {
            errors.push("Product description is required.");
        } else if (trimmedDesc.length < 10 || trimmedDesc.length > 500) {
            errors.push("Product description must be between 10 and 500 characters.");
        }
    
        // Price Validation
        if (!trimmedPrice) {
            errors.push("Product price is required.");
        } else if (!/^\d+(\.\d{1,2})?$/.test(trimmedPrice) || parseFloat(trimmedPrice) <= 0) {
            errors.push("Product price must be a positive number with up to two decimal places.");
        }
    
        // Image URL Validation
        if (!trimmedImageURL) {
            errors.push("Product image URL is required.");
        } else if (!/^https?:\/\/[^\s]+$/.test(trimmedImageURL)) {
            errors.push("Invalid image URL format.");
        }
    
        // Send errors if any exist
        if (errors.length > 0) {
            return res.status(400).render('new-product', {error:errors[0]});;
        }

        ProductModel.add(req.body); // Add new product to the model using data from request body
        // Redirect to home page after submission
        return res.redirect('/');
    }

}