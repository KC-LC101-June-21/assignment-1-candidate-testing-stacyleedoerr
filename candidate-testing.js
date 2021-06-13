const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space?", "True or false: 5 kilometer == 5000 meters?", "(5 + 3)/2 * 10 = ?", `Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?`, "What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  candidateName = input.question("Candidate Name: ");
  // TODO 1.1b: Ask for candidate's name //

}
//candidateName = askForName()
//askForName()
//console.log(candidateName)

function askQuestion() {
  for (let i = 0; i < questions.length; i++){
 candidateAnswers[i] = input.question([i + 1] + ') ' + questions[i]  + ' ');
 console.log(`Your Answer: ${candidateAnswers[i]} \nCorrect answer: ${correctAnswers[i]} \n`);
}
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//candidateAnswer = input.question(question)

}


function gradeQuiz(candidateAnswers) {
  
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  let grade = 0;
    for (let i = 0;i < questions.length; i++) {
      if (candidateAnswers[i] === correctAnswers[i]) {
        grade += 1;
      }
    }  
   finalGrade = ((grade / correctAnswers.length) * 100)
    console.log(`>>> Overall Grade: ${finalGrade}% (${grade} of 5 responses correct) <<<`)
    
      return grade;
}
 
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  let grade = gradeQuiz(this.candidateAnswers);

  if (grade >= 4) {
      console.log('>>> Status: PASSED <<<');
  } else {
      console.log(">>> Status: FAILED <<<");
  }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};