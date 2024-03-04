var guest_list = ['urooj', 'mehak', 'sidra', 'faryal'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respacted Sir/Medum' + guest_list[i] + ',\nwe invite you on dinner tomorrow.\nThank You\n');
}
var not_present = 'urooj';
var new_guest = 'kanwal';
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Medum' + guest_list[i] + ',\nwe invite you on dinner tomorrow.\nTHANK You\n');
}
guest_list.unshift('iqra', 'saima', 'zainab', 'sadiya');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respacted Sir/Medum' + guest_list[i] + ',\'\nwe invite you on dinner tomorrow.\n');
}
while (guest_list.length > 2) {
    var removed_guest = guest_list.pop();
    console.log("Sorry Sir/Madam ".concat(removed_guest, ", you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam ".concat(guest_list[i], ",\nYes, you are still invited to dinner tomorrow.\nThank\u00A0you.\n"));
}
