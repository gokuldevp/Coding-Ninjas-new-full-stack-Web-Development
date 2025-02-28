/**
 * Deletes a product by its ID.
 * - Prompts the user for confirmation before proceeding.
 * - Sends a POST request to the server to delete the product.
 * - If the deletion is successful, redirects the user to the home page.
 *
 * @param {number} id - The unique identifier of the product to be deleted.
 */
function deleteProduct(id) {
    // Ask for user confirmation before deleting the product
    const result = confirm('Are you sure you want to delete this product?');

    if (result) {
        // Send a POST request to delete the product
        fetch('/delete/' + id, {
            method: 'POST',
        })
        .then((res) => {
            if (res.ok) {
                // Redirect to the home page after successful deletion
                window.location.href = "/";
            }
        })
        .catch((err) => console.error('Error deleting product:', err));
    }
}
