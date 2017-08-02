// Kill all humans
function Thing() {
    var type, status; // type = human || robot AND status = alive || dead

    // Kills Thing (Any instance of Thing) that is human and alive
    function killer(t, s) {
        type = t;
        status = s;
        if (type === "human" && status === "alive") {
            console.log("You are so freaking screwed... Die");
        } else {
            console.log("For some reason you are not screwed... Be free");
        }
    }

    var publicInterface = { // Opens up kill to the world
        kill: killer
    };
    return publicInterface;
}

osama = Thing();
osama.kill("human", "alive");

canine = Thing();
canine.kill("robot", "alive");