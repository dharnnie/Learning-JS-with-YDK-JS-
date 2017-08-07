// Cheating lexical scopes...  eval();
// 
function foo(str) {
    //"use strict"
    var kill = true; // random var just to test how I can condition Evaluating eval(); **Pun intended**
    if (kill) {
        eval(str);
        console.log(a); // 'a' returns undefined when strict mode is enabled - eval() is deprecated and not supported in strict mode
    }
    var a = 21;
    console.log(a);
}

foo("var a = 50;");