"use strict";
// Array of magician's names
const magicianNames = ["Ali the Great", "Zara Magic", "Khan the Illusionist"];
// Function to display magician names
function displayMagicians(magicians) {
    console.log("Magicians:");
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Call the function to display magician names
displayMagicians(magicianNames);
