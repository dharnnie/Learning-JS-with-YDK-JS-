// Scopes & Closures Series of YDK-JS
// Understanding LHS and RHS from YDK-JS page 87

function foo(a) { // RHS look-up for foo LHS look-up for a
    var b = a; // LHS look-up  for b --- RHS look-up for a
    return a + b; // RHS look-up for return (a & b)
}

var c = foo(2); // LHS look-up for c --- RHS look-up for foo

/*
    Basically, RHS (Right hand side) Look-ups happens when a refrence is being made to a variable
        Does [referenced dude] exist? We are safe, else, we are dead
    On the other hand LHS (Left hand side) Look-ups happens when a declaration is being made
        Has this been done before (In this scope?), No? -> Do it. else, ignore... look elsewhere

        NB>: This is not all there is to RHS and LHS, this would definietely help 
 */