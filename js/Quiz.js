function Quiz(questions) {
  this.questions = questions;
  this.index = 0;
  this.score = 0;
}

Quiz.prototype.getQuestion = function (index) {
  return this.questions[index];
}

Quiz.prototype.nextQuestion = function() {
  if (this.index == questions.length) {
    return "Your score is = " + this.score;
  } else {
    var question =  this.getQuestion(this.index).getText() + "\n" + this.getQuestion(this.index).getOptions();
    this.index++;
    return question;
  }
}

Quiz.prototype.guess = function(answer) {
  var lastIndex = this.index-1;
  if (this.getQuestion(lastIndex).isCorrect(answer)) {
    this.score++;
  }
}

var questions = [];
var q1 = new Question("How many states are there in India", ["25","26", "28", "30"], "28");
var q2 = new Question("How many times indian cricket team has won world cup", ["1","2", "3", "4"], "3");
questions.push(q1);
questions.push(q2);

var quiz = new Quiz(questions);

