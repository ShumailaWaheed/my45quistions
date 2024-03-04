var current_users = ["urooj", "mehak", "Sidra", "Faryal", "admin"];
var new_users = ["Sabeen", "Ramin", "Iman", "Kanwal", "Komal"];
var _loop_1 = function (new_user) {
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    var usernameExists = current_users.some(function (user) { return user.toLowerCase() === new_user.toLowerCase(); });
    if (usernameExists) {
        console.log("Sorry, the username ".concat(new_user, " is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username ".concat(new_user, " is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
