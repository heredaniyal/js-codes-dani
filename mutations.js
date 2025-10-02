/*
QUESTION FROM FREECODECAMP
I only wrote the function, you can test it by calling it
*/

function mutation(a) {
let str1 = a[0].toLowerCase();
let str2 = a[1].toLowerCase();

for (let i = 0; i < str2.length; i++){
  if(str1.indexOf(str2[i]) === -1){
    return false;
  }
}

return true;
}



