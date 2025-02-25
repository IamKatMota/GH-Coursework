const API_URL = "https://catfact.ninja/";

const state = {
    fact: "",
    breeds: []
};

const $catFactContainer = document.getElementById("cat-fact-container");
const $catBreedsContainer = document.getElementById("cat-breeds-container");

// Fetches a random fact from the /fact endpoint
// Updates the fact in state and re-renders the UI
async function getFact() {
    try {
        const response = await fetch(API_URL + "fact");
        if (!response.ok) {
            throw new Error("HTTP Error: Failed to fetch the fact.");
        }
        const data = await response.json();
        state.fact = data.fact; // Access the `fact` key directly
    } catch (error) {
        alert("Unable to load facts: " + error.message);
    }
    render();
}

// Fetches breeds from the /breeds endpoint
// Updates the breeds array in state and re-renders the UI
async function getBreeds() {
    try {
        const response = await fetch(API_URL + "breeds");
        if (!response.ok) {
            throw new Error("HTTP Error: Failed to fetch breeds.");
        }
        const data = await response.json();
        state.breeds = data.data; // Access the `data` key for breeds
    } catch (error) {
        alert("Unable to load breeds: " + error.message);
    }
    render();
}

// Adds the HTML elements needed to the DOM with data from the state
function render() {
    // Clear the containers before rendering to avoid duplicates
    $catFactContainer.innerHTML = "";
    $catBreedsContainer.innerHTML = "";

    // Render the fact
    const button = document.createElement("button");
    button.textContent = "Get Random Cat Fact";
    button.addEventListener("click", async (event) => {
        event.preventDefault();
        await getFact();
    });
    $catFactContainer.appendChild(button);

    if (state.fact) {
        const factParagraph = document.createElement("p");
        factParagraph.textContent = state.fact;
        $catFactContainer.appendChild(factParagraph

        );
    }

    // Render the breeds
    if (state.breeds.length > 0) {
        state.breeds.forEach((breed) => {
            const breedDiv = document.createElement("div");
            breedDiv.className = "breed";

            breedDiv.innerHTML = `
        <h3>${breed.breed}</h3>
        <p><strong>Country:</strong> ${breed.country}</p>
        <p><strong>Coat:</strong> ${breed.coat}</p>
        <p><strong>Pattern:</strong> ${breed.pattern}</p>
      `;

            $catBreedsContainer.appendChild(breedDiv);
        });
    }
}

// Initial data fetch and render
getFact();
getBreeds();

