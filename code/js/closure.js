// Declare a base function that serves as a foundation
function makeMultiplier(x) {

    function multiply(y) {
        return y * x;
    }
    return multiply; // returns another function
}

// Init Closure
var byFive = makeMultiplier(5); // makeMultiplier returns an object(of type function) that multiplies the world (i.e any argument) by Five

var byFifteen = makeMultiplier(15); // makeMultiplier returns an object(of type function) that multiplies the world (i.e any argument) by Fifteen
// End Closure initialisation

console.log(byFive(2)); // 10  "byFive remembers line 11"

console.log(byFifteen(2)); // 30 "byFifteen remebers line 13"