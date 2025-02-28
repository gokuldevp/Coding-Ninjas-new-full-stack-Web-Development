// Export the ProductModel class as the default export
export default class ProductModel {
    // Constructor method to initialize the properties of the ProductModel instance
    constructor(_id, _name, _desc, _price, _imageUrl) {
        this.id = _id;              // Assign the _id parameter to the id property
        this.name = _name;          // Assign the _name parameter to the name property
        this.desc = _desc;          // Assign the _desc parameter to the desc property
        this.price = _price;        // Assign the _price parameter to the price property
        this.imageUrl = _imageUrl;  // Assign the _imageUrl parameter to the imageUrl property
    }

    // Static method to return the list of products
    static get() {
        return products; // Return the products array
    }

    // Static method to add a new product to the collection
    static add(productObj) {
        // Create new product with auto-incremented ID
        let newProduct = new ProductModel(
            products.length + 1,    // Generate new ID based on current array length
            productObj.name,        // Product name from input
            productObj.desc,        // Product description from input
            productObj.price,       // Product price from input
            productObj.imageURL     // Product image URL from input
        );
        products.push(newProduct); // Add new product to the array
    }
}

// Define the products array with instances of the ProductModel class
var products = [
    new ProductModel(
        1,                              // ID of the first product
        'Product 1',                    // Name of the first product
        'Description for Product 1',    // Description of the first product
        19.99,                          // Price of the first product
        'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'  // Image URL of the first product
    ),
    new ProductModel(
        2,                              // ID of the second product
        'Product 2',                    // Name of the second product
        'Description for Product 2',    // Description of the second product
        29.99,                          // Price of the second product
        'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg'  // Image URL of the second product
    ),
    new ProductModel(
        3,                              // ID of the third product
        'Product 3',                    // Name of the third product
        'Description for Product 3',    // Description of the third product
        39.99,                          // Price of the third product
        'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg'  // Image URL of the third product
    ),
];
