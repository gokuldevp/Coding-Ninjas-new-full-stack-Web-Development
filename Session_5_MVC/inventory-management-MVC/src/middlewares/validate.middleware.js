import { body, validationResult } from "express-validator";

/**
 * Middleware to validate product request data before submission.
 * Ensures input fields meet required constraints and formats.
 */
export const validateProductRequest = async (req, res, next) => {
    // const { name, desc, price, imageURL } = req.body;
    // let errors = [];

    // // Trim input values to remove unnecessary spaces
    // const trimmedName = name?.trim();
    // const trimmedDesc = desc?.trim();
    // const trimmedPrice = price?.toString().trim();
    // const trimmedImageURL = imageURL?.trim();

    // // === Product Name Validation ===
    // if (!trimmedName) {
    //     errors.push("Product name is required.");
    // } else {
    //     // Ensure name length is between 3 and 100 characters
    //     if (trimmedName.length < 3 || trimmedName.length > 100) {
    //         errors.push("Product name must be between 3 and 100 characters.");
    //     }
    //     // Restrict name to letters, numbers, and spaces only
    //     if (!/^[a-zA-Z0-9\s]+$/.test(trimmedName)) {
    //         errors.push("Product name can only contain letters, numbers, and spaces.");
    //     }
    //     // Prevent consecutive spaces
    //     if (/\s{2,}/.test(trimmedName)) {
    //         errors.push("Product name cannot have consecutive spaces.");
    //     }
    //     // Disallow numeric-only product names
    //     if (/^\d+$/.test(trimmedName)) {
    //         errors.push("Product name cannot be only numbers.");
    //     }
    //     // Restrict specific banned words in product names
    //     const bannedWords = ["spam", "fake", "test"];
    //     if (bannedWords.some(word => trimmedName.toLowerCase().includes(word))) {
    //         errors.push("Product name contains inappropriate words.");
    //     }
    // }

    // // === Product Description Validation ===
    // if (!trimmedDesc) {
    //     errors.push("Product description is required.");
    // } else if (trimmedDesc.length < 10 || trimmedDesc.length > 500) {
    //     errors.push("Product description must be between 10 and 500 characters.");
    // }

    // // === Product Price Validation ===
    // if (!trimmedPrice) {
    //     errors.push("Product price is required.");
    // } else {
    //     // Ensure price is a valid number with up to two decimal places
    //     if (!/^\d+(\.\d{1,2})?$/.test(trimmedPrice) || parseFloat(trimmedPrice) <= 0) {
    //         errors.push("Product price must be a positive number with up to two decimal places.");
    //     }
    // }

    // // === Product Image URL Validation ===
    // if (!trimmedImageURL) {
    //     errors.push("Product image URL is required.");
    // } else {
    //     // Ensure image URL follows a proper format (must start with http/https)
    //     if (!/^https?:\/\/[^\s]+$/.test(trimmedImageURL)) {
    //         errors.push("Invalid image URL format.");
    //     }
    // }

    // // === Handling Validation Errors ===
    // if (errors.length > 0) {
    //     return res.status(400).render('new-product', { error: errors[0] }); // Show the first error message
    // }

    // 1. Define validation rules for each field
    const rules = [
        // Validate 'name' field
        body('name')
            .trim()
            .notEmpty().withMessage("Name Field is Required") // Ensure name is not empty
            .matches(/^[a-zA-Z\s'-]+$/).withMessage("Name shouldn't contain numbers or special characters"), // Allow only alphabets, spaces, hyphens, and apostrophes

        // Validate 'price' field
        body('price')
            .trim()
            .notEmpty().withMessage('Price Field should not be empty') // Ensure price is provided
            .matches(/^\d+(\.\d{1,2})?$/).withMessage('Price should be a positive number with up to two decimal places'), // Ensure price is a valid decimal number

        // Validate 'desc' (description) field
        body('desc')
            .trim()
            .notEmpty().withMessage('Description Field should not be empty') // Ensure description is provided
            .isLength({ min: 10, max: 500 }).withMessage('Description must be between 10 and 500 characters'), // Enforce character length limits

        // Validate 'imageURL' field
        body('imageURL')
            .trim()
            .notEmpty().withMessage('Image Url Field should not be empty') // Ensure image URL is provided
            .isURL().withMessage('Invalid URL') // Validate URL format
            .matches(/\.(jpeg|jpg|png)$/i).withMessage('Image URL must be a valid JPG or PNG') // Ensure image is in JPG or PNG format
    ];

    // 2. Run all validation rules
    await Promise.all(rules.map((rule) => rule.run(req)));

    // 3. Check if validation resulted in errors
    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.status(400).render('new-product', { error: validationErrors.array()[0].msg }); // Return first validation error
    }

    // 4. Proceed to the next middleware or route handler if validation passes
    next();
};
