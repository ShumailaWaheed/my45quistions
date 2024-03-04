const personName: string = "shumaila";

// lowercase
console.log(personName.toLowerCase());

// uppercase
console.log(personName.toUpperCase())

// titlecase
let firstLetter: string = personName.charAt(0).toUpperCase();
let restLetter: string = personName.slice(1).toLowerCase();

let titlecase = firstLetter + restLetter;

console.log(titlecase);
