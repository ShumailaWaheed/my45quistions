function makeSandwich(...items: string[]): void {
    console.log("Making sandwich with the following items:");
    items.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich!");
}

// Call the function three times with different number of arguments
makeSandwich("Cheese", "Tomato", "Lettuce");
makeSandwich("Turkey", "Bacon");
makeSandwich("Peanut Butter", "Jelly");