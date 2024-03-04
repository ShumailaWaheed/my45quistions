let guest_list: string[] = ['urooj','mehak','sidra','faryal'];
for(let i=0; i<guest_list.length; i++){
console.log('Respacted Sir/Medum' + guest_list[i] + ',\nwe invite you on dinner tomorrow.\nThank You\n')    
}

let not_present: string = 'urooj';
let new_guest: string = 'kanwal';
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Medum' + guest_list[i] + ',\nwe invite you on dinner tomorrow.\nTHANK You\n')
}
guest_list.unshift('iqra','saima','zainab','sadiya');
for(let i = 0; i<guest_list.length; i++) {
    console.log('Respacted Sir/Medum' + guest_list[i] + ',\'\nwe invite you on dinner tomorrow.\n');
}


while(guest_list.length > 2) {
    let removed_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam ${removed_guest}, you are not invited for dinner.`);
}
for(let i = 0; i < guest_list.length; i++) {
    console.log(`Respected Sir/Madam ${guest_list[i]},\nYes, you are still invited to dinner tomorrow.\nThank you.\n`);
}    