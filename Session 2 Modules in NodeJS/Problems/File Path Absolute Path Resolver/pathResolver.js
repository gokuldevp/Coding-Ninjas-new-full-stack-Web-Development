// Import the necessary modules here.
const path = require('path');

exports.getAbsolutePath = (filePath) => {
    // i) Complete the getAbsolutePath function inside the "pathResolver.js" file to accurately determine and return the absolute path of the file.txt file in the src directory.
    // ii) Your task is to find the absolute path of the parameter passed within "getAbsolutePath" function.
    return path.resolve(filePath);
};
