function mutation(a) {
// toLowerCase()
let ok = true; // boolean value for everything ok
let daniyal = a[0].toLowerCase();
let shahzaib = a[1].toLowerCase();
// everything converted into lower case
// meaning no stressing out on cases
// SHAHZAIB is the main concern

// we'll have to sort alphabetically

// converting string to array
  daniyal = daniyal.split("");
  shahzaib = shahzaib.split("");

// sorting in ascending order using ASCII
  daniyal = daniyal.sort();
  shahzaib = shahzaib.sort();

  /*console.log(daniyal); TESTING DONE
  console.log(shahzaib);*/

 // ARRAY TO STRINGS
  daniyal = daniyal.join("");
  shahzaib = shahzaib.join("");

  console.log(daniyal); 
  console.log(shahzaib);

  if (daniyal === shahzaib) {
    ok = true;
  }
  else if (daniyal.includes(shahzaib)) {
    ok = true;
  }
  else if(shahzaib.includes(daniyal)){
    ok = true;
  }
  else if (daniyal.length > shahzaib.length) {
    /* count wali logic apply karni hogi */
    let c = 0; 
    for (let i = 0; i < daniyal.length; i++) {
      if (daniyal[i] === shahzaib[i]) {
        ++c;
        continue;
        }
      else {
        break;
      }
    }
    if (c === shahzaib.length) {
      ok = true;
    }
    else {
      ok = false;
    }
  }
  else {
    ok = false;
  }

return ok;
}

console.log(mutation(["floor", "for"]));