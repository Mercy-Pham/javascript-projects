const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

const newString = str.slice(3).concat(str.slice(0,3));
console.log("Part 1:", newString);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original answer is ${str}, whereas the modified answer is ${newString}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let query = input.question("Part 2: Enter the number of letters to be relocated: ");
let newString1 = str.slice(query).concat(str.slice(0, query));


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (query < 0) {
    console.log(`Part 3: Because the input is less than the word length, the default response is: ${newString}.`);
} else if (query > str.length){
    console.log(`Part 3: Because the input is greater than the word length, the default response is: ${newString}.`);
} else {
    console.log(`Part 3: Your modified response is: ${newString1}`);
}