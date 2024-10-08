document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById("cartContainer");

    // Retrieve cart items from local storage
    let cartItems = localStorage.getItem('cart');
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    // Function to display cart items
    function displayCartItems() {
        cartContainer.innerHTML = ''; // Clear previous cart items

        cartItems.forEach((item, index) => {
            // Create elements for cart item
            const cartDiv = document.createElement("div");
            const cartP = document.createElement("p");
            const removeBtn = document.createElement("button");

            // Set content for cart item
            cartP.textContent = `${item.name} | ${item.price} | ${item.size}`;
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');
            removeBtn.dataset.index = index;

            // Append cart item to cart container
            cartDiv.appendChild(cartP);
            cartDiv.appendChild(removeBtn);
            cartContainer.appendChild(cartDiv);
        });
    }

    // Initial display of cart items
    displayCartItems();

    function removeCartItem(index) {
        cartItems.splice(index, 1); // Remove item from cart array
        localStorage.setItem('cart', JSON.stringify(cartItems)); // Update local storage
        displayCartItems(); // Update cart display
    }

    cartContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
            const itemIndex = parseInt(event.target.dataset.index);
            removeCartItem(itemIndex);
        }
    });
});