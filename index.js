// Insert the Puppy Bowl API
console.log('It works!');

// Create DOM
const main = document.querySelector('main');

// Create State
const state = {
  everyPuppy: []
};

// Cohort info
const cohort = "2410-FTB-MT-WEB-PT";
const resource = "players"; 

// Fetch and display the data from the Puppy Bowl API
const getPuppyData = async () => {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-MT-WEB-PT/players
`);
    const data = await response.json();
    console.log(data);

    const allPuppies = data.results; 
    state.everyPuppy = allPuppies; 

    displayPuppies(); // Function to render the puppies on the page
  } catch (error) {
    console.error("Error fetching puppy data:", error);
  }
};

// Function to display the list of puppies
const displayPuppies = () => {
  const puppyListSection = document.getElementById('puppy-list'); // Get the section to insert the list

  // Check if the puppies are correctly stored in the state
  if (state.everyPuppy && state.everyPuppy.length > 0) {
    const puppiesHTML = `
      <ol>
        ${state.everyPuppy.map(pup => 
          `<li>
            <h3>${pup.name}</h3>
            <img src="${pup.image}" alt="${pup.name}" />
            <button onclick="viewPuppyDetails(${pup.id})">View Details</button>
          </li>`
        ).join('')}
      </ol>
    `;
    puppyListSection.innerHTML = puppiesHTML;  // Insert the list into the HTML
  } else {
    puppyListSection.innerHTML = '<p>No puppies found.</p>';
  }
};

// Function to view details of a specific puppy
async function viewPuppyDetails(id) {
  try {
    const puppyDetails = await getPuppyDetails(id);  // Fetch the puppy's details by ID
    const detailsContainer = document.getElementById('puppy-details'); // Get the details section

    detailsContainer.innerHTML = `
      <h2>${puppyDetails.name}</h2>
      <p><strong>Breed:</strong> ${puppyDetails.breed}</p>
      <p><strong>Age:</strong> ${puppyDetails.age}</p>
      <p><strong>Color:</strong> ${puppyDetails.color}</p>
      <img src="${puppyDetails.image}" alt="${puppyDetails.name}" />
      <button onclick="backToRoster()">Back to Roster</button>
    `;
  } catch (error) {
    console.error("Error fetching puppy details:", error);
  }
}

// Function to go back to the roster view
function backToRoster() {
  document.getElementById('puppy-details').innerHTML = '';  // Clear the details section
  displayPuppies();  // Go back to the list of puppies
}

// Function to get the details of a puppy
const getPuppyDetails = async (id) => {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-MT-WEB-PT/players
`);
    const data = await response.json();
    return data;  // Return the puppy details object
  } catch (error) {
    console.error("Error fetching puppy details:", error);
  }
};

// Load the puppy data when the page loads
window.onload = getPuppyData;