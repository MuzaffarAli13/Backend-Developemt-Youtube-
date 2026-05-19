// let add = (a,b)=>{
//     return a + b
// };

// module.exports = {add};


// Event Loop
 console.log("1: Start"); // Synchronous (Call Stack)

setTimeout(() => {
  console.log("2: Timeout"); // Macrotask (Callback Queue)
}, 0);

Promise.resolve().then(() => {
  console.log("3: Promise"); // Microtask (Microtask Queue)
});

console.log("4: End"); // Synchronous (Call Stack)
