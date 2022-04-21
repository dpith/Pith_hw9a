// Load the moment package as a module
const moment = require("moment");

// Display and format the current date
console.log(moment().format("dddd, MMMM Do YYYY"));

// Compute the number of years since 1976, November 26th
console.log(moment("1976-11-26").fromNow());