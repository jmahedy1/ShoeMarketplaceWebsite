// Function to update shoe details based on shoe ID
function updateShoeDetails(detailShoeImage, detailShoeName, detailShoePrice) {
    const urlParams = new URLSearchParams(window.location.search);
    const shoeId = urlParams.get('id');

    promise.then(data => {
        const shoe = data.data.find(item => item.id === parseInt(shoeId));
        if(shoe){
            detailShoeImage.src = shoe.link;
            detailShoeImage.alt = "A picture of " + shoe.name;
            detailShoeName.textContent = shoe.name;
            detailShoePrice.textContent = "$" + shoe.price;
        } 
    });
}

function addCart() {
    const detailShoeName = document.getElementById("detailShoeName").textContent;
    const detailShoePrice = document.getElementById("detailShoePrice").textContent;
    const detailShoeSize = document.getElementById("sizes").value;

    if(detailShoeSize == ""){
        alert("Select a shoe size!");
        return;
    }

    let cart = localStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];

    // Push an object containing the name and price to the cart array
    cart.push({ name: detailShoeName, price: detailShoePrice, size: detailShoeSize});
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Added shoe to your cart!");
}
    
const detailShoeImage = document.getElementById("detailShoeImage");
const detailShoeName = document.getElementById("detailShoeName");
const detailShoePrice = document.getElementById("detailShoePrice");
updateShoeDetails(detailShoeImage, detailShoeName, detailShoePrice);

const cart = document.getElementById("cartContainer");
document.getElementById("addCartBtn").addEventListener("click", addCart);