// Declare and assign the variables below

let spaceShuttle = "Determination"; 
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToTheMoonKm = 384400;
let milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof spaceShuttle);
// string

console.log(typeof distanceToMarsKm);
// number

console.log(typeof distanceToTheMoonKm);
//number

console.log(typeof milesPerKm);
//number 

// Calculate a space mission below

let milesToMars = distanceToMarsKm * milesPerKm
let hoursToMars = milesToMars / shuttleSpeedMph
let daysToMars = hoursToMars / 24

// Print the results of the space mission calculations below

console.log(spaceShuttle + " will take " + daysToMars + " days to reach Mars.");

// Calculate a trip to the moon below

let milestoMoon = distanceToTheMoonKm * milesPerKm
let hoursToMoon = milestoMoon / shuttleSpeedMph
let daysToMoon = hoursToMoon / 24

// Print the results of the trip to the moon below

console.log(spaceShuttle + " will take " + daysToMoon + " days to reach the Moon.");

