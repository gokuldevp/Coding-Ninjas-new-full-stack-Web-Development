// Importing the ProductModel from the models directory
import ProductModel from '../models/product.model.js'; // Importing the model in product controller

// Defining the ProductController class
export default class ProductController {
    // Method to handle GET requests for product data
    getProduct(req, res) {
        // Retrieving product details using the get method of ProductModel
        let products = ProductModel.get() // Getting product details
        // Rendering the 'products' view (HTML template) and passing the products data to it
        return res.render('products', { products: products });

        // Sending the products.html file as a response
        // return res.sendFile(path.resolve("src", 'views', "products.html"));
    }
}
