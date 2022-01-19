
let chances = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];


//***************************************************** Solution 1 : if it's an Array ********************************************

// checkChances = (chances) => {
//     let randomNumber = Math.floor(Math.random() * 19);
//     randomNumber <= 10
//       ? console.log(chances[randomNumber], "positive")
//       : randomNumber <= 15
//       ? console.log(chances[randomNumber], "natural")
//       : console.log(chances[randomNumber], "negative");
//   };
  
//   checkChances(chances);

//***************************************************** */ Solution 2 : if it's an Object ***************************************************

// let chancesArr = { ...chances };
// fortunTeller = (chancesArr) => {
//     let randomNumber = Math.floor(Math.random() * 19 + 1);
//     let answer = chances[randomNumber];
//     console.log(answer);
    
//     randomNumber <= 10
//     ? console.log("positive")
//     : randomNumber <= 15
//     ? console.log("natural")
//     : console.log("negative");
// };
// fortunTeller(chancesArr);



// Math.floor(Math.random()*(max-min)+min)
