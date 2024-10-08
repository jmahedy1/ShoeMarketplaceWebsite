function createListing(){
    
    const fileInput = document.getElementById("photoUpload");
    const photoInput = fileInput.files[0];
    const priceInput = document.getElementById("listing-price-input").value;
    const sizeInput = document.getElementById("listing-containerSize").value;
    const shoeNameInput = document.getElementById("listing-description-input").value;

    // validate the inputs
    if(!photoInput || !priceInput || !sizeInput || !shoeNameInput){
        const message = [];
        if(!photoInput){message.push(" Image");}
        if(!priceInput){message.push(" Price");}
        if(!sizeInput){message.push(" Size");}
        if(!shoeNameInput){message.push(" Description");}
        alert("Missing fields: " + message);
        return;
    }

    // Read the file as a data URL
    const reader = new FileReader();
    reader.onload = function(event) {
        // Store listing data in localStorage
        const listingItems = {
            image: event.target.result, // Data URL of the uploaded image
            price: priceInput,
            name: shoeNameInput
        };
        localStorage.setItem('listingItems', JSON.stringify(listingItems));
        alert("Added listing!");
        window.location.href = "search.html";
    };
    reader.readAsDataURL(photoInput); // Read the file as data URL
}

document.getElementById("createListingBtn").addEventListener("click", createListing);