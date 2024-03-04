function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making sandwich with the following items:");
    items.forEach(function (item) { return console.log("- " + item); });
    console.log("Enjoy your sandwich!");
}
// Call the function three times with different number of arguments
makeSandwich("Cheese", "Tomato", "Lettuce");
makeSandwich("Turkey", "Bacon");
makeSandwich("Peanut Butter", "Jelly");
