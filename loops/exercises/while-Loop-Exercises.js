//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

  let startingFuel = "";
  let numOfAstronauts = "";
  let altitude = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  const input = require('readline-sync');

  startingFuel = input.question('Please enter starting fuel level: ');
  startingFuel = Number(startingFuel);

  while (startingFuel < 5000 || startingFuel > 30000) {
    startingFuel = input.question('Invalid input. Please enter a valid starting fuel level: ');
    startingFuel = Number(startingFuel);
  }
    console.log(`Starting Fuel Level: ${startingFuel}`);

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
    numOfAstronauts = input.question('Please enter number of astronauts (Max limit: 7): ');
    numOfAstronauts = Number(numOfAstronauts);

    while (numOfAstronauts < 1 || numOfAstronauts > 7) {
      numOfAstronauts = input.question('Invalid input. Please enter a valid number of astronauts: ');
      numOfAstronauts = Number(numOfAstronauts);
    }
      console.log(`Number of Astronauts: ${numOfAstronauts}`);
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
  let fuelStatus = startingFuel - 100*numOfAstronauts;

  while (fuelStatus >= 0){
      fuelStatus -= 100*numOfAstronauts;
      altitude += 50; 
    }


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

let output = `The shuttle gained an altitude of ${altitude} km. `;

if (altitude >= 2000) {
  output += 'Orbit achieved!';
} else {
  output += "Failed to reach orbit.";
}
  console.log(output);