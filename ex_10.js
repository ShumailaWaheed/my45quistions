var personName = "ERIC";
console.log("hellow ".concat(personName, " would you like to learn some python today?"));
// This program stores a person's name in a variable and prints the name in lowercase, uppercase, and titlecase.
var personName = "shumaila";
// lowercase
console.log(personName.toLowerCase());
// uppercase
console.log(personName.toUpperCase());
// titlecase
var firstLetter = personName.charAt(0).toUpperCase();
var restLetter = personName.slice(1).toLowerCase();
var titlecase = firstLetter + restLetter;
console.log(titlecase);
