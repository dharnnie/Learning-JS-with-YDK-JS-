// Trying to see how lexical scoping work with the "this" key word.
function workplace() {
    "use strict"
    var lab = "Imisi 3D VR Lab"

    function role() {
        var lab = "Imisi 3D VR Creation Lab"
        console.log(lab);
    }
    role();
    console.log(lab);
}

workplace();