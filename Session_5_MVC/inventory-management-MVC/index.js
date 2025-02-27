// Importing the express module to create a web server.
import express from 'express';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';

// Importing the ProductController class for handling product-related routes.
import ProductController from './src/controllers/product.controller.js';

// Initializing the express application.
const server = express();

// Setting 'ejs' as the view engine for rendering HTML templates.
server.set("view engine", "ejs");

// Setting the directory for the views (templates) to the 'src/views' folder.
server.set("views", path.resolve("src", "views"));
server.use(expressEjsLayouts);

// Defining the port number. It uses an environment variable if available, otherwise defaults to 8000.
const port = 8000 //||  process.env.PORT; // Use the process.env.PORT if available, otherwise default to 8000.

// Creating an instance of the ProductController.
const productController = new ProductController();

// Defining the route for the root URL ("/") and linking it to the getProduct method of ProductController.
server.get("/", productController.getProduct);

// Setting up the static file server to serve files from the 'src/views' directory (e.g., CSS, JS, images).
server.use(express.static('src/views'));

// Starting the server and logging a message to indicate it is running.
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
