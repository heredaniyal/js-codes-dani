** start of script.js **

// QUIZ GAME

// 5 OBJECTS
// aik tarah sai ye MCQ type quiz hai
let obj1 = {
category: "Sports",
question: "Who won the CWC 1992?",
choices: ["Imran Khan", "Shahzaib Zameer", "Nawa z Sharif"],
answer: "Imran Khan"
}
let obj2 = {
  category: "Politics",
question: "Who won the elections in 2018?",
choices: ["Nawaz Sharif", "Bilawal Bhutto", "Imran Khan"],
answer: "Imran Khan"
}
let obj3 = {
  category: "Music",
question: "Which start's song is Jalebi Baby?",
choices: ["Tesher", "Umar Mirza", "Mateen"],
answer: "Tesher"
}
let obj4 = {
  category: "Movies",
question: "Who was the main lead in MS Dhoni: The UnTold Story?",
choices: ["Shah Rukh Khan","Sushant Singh Rajput", "Aamir Khan"],
answer: "Sushant Singh Rajput"
}
let obj5 = {
  category: "Tech",
question: "Which company makes IPhone?",
choices: ["Samsung", "Apple", "Xiaomi"],
answer: "Apple",
}

// passed directly instead of push() function
let questions = [obj1, obj2, obj3, obj4, obj5];

// random question
function getRandomQuestion(a) {
   // 0 to 4
   const i = Math.floor(Math.random() * 5); 
   // floor usko peeche se round off krta
   // for example 4.9 --> 4
   // 4.1 --> 4
   return a[i]; // only returns string of question  
}

// random answer
function getRandomComputerChoice(a) {
   // 0 to 3 (4 choices)
   const i = Math.floor(Math.random() * 4); 
   // floor usko peeche se round off krta
   // for example 4.9 --> 4
   // 4.1 --> 4
   return a[i];  
}

function getResults(q, c) {
 // q = question, c = choice
  if (q.answer === c) 
  {
    return "The computer's choice is correct!";
  }
  else {
    return "The computer's choice is wrong. The correct answer is: " + q.answer;
  }
}

** end of script.js **

