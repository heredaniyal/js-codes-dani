function confirmEnding(name, check) {
 // name -> the string to check
 // check -> the string to check against
 // slice() method to slice end of string
  
  let end = check.length; // taking length of string to check against
  
  // correct logic applied
  // - ka matlab hai reverse traversing
  let test = name.slice(-end, name.length);

 // AS SIMPLE AS IT GETS FOR THE ROCKET
 // Daniyal Saqib
  if (test == check) {return true;}
  else {return false;}

}

// test cases
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "sage"));
console.log(confirmEnding("Open sesame", "game"));
console.log(confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain"));
console.log(confirmEnding("Abstraction", "action"));

/* DONE BY THE ROCKET
 DANIYAL SAQIB
 +923064699932
*/

