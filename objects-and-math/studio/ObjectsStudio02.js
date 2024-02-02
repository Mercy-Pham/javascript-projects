// Code your orbitCircumference function here:
function orbitCircumference (radius) {
  return Math.round(2 * Math.PI * radius);
}

const ORBIT_RADIUS = 2000
const ORBITAL_SPEED = 28000

// Code your missionDuration function here:
function missionDuration (numOfOrbits, orbitRadius, orbitalSpeed) {
  let distance = numOfOrbits * orbitCircumference(orbitRadius);
  let time = Math.round(distance / orbitalSpeed * 100)/100;
  console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`);
  return time;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry (arr) {
  let index = Math.floor(Math.random()*crew.length);
  return arr[index];
}


// Code your oxygenExpended function here:
function oxygenExpended (designatedCrew, orbitRadius, orbitalSpeed) {
  let spacewalkTime = missionDuration(3, orbitRadius, orbitalSpeed);
  let oxygenUsed = Math.round(designatedCrew.o2Used(spacewalkTime) * 1000)/1000;
  return (`${designatedCrew.name} will perform the spacewalk, which will last ${spacewalkTime} hours and rqeuire ${oxygenUsed} kg of oxygen.`);
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 let designatedCrew = selectRandomEntry(crew);


 console.log (oxygenExpended(designatedCrew, ORBIT_RADIUS, ORBITAL_SPEED));

