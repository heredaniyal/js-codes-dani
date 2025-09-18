// IT'S NOT AS EASY AS IT LOOKS
// MAKING SIMPLE LEAP YEAR CALCULATOR

function isLeapYear(years) {
   // this is not quite simple as it looks
   if (years % 4 == 0) { 
     if (years % 400 == 0)
     {
       return years + " is a leap year.";
     }
     else if (years % 100 == 0){
        return years + " is not a leap year.";
     }
     else {
       return years + " is a leap year.";
     }
   }
}

let year=1900, result;

result = isLeapYear(year);

console.log(result);

year = 2000;

result = isLeapYear(year);

console.log(result);

year = 2024;

result = isLeapYear(year);

console.log(result);

