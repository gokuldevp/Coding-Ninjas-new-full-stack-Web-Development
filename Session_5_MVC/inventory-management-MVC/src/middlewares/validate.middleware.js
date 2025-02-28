/**
 * Middleware to validate product request data before submission.
 * Ensures input fields meet required constraints and formats.
 */
export const validateProductRequest = (req, res, next) => {
    const { name, desc, price, imageURL } = req.body;
    let errors = [];

    // Trim input values to remove unnecessary spaces
    const trimmedName = name?.trim();
    const trimmedDesc = desc?.trim();
    const trimmedPrice = price?.toString().trim();
    const trimmedImageURL = imageURL?.trim();

    // === Product Name Validation ===
    if (!trimmedName) {
        errors.push("Product name is required.");
    } else {
        // Ensure name length is between 3 and 100 characters
        if (trimmedName.length < 3 || trimmedName.length > 100) {
            errors.push("Product name must be between 3 and 100 characters.");
        }
        // Restrict name to letters, numbers, and spaces only
        if (!/^[a-zA-Z0-9\s]+$/.test(trimmedName)) {
            errors.push("Product name can only contain letters, numbers, and spaces.");
        }
        // Prevent consecutive spaces
        if (/\s{2,}/.test(trimmedName)) {
            errors.push("Product name cannot have consecutive spaces.");
        }
        // Disallow numeric-only product names
        if (/^\d+$/.test(trimmedName)) {
            errors.push("Product name cannot be only numbers.");
        }
        // Restrict specific banned words in product names
        const bannedWords = ["spam", "fake", "test"];
        if (bannedWords.some(word => trimmedName.toLowerCase().includes(word))) {
            errors.push("Product name contains inappropriate words.");
        }
    }

    // === Product Description Validation ===
    if (!trimmedDesc) {
        errors.push("Product description is required.");
    } else if (trimmedDesc.length < 10 || trimmedDesc.length > 500) {
        errors.push("Product description must be between 10 and 500 characters.");
    }

    // === Product Price Validation ===
    if (!trimmedPrice) {
        errors.push("Product price is required.");
    } else {
        // Ensure price is a valid number with up to two decimal places
        if (!/^\d+(\.\d{1,2})?$/.test(trimmedPrice) || parseFloat(trimmedPrice) <= 0) {
            errors.push("Product price must be a positive number with up to two decimal places.");
        }
    }

    // === Product Image URL Validation ===
    if (!trimmedImageURL) {
        errors.push("Product image URL is required.");
    } else {
        // Ensure image URL follows a proper format (must start with http/https)
        if (!/^https?:\/\/[^\s]+$/.test(trimmedImageURL)) {
            errors.push("Invalid image URL format.");
        }
    }

    // === Handling Validation Errors ===
    if (errors.length > 0) {
        return res.status(400).render('new-product', { error: errors[0] }); // Show the first error message
    }

    // Proceed to the next middleware or route handler if validation passes
    next();
};
