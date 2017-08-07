console.log(a); // undefined

a = 31; // I

console.log(a);

var a = 21;

// Javascript compiler hoists...
/*
    This means, when we execute our code, javascript declares all the variables first at compilation time
    Moves them up the stack of their scope, and leaves assignments to happen at runtime...
    Although simultaneous, this affects the way our code runs a great deal

 */

// Explanation - Consider the code above

// Line 7 happens first when you run your code, but not the way you think. That line is split into |var a  & a = 21|.
// var a (Variable declaration); Happens first and is moved to the top of the stack at compile time
// a = 21; Happens at runtime and is anywhere it is written at author time.