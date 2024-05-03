"use strict";
// Original list of magician names
let magicians = ["Ali the Great", "Zara Magic", "Khan the Illusionist"];
function makeGreat(magicians) {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}
function showMagicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
let greatMagicians = makeGreat([...magicians]); // Creates a new modified array
console.log("Original magicians:");
showMagicians(magicians); // Shows original names
console.log("Great magicians:");
showMagicians(greatMagicians); // Shows modified names
