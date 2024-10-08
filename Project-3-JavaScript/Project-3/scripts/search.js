// Function to render shoe list based on data
function renderShoeList(data, detailPage) {
    for(const shoe of data){ 
        const listingBox = document.createElement("a"); 
        listingBox.href = `${detailPage}?id=${shoe.id}`;
        
        listingBox.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = `${detailPage}?id=${shoe.id}`;
        });

        const imgElement = document.createElement("img");
        imgElement.src = shoe.link;
        imgElement.alt = "A picture of " + shoe.name;

        const descriptionElement = document.createElement("p"); 
        const strongElement = document.createElement('strong');
        strongElement.textContent = shoe.name;
        descriptionElement.appendChild(strongElement);
        descriptionElement.appendChild(document.createElement('br'));
        descriptionElement.appendChild(document.createElement('br'));
        descriptionElement.appendChild(document.createTextNode("$" + shoe.price));

        listingBox.appendChild(imgElement);
        listingBox.appendChild(descriptionElement);
        searchContainerDiv.appendChild(listingBox);
    }
}

// function to sort shoes
function sortShoes(shoesData, sortByValue){
    const sortByElement = document.getElementById("sortBy");
    if(sortByElement){
        if(sortByValue === "priceIncreasing"){
            shoesData.sort(function(a, b){
                return a.price - b.price;
            });
        } 
        
        else{
            shoesData.sort(function(a, b){
                return b.price - a.price;
            });
        }
        searchContainerDiv.innerHTML = '';
        renderShoeList(shoesData, detailPage);
    }
}

const searchContainerDiv = document.getElementById("search-container");
const detailPage = "detail.html";
let shoesData = [];

// render shoes
promise.then(data => {
    shoesData = data.data;
    renderShoeList(shoesData, detailPage);
});

// sort shoes action listener
document.getElementById("sort").addEventListener("change", function(event){
    sortShoes(shoesData, event.target.value);
});

// used to remove the listing from the search page
// if(localStorage){
//     localStorage.removeItem('listingItems');
// }

// Wait for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve listing items from localStorage
    const storedListing = localStorage.getItem('listingItems');
    if (storedListing){
        const listingItems = JSON.parse(storedListing);

        // Create elements for each listing item
        const listingBox = document.createElement("div");
        const listingPicture = document.createElement("img");
        const listingP = document.createElement("p");

        // Set content for listing item
        listingPicture.src = listingItems.image;
        listingP.textContent = listingItems.name;

        // Create a <br> element for new line
        const lineBreak = document.createElement("br");
        const lineBreak2 = document.createElement("br");

        // Append listing items to listingP
        listingP.appendChild(lineBreak); // Add new line
        listingP.appendChild(lineBreak2);
        listingP.appendChild(document.createTextNode(`$${listingItems.price}`));

        // Append listing items and remove button to listingBox
        listingBox.appendChild(listingPicture);
        listingBox.appendChild(listingP);

        // Append the new listing to the end of the container
        searchContainerDiv.appendChild(listingBox);
    } 
    
    else {
        // No listing items found in localStorage
        console.log("No listing items found.");
    }
});
