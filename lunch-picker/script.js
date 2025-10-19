/* IMPORTANT
  RANDOMIZER CODE AVAILABLE
*/

let lunches = []; // as per requirements

function addLunchToEnd(arr, name) {
/*
arr = array
string = name
*/

arr.push(name); // ITEM + At the end of array

console.log(name + " added to the end of the lunch menu.");

return arr; // returning the lunch array
}

function addLunchToStart(arr, name) {
     // unshift() will be used + at start
     arr.unshift(name); // ITEM + At the start of array

console.log(name + " added to the start of the lunch menu.");

return arr; // returning the lunch array
}

// DELETE FUNCTIONS

function removeLastLunch(arr) {
/*
arr = array
*/

// checking if array is empty
if (arr.length == 0) { // No Lunch left
     console.log("No lunches to remove.");
}

else { // there is something in array
let element = arr.pop(); // ITEM - At the end of array

console.log(element + " removed from the end of the lunch menu.");

return arr; // returning the lunch array
}

}

function removeFirstLunch(arr) {
/*
arr = array
*/

// checking if array is empty
if (arr.length === 0) { // No Lunch left
     console.log("No lunches to remove.");
}
else { // there is something in array
let element = arr.shift(); // ITEM - At the start of array

console.log(element + " removed from the start of the lunch menu.");

return arr; // returning the lunch array
}

}

// Randomizing lunch
// like picking a character randomly in games
function getRandomLunch(arr) {
/*
arr = array
*/

// checking if array is empty
if (arr.length == 0) { // No Lunch left
     console.log("No lunches available.");
}

else { // there is something in array
 // randomizer logic
 // Math.random()×(max−min)+min

 // THIS IS EASY WAY for me to initialize
 // without interchanging the formula
 let min = 0;
 let max = arr.length - 1; // VERY VERY CRUCIAL

 let pick = Math.floor(Math.random() * (max - min + 1)) + min;

 console.log("Randomly selected lunch: " + arr[pick]);
}

}

// DISPLAYING LUNCH ITEMS
function showLunchMenu(arr) {
     // checking if array is empty
if (arr.length == 0) { // No Lunch left
     console.log("The menu is empty.");
}

else { // there is something in array
   let display = arr.toString();
   display = display.replaceAll("," , ", ");
   console.log("Menu items: " + display);
}
}

// TEST CASES
addLunchToEnd(lunches, "Tacos");
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));
console.log(addLunchToStart(lunches, "Sushi"));
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));

// emptied the arry
lunches = []; // as per requirements
console.log(removeFirstLunch(lunches));
removeFirstLunch(["Salad", "Eggs", "Cheese"]);

lunches = []; // as per requirements
getRandomLunch(lunches);

addLunchToStart(lunches, "Tacos");
addLunchToEnd(lunches, "Burger");
getRandomLunch(lunches);

lunches = []; // as per requirements
console.log(removeLastLunch(lunches));

// SHOWING LUNCH MENU ITEMS NOW
console.log(showLunchMenu(lunches));
console.log(showLunchMenu(["Greens", "Corns", "Beans"]));

