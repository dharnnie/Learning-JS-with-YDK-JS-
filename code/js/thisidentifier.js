// Understanding the This Identifier
// This code is experimental and so does not work at the moment.. Remove the last line and see the code work

/*
    It's a trick on the Module [closure] idea. I'm creating a closure of person and initializing thier varibles. I would then try to access them with this.
    ---- Get more understanding from 1st series of Up and going (YDK-JS) Intro to Closure, Modules and This Identifier
 */
function admitApplicants() {
    console.log(this.name + " has been admitted");
    console.log(this.name + "'s" + " age is " + this.age)
}

var name = "Daniel Osineye" // admitApplicant() returns this line, as it is the global variable
var age = "21"


// Trying out some module tricks. I'll create an object with this function.
function Person() {
    var name, age;

    function name(n) {
        name = n;
    }

    function age(a) {
        age = 21;
    }

    var publicInterface = {
        nm: name,
        ag: age
    };

    return publicInterface;
}
segun = Person();
segun.nm("Segun Osineye");
segun.ag(21);


admitApplicants();
//segun.admitApplicants(); // If you remove this line.  Code works but does not make sense.

// I expect line 41 to return "Daniel Osineye has been admitted, Daniel Osineye's age is 21"
// And 42 should return "Segun Osineye has been admitted, Segun Osineye's Age is 21"

// Buzz me if you've got ideas... dcodes.daniel@gmail.com |