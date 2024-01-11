// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true; 
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:

//Question 2
if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

//Question 3
if (crewStatus) {
   console.log("Crew Ready");
} else {
   console.log("Crew Not Ready");
}

if (computerStatusCode === 200) {
   console.log("Please stand by. Computer is rebooting.");
   } else if (computerStatusCode === 400) {
      console.log("Success! Computer online.");
   } else {
      console.log("ALERT: Computer offline!");
   }

   if (shuttleSpeed > 17500) {
      console.log("ALERT: Escape velocity reached!");
   } else if (shuttleSpeed < 8000) {
      console.log("ALERT: Cannot maintain orbit!");
   } else {
      console.log("Stable speed");
   }

//Question 4 - Prediction: Yes bc part 1 is true = true; part 2 is false; true; false bc is true because of OR 
//(The boolean expression a !== b returns true)
   if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
      console.log("all systems go");
   } else {
      console.log("WARNING. Not ready");
   }

   if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
      console.log("WARNING. Not ready");
   } else {
      console.log("all systems go");
   }

   //Question 5 
   let fuelLevel = 18000;
   let engineTemperature = 2500;
   engineIndicatorLight = "NOT red blinking";
   
   if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
      console.log("ENGINE FAILURE IMMINENT!")
   }
      else if (fuelLevel > 20000 && engineTemperature <= 2500) {
      console.log("Full tank. Engines good.");
   } else if (fuelLevel > 10000 && engineTemperature <= 2500) {
      console.log("Fuel level about 50%. Engines good.");
   } else if (fuelLevel > 5000 && engineTemperature <= 2500) {
      console.log("Fuel level above 25%. Engines good.");
   } else if (fuelLevel <= 5000 || engineTemperature > 2500) {
      console.log("Check fuel level. Engines running hot.");
   } else {
      console.log("Fuel and engine status pending...");
   }

   //Question 6
   let commanndOverride = true || false
   
   if (fuelLevel > 20000 && engineIndicatorLight === "NOT red blinking" || commanndOverride == true) {
      console.log("Cleared to launch!");
   } else {
      console.log("Launch scrubbed!");
   }
   