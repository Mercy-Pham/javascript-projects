const test = require('../RPS');

describe("whoWon", function(){

    test("A tie", function() {
        let output = test.whoWon('scissors','scissors');
     expect(output).toEqual("TIE!");
    });
 
    test("Rock vs Paper", function() {
        let output = test.whoWon('rock','paper');
     expect(output).toEqual("Player 2 wins!");
    });
 
    test("Paper vs Scissors", function() {
        let output = test.whoWon('paper','scissors');
     expect(output).toEqual("Player 2 wins!");
    });

    test("Scissors vs Rock", function() {
        let output = test.whoWon('scissors','rock');
     expect(output).toEqual("Player 2 wins!");
    });
 });