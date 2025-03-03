// Import Multer for handling multipart/form-data (file uploads)
import multer from "multer";

// Configure custom storage for uploaded files
const storageConfig = multer.diskStorage({
    // Set destination directory for uploaded files
    destination: (req, file, cb) => {
        // Store files in 'public/images/' directory
        // Note: Ensure this directory exists in your project
        cb(null, 'public/images/');
    },
    
    // Define custom filename format to prevent duplicates
    filename: (req, file, cb) => {
        // Create unique filename using current timestamp + original name
        // Format: [timestamp]-[originalname] (e.g., 1629789164590-cat.jpg)
        const imgFileName = Date.now() + '-' + file.originalname.replace(/[^a-zA-Z0-9.]/g, '');
        
        // Pass final filename to Multer (null indicates no error)
        cb(null, imgFileName);
    }
});


export const upload = multer({ storage: storageConfig });
