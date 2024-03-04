// Array of guest names
var guest_list = ['urooj', 'mehak', 'sidra', 'faryal'];
// Print invitation messages for each guest
guest_list.forEach(function (guest) {
    console.log("Respected Sir/Madam ".concat(guest, ",\nWe invite you to dinner tomorrow.\nThank you.\n"));
});
// Print the number of people invited to dinner
console.log("Total number of people invited to dinner: ".concat(guest_list.length));
