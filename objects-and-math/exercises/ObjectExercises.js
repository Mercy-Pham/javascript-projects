let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let chimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.

superChimpOne['astronaut ID'] = 1;
salamander['astronautID'] = 2;
chimpTwo['astronautID'] = 3;
beagle['astronautID'] = 4;
tardigrade['astronautID'] = 5;

superChimpOne['move'] = function () {return Math.round(Math.random()*10)};
salamander['move'] = function () {return Math.round(Math.random()*10)};
chimpTwo['move'] = function () {return Math.round(Math.random()*10)};
beagle['move'] = function () {return Math.round(Math.random()*10)};
tardigrade['move'] = function () {return Math.round(Math.random()*10)};

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, chimpTwo, beagle, tardigrade];

// Print out the relevant information about each animal.
function crewReports (animal) {
   return (`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`);
} 

for (item in crew) {
   console.log(crewReports(crew[item]));
}

// Start an animal race!
function fitnessTest () {
   let animalRace = []
   for (index in crew) { 
      let stepsInRace = 0;
      let turns = 0;
      while (stepsInRace < 20) {
         stepsInRace += crew[index].move();
         turns += 1;
      }
      animalRace.push(`${crew[index].name} took ${turns} turns to take 20 steps.`);
   } return animalRace;
}

let results = fitnessTest();
for (item in results) {
   console.log(results[item]);
}