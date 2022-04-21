// Load the module "circle.js"
const circle = require("./circle.js");

const radius = 3; 

// Use exported functions

// Test circumference function
console.log(`The circumference of a circle of radius ${radius} is ${circle.circumference(3)}`);

// Test area function
console.log(`Its area is ${circle.area(3)}`)