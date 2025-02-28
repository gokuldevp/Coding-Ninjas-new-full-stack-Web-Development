// Export the ProductModel class as the default export
export default class ProductModel {
    /**
     * Constructor method to initialize the properties of the ProductModel instance.
     * @param {number} _id - Unique identifier of the product.
     * @param {string} _name - Name of the product.
     * @param {string} _desc - Description of the product.
     * @param {number} _price - Price of the product.
     * @param {string} _imageUrl - Image URL of the product.
     */
    constructor(_id, _name, _desc, _price, _imageUrl) {
        this.id = _id;              // Assign the unique ID to the product
        this.name = _name;          // Assign the product name
        this.desc = _desc;          // Assign the product description
        this.price = _price;        // Assign the product price
        this.imageUrl = _imageUrl;  // Assign the product image URL
    }

    /**
     * Retrieves the list of all products.
     * @returns {Array} Array of product objects.
     */
    static get() {
        return products;
    }

    /**
     * Adds a new product to the collection.
     * Generates a new unique ID for the product before adding it to the list.
     * @param {Object} productObj - Object containing product details.
     */
    static add(productObj) {
        // Create a new product with an auto-incremented ID
        let newProduct = new ProductModel(
            products.length + 1,   // Generate a new ID based on the current array length
            productObj.name,       // Product name from input
            productObj.desc,       // Product description from input
            productObj.price,      // Product price from input
            productObj.imageURL    // Product image URL from input
        );
        products.push(newProduct); // Add the new product to the array
    }

    /**
     * Retrieves a product by its ID.
     * @param {number} id - The unique identifier of the product.
     * @returns {Object|null} The product object if found, otherwise null.
     */
    static getProduct(id) {
        return products.find((p) => p.id == id) || null;
    }

    /**
     * Updates an existing product in the collection.
     * Finds the product by ID and updates its details.
     * @param {Object} productObj - Object containing updated product details.
     */
    static update(productObj) {
        // Find the index of the product to be updated
        const pindex = products.findIndex(product => product.id == productObj.id);

        if (pindex !== -1) {
            // Create a new ProductModel instance with updated details
            let updatedProduct = new ProductModel(
                productObj.id,     // Keep the existing product ID
                productObj.name,   // Updated product name
                productObj.desc,   // Updated product description
                productObj.price,  // Updated product price
                productObj.imageURL // Updated product image URL
            );
            // Replace the old product with the updated product
            products[pindex] = updatedProduct;
        }
    }

    /**
     * Deletes a product from the collection.
     * This function removes a product from the `products` array based on the provided product ID.  
     * It filters out the product with the matching ID and then verifies if the deletion was successful  
     * by checking if `getProduct(productId)` returns `null` (indicating the product was removed).
     * 
     * @param {number|string} productId - The unique identifier of the product to be deleted.
     * @returns {boolean} - Returns `true` if the product was successfully deleted, otherwise `false`.
     */
    static delete(productId) {
        // Store the initial product count
        const initialLength = products.length;

        // Remove the product with the given ID
        products = products.filter(product => product.id != productId);

        // Check if the product was successfully removed
        return products.length < initialLength;
    }

}

// Define the initial products array with sample products
let products = [
    new ProductModel(
        1, 'Product 1', 'Description for Product 1', 19.99,
        'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
    ),
    new ProductModel(
        2, 'Product 2', 'Description for Product 2', 29.99,
        'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg'
    ),
    new ProductModel(
        3, 'Product 3', 'Description for Product 3', 39.99,
        'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg'
    ),
];
