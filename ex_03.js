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
