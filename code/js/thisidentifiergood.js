function admitApplicant() {
    console.log(this.name + " has been admited. He is " + this.age + "years");
}

name = "Daniel Osineye"
age = "21"

var classRep = {
    name: "Omegie Mamilor",
    age: "1"
}

var classChief = {
    name: "Timothy Adewunmi",
    age: "3"
}

admitApplicant(); // only this works
//name.call(classChief);
//foo.call(classRep);
//classRep.admitApplicant();