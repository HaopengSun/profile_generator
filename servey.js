const readline = require('readline');
const questions = [
  'What\'s your name? Nicknames are also acceptable :)',
  'What\'s an activity you like doing?',
  'What do you listen to while doing that?',
  'Which meal is your favourite (eg: dinner, brunch, etc.)',
  'What\'s your favourite thing to eat for that meal?',
  'Which sport is your absolute favourite?',
  'What is your superpower? In a few words, tell us what you are amazing at!'
];
const result = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = function(){
  rl.question(questions.shift(), (answer) => {
    result.push(answer);
    if (questions.length !== 0){
      ask();
    } else {
      console.log(`Your answers are ${result}`);
      rl.close();
    }
  });
}
ask()

// rl.question(questions.shift(), (answer1) => {
//   result.push(answer1);
//   rl.question(questions.shift(), (answer2) => {
//     result.push(answer2);
//     console.log(`Your answers are ${result}`);
//     rl.close();
//   });
// });