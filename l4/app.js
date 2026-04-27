// function A(callback){
//   callback({"name":"Muzaffar Ali"})
// };


// A(function B(user){
//     console.log(user);
// });


// // Promises
// const myPromise = new Promise((resolve, reject) => {
//   const success = false;

//   if (success) {
//     resolve("Operation was successful!"); // Fulfilled state
//   } else {
//     reject("Operation failed."); // Rejected state
//   }
// });


// myPromise
//   .then((data) => console.log(data))    // Logs: "Operation was successful!"
//   .catch((err) => console.error(err))
//   .finally(() => console.log("Done"));



// Function that mimics an API call with a 2-second delay
// function getMessage() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Hello, World!"), 2000);
//   });
// }

// // Using async/await to handle the response
// async function displayMessage() {
//   console.log("Fetching message...");
  
//   // Execution pauses here until getMessage() finishes
//   const msg = await getMessage(); 
  
//   console.log("Message received:", msg);
// }

// displayMessage();


// ES6+ Features
const product = "Laptop";
const price = 10;

// Multi-line string with variable interpolation
const message = `The ${product} 
costs $${price}.`;

console.log(message);
// Output:
// The Laptop 
// costs $1200.
