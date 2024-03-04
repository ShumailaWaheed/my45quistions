// Array of guest names
const guestlist: string[] = ['urooj', 'mehak', 'sidra', 'faryal'];

// Print invitation messages for each guest
guest_list.forEach(guest => {
    console.log(`Respected Sir/Madam ${guest},\nWe invite you to dinner tomorrow.\nThank you.\n`);
});

// Print the number of people invited to dinner
console.log(`Total number of people invited to dinner: ${guest_list.length}`);