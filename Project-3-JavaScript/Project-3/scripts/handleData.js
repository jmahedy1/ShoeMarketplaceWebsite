// read the json data
const fetchData = async function(filepath){ 
    try {
        const response = await fetch(filepath); 
        if(!response.ok){ 
            throw new Error('Network response was not ok'); 
        }
        return await response.json(); 
    } 

    catch(error){ 
        console.error('Error reading the JSON file:', error); 
        throw error; 
    }
}

const promise = fetchData("data/shoes.json");