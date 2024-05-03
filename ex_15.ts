let guests: string[] = ["urooj", "Mehak", "Sidra", "Faryal"];

let unableToAttend: string = "Sidra";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest: string = "Kanwal";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

