// Scopes & Closures Series of YDK-JS
// Understanding LHS and RHS from YDK-JS page 87

function foo(a) { // RHS look-up for foo LHS look-up for a
    var b = a; // LHS look-up  for b --- RHS look-up for a
    return a + b; // RHS look-up for return (a & b)
}

var c = foo(2); // LHS look-up for c --- RHS look-up for foo