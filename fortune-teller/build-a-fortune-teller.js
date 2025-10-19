// 5 fortunes to be written down
let fortune1 = "You'll get your Dream Car!"
, fortune2 = "You'll have a fulfilling life!"
, fortune3 = "She will message you Today"
, fortune4 = "Allah is happy with you"
, fortune5 = "You will find a new hobby soon.";

// ye formula ko yaad krne mai time lagega
let randomNumber = Math.round(Math.random() * (5 - 1) + 1);

let selectedFortune; // if else ki game

// SIMPLE IF ELSE STATEMENTS
if (randomNumber == 1){
  selectedFortune = fortune1;
}
else if (randomNumber == 2){
  selectedFortune = fortune2;
}
else if (randomNumber == 3){
  selectedFortune = fortune3;
}
else if (randomNumber == 4){
  selectedFortune = fortune4;
}
else if (randomNumber == 5){
  selectedFortune = fortune5;
}

console.log(selectedFortune);

