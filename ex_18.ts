const places: string[] = ["cape town","Paris","New York","delhi","faislabad"];
  
  console.log("Original order:");
  console.log(places);
  
  console.log("\nAlphabetical order:");
  console.log(places.sort());
  
  console.log("\nOriginal order (still intact):");
  console.log(places);
  
  console.log("\nReverse alphabetical order:");
  console.log([places].sort().reverse());
  
  console.log("\nOriginal order (still intact):");
  console.log(places);
  
  console.log("\nReversed order:");
  console.log(places.reverse());
  
  console.log("\nReversed back to original order:");
  console.log(places);
  
  console.log("\nSorted in alphabetical order:");
  console.log(...places.sort());
  
  console.log("\nSorted in reverse alphabetical order:");
  console.log(places.sort().reverse());