var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": ["Let It Rock", "You Give Love a Bad Name"]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": ["1999", "Little Red Corvette"]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": ["hola"]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

function updateRecords(id, prop, value) {
    if (!value) { //this checks if the value passed is empty or not so !value basically means if(value is not empty)
        delete collection[id][prop]; //we have to use [prop] instead of .prop because we use bracket notation for variables and dots for literals.
        return collection;
    }
    if (prop !== "tracks" && value !== "") {
        collection[id][prop] = value;
    } else {
        if (collection[id].hasOwnProperty("tracks")) {
            collection[id].tracks.push(value);
        } else {
            collection[id].tracks = [];
            collection[id].tracks.push(value);
        }
    }
    return collection;
}
updateRecords(5439, "tracks", "Take a Chance on Me");
console.log(collection[5439].tracks[0]);