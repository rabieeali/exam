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

// very helpful:      *** Math.floor(Math.random()*(max-min+1)+min) ***


//***************************************************** Solution 1 : if it's an Array *****************************************************

checkChances = () => {
  const randomNumber = Math.floor(Math.random() * chances.length);
  randomNumber <= 9
    ? console.log(chances[randomNumber], "positive")
    : randomNumber <= 14
    ? console.log(chances[randomNumber], "natural")
    : console.log(chances[randomNumber], "negative");
};

checkChances();

//***************************************************** */ Solution 2 : if it's an Object ***************************************************

// const chancesObj = { ...chances };
// fortuneTeller = () => {
//   const randomNumber = Math.floor(Math.random() * chances.length);
//   const answer = chancesObj[randomNumber];

//   randomNumber <= 9
//     ? console.log(answer, "positive")
//     : randomNumber <= 14
//     ? console.log(answer, "natural")
//     : console.log(answer, "negative");
// };

// fortuneTeller();
