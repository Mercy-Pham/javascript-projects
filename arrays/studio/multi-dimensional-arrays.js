let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(',').sort();
let equipmentArray = equipment.split(',').sort();
let petsArray = pets.split(',').sort();
let sleepAidsArray = sleepAids.split(',').sort();


//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [
    foodArray, equipmentArray, petsArray, sleepAidsArray
]
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let query = input.question("Select a cabinet between 0-3: ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (query < 0){
    console.log(`ERROR: You have selected an invalid number.`);
} else if (query > 3){
    console.log(`ERROR: You have selected an invalid number.`);
} else {
    console.log(`Here are the contents of the cabinet: ${cargoHold[query]}`);
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
query1 = input.question("Name a particular item: ");
let queryCheck = cargoHold[query].includes(query1);

if (queryCheck) 
    console.log(`Cabinet ${query} DOES contain ${query1}.`);
else
    console.log(`Cabinet ${query} DOES NOT contain ${query1}.`);