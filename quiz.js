const readlineSync = require('readline-sync');

console.log('Welcome to the Quiz');
let username = readlineSync.question("What's your Name: \n");
console.log('Hello',username,", Let's Play the Quiz!!");

console.log('\n');
console.log('Rules & Instructions: ');
console.log('1.',username + ', There are 5 questions about NFactorial Incubator 2022.');
console.log('2. You will get 2 points on each Right Answer.');
console.log('3. One Point will be deducted if the Answer is Wrong.');
console.log('4. In MCQ based questions you have to type the Serial Number / Index Value.');
console.log('\n');

var questionsList = [
  {
    question : 'В каком году был проведен первый инкубатор: ',
    answer : '2013',
  },
  {
    question : 'Имя основателя инкубатора: ',
    answer : 'Арман',
  }, 
  {
    question : 'Сколько тысяч разработчиков хотят подготовить инкубатор: ',
    answer : '100000',
  }
];

var mcqList = [

  {
    array : ['Мурат', 'Абылай', 'Самат', 'Аружан', 'Айдар'],
    question : 'Кто является главным менторо в этом году? ',
    answer : 'Айдар'
  },
  {
    array : ['Политехе', 'НУ', 'КБТУ', 'МУИТе'],
    question : 'Инкубатор проходит в ',
    answer : 'Политехе'
  }
];

let score = 0;
function quiz(question,answer){
  let userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() == answer.toLowerCase()){
    console.log('You are Right.');
    score += 2;
  } else {
    console.log('You are Wrong.');
    console.log('The Correct Answer is:',answer);
    score -= 1;
  }

  if(score < 0){
    score = 0;
  }
  console.log(`Your score is ${score}`);
}

function quizMcq(listOfAnswers,question,answer){
  let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  console.log('\n');
  if(listOfAnswers[userAnswer] === answer){
    console.log('You are Right.');
    score = score + 2;
  } else{
    console.log('You are Wrong.');
    console.log('The Correct Answer is: ',answer);
    score = score - 1;
  }

  if(score < 0){
    score = 0;
  }
  console.log('Score is: ',score);
}

for(var i = 0;i<questionsList.length;i++){
  console.log('\n');
  quiz(questionsList[i].question,questionsList[i].answer);
  console.log('*******************************');
}

for(var i = 0;i < mcqList.length; i++){
  console.log('\n');
  quizMcq(mcqList[i].array,mcqList[i].question,mcqList[i].answer);
  console.log('*******************************');
}

console.log('\n');
console.log('Congratulations,',username,'your Total Score is: ',score);
