// convert shahzaib to SHAHZAIB using ASCII IN JS

/*
A = 65
a = 97

97 - 65 -> 32 difference

subtract every letter by 32

remember, strings are immutable (❌) IN JS (CANNOT BE CHANGED EVER)
changes can only be returned not updated in the original string
*/

let shahzaib = "shahzaib", result="";

for (let i = 0; i < shahzaib.length; i++){ // 0 to jitni bhi string ki length hai
        result += String.fromCharCode(shahzaib.charCodeAt(i) - 32);
}
console.log(result); // SHAHZAIB

/*
LEARNED THAT ALL VARIABLES WHEN declared default value undefined
*/
