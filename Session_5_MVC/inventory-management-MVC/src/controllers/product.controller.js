import path from 'path'; // Importing the path module for file path operations

// Defining the ProductController class
export default class ProductController {
    // Method to handle GET requests for product data
    getProduct(req, res) {
        // Sending the products.html file as a response
        return res.sendFile(path.resolve("src", 'views', "products.html"));
    }
}
