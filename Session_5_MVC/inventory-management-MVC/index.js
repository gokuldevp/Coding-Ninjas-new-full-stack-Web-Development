// Importing the express module to create a web server.
import express from 'express';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts'; // Middleware for EJS layouts

// Importing the ProductController class for handling product-related routes.
import ProductController from './src/controllers/product.controller.js';
import { validateProductRequest } from './src/middlewares/validate.middleware.js';

// Initializing the express application.
const server = express();

// Configure EJS as the template engine
server.set("view engine", "ejs");
// Set views directory path for EJS templates
server.set("views", path.resolve("src", "views"));
// Enable EJS layout middleware
server.use(expressEjsLayouts);

// Middleware to parse URL-encoded form data (for POST requests)
server.use(express.urlencoded({ extended: true }));

// Define server port (environment variable with fallback)
const port = 8000; // Can be changed to: process.env.PORT || 8000;

// Create controller instance for product-related operations
const productController = new ProductController();

// Configure routes
// Home route - displays all products
server.get("/", productController.getProduct);
// Route to display new product form
server.get("/new", productController.getAddProduct);
// Route to display update product form
server.get("/update", productController.getUpdateProductView);
// Route to handle form submission
server.post("/submit-product",validateProductRequest, productController.postNewProduct);

// Serve static files (CSS, images, JS) from views directory
server.use(express.static('src/views'));

// Start server and listen on specified port
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});