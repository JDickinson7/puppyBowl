//Insert the Puppy Bowl API 

//Create DOM 
const main = document.querySelector('main');
// Create State 
// const state = {
//   everyPuppies: []
// };
// Fetch and display the data from Puppy Bowl API

const getPuppyData = async () => {
  const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2410-FTB-MT-WEB-PT/players");
    const data = await response.json ();
    console.log(data)
    const allPuppies = data.results;
    state.everyPuppies = allPuppies;

  renderAllPuppies(); 
};

//-----------------------------------------
// const renderAllPuppies =() => {
//   const ol = document.createElement('ol');

//   const puppyNames = state.everyPuppies.map((singlepuppy) => {
//     return `<li class-"`
//   })
//---------------------------------------
// Display in the HTML
// const displayPuppies = () => {
//   const main = document.querySelector ('main');
//   if (state.allPuppies && state.allPuppies.length > 0) {
//     const puppiesHTML = `
//       <ol>
//         ${state.allPuppies.map(pup => 
//           `<li>${pup.name}</li>`
//         ).join('')}
//       </ol>`;
//     console.log(puppiesHTML); 
//     main.innerHTML = puppiesHTML;  
//   } else {
//     console.log('<p>No puppies found.</p>');  
//     main.innerHTML = '<p>No puppies found.</p>';
//   }
// };