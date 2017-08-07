var foo = true;
let me = "Daniel"
if (foo) {
    let me = "Iyanuoluwa" // "let" restricts the scope of "me" to the nearest {}... 
    console.log(me); // Iyanuoluwa
}
console.log(me); // Daniel

(function bar() {
    console.log(me); // Daniel -  Prints from let me = "Daniel" | Global
})();

//Print to 5

for (let i = 0; i <= 5; i++) {
    console.log(i); // 1 - 10
}

console.log(i); // ReferenceError