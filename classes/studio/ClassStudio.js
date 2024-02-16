//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass; 
        this.scores = scores;
    }

    addScore(score){
        this.scores.push(score);
    }

    average(){
        const sum = this.scores.reduce(function(total,score) {
            return total + score});
        const averageScore = sum/this.scores.length;
        return Math.round(averageScore*10)/10;
    }

    status() {
        const avg = this.average();
        if (avg >= 90) {
            return "Accepted";
        } else if (avg >= 80) {
            return "Reserve";
        } else if (avg >= 70) {
            return "Probationary";
        } else {
            return "Rejected";
        }
    }
}

let firstCandidate = new CrewCandidate('Bubba Bear', 135, [88,85,90]);
let secondCandidate = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
let thirdCandidate = new CrewCandidate('Glad Gator', 225, [75,78,62]);

let candidateArr = [firstCandidate,secondCandidate,thirdCandidate];


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

console.log(firstCandidate);
console.log(secondCandidate);
console.log(thirdCandidate);

(firstCandidate.addScore(83));
console.log(firstCandidate.scores);

console.log(secondCandidate.average());

for (i = 0; i < candidateArr.length; i++) {
    console.log(`${candidateArr[i].name} earned an average test score of ${candidateArr[i].average()}% and has a status of ${candidateArr[i].status()}.`);
}


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let i = thirdCandidate.average();
let reserveCount = 0;
let acceptedCount = 0;
let countIterations = 0;

while (i < 90) {
    thirdCandidate.addScore(Math.floor(Math.random() * (100 - 90 + 1)) + 90);
    i = thirdCandidate.average();
    countIterations++;

    if((i > 80 && i < 90) && reserveCount === 0) {
        reserveCount += 1;
        console.log(`The new average is ${i}. It took ${countIterations} test to reach Reserve.`);
    }

    if((i > 90 && i < 99) && acceptedCount === 0) {
        acceptedCount += 1;
        console.log(`The new average is ${i}. It took ${countIterations} test to reach Accepted.`);
    }
    


}