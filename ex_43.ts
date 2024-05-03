// Original list of magician names
let magicians: string[] = 
["Ali the Great", "Zara Magic", "Khan the Illusionist"];

function makeGreat(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

function showMagicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

let greatMagicians: string[] = makeGreat([...magicians]); // Creates a new modified array
console.log("Original magicians:");
showMagicians(magicians); // Shows original names
console.log("Great magicians:");
showMagicians(greatMagicians); // Shows modified names
