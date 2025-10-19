/* DANIYAL SAQIB
 +923064699932
 */

// Boolean is true (1) or false (0)
function booWho(shahzaib) {
      if (shahzaib === true || shahzaib === false)
      {
         return true;
      }
      else {return false;}
}

// ye saare test cases hain
console.log(booWho(true)); // 1
console.log(booWho(false)); // 2
console.log(booWho([1, 2, 3])); // 3
console.log(booWho([].slice)); // 4
console.log(booWho({ "a": 1 })); // 5
console.log(booWho(1)); // 6 
console.log(booWho(NaN)); // 7
console.log(booWho("a")); // 8
console.log(booWho("true")); // 9
console.log(booWho("false")); // 10

