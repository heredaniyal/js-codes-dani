/*
VERY VERY TRICKY AND MIND WRENCHING
Please drink a cup of tea before starting


MASKING KRNI HAI IT'S WRITTEN IN DOCUMENT
READ - SEARCH - ASK METHOD AS ALWAYS

* ASCII => 42
a = 97
A = 65
*/

/*

let char = "*";
console.log(char.charCodeAt(0));

*/

// VERY CRUCICAL BETWEEN JS AND C++ AND JAVA
// IMPORTANT
// length is correct
// length() isn't correct 

function maskEmail(email) {
    // this is the index where we will get to know where is at the rate symbol uske khisab se slicing krni hai
    let star = "*";
    let end = email.indexOf("@");
    // extracting the whole domain now
    let domain = email.slice(end, email.length);
    let e = email.replace(domain, ""); 
    e = email[0] + star.repeat(e.length - 2) + email[e.length-1];
    email = e + domain;
    return email;
}

// test cases
let email = "apple.pie@example.com";
console.log(maskEmail(email));
email = "freecodecamp@example.com";
console.log(maskEmail(email));
email = "info@test.dev";
console.log(maskEmail(email));
email = "user@domain.org";
console.log(maskEmail(email));

