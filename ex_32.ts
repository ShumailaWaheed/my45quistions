let current_users: string[] = ["urooj", "mehak", "Sidra", "Faryal", "admin"];
let new_users: string[] = ["Sabeen", "Ramin", "Iman", "Kanwal", "Komal"];

for (let new_user of new_users) {
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    let usernameExists: boolean = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
    if (usernameExists) {
        console.log(`Sorry, the username ${new_user} is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username ${new_user} is available.`);
    }
}