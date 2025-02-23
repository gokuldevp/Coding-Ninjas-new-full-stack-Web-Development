// Do not change the pre-written code.
// Make the necessary imports here.
// Implement the module using ES6 syntax, without requiring a change in the file extension(.mjs).
import * as fs from "fs"; // Importing the 'fs' module to handle file system operations

// Implement the writeBlog function to accept a file path and the user's blog (string content) as parameters.This function should save the blog to the specified file using the synchronous append method of the fs module.
export const writeBlog = (filePath, name) => {
    fs.appendFileSync(filePath,name);
}

// Implement the publishBlog function to accept a file path as a parameter. This function should read and return the content of the file present at the specified path using the synchronous read method of the fs module.
export const publishBlog = (filePath) => {
    const data = fs.readFileSync(filePath, {encoding:"utf8"});
    return data;
}