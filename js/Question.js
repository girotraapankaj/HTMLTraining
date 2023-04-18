function Question(text, options, answer) {
  this.text = text;
  this.options = options;
  this.answer = answer;
}

Question.prototype.getText = function() {
  return this.text;
}

Question.prototype.getOptions = function() {
  return this.options;
}

Question.prototype.isCorrect = function(ans) {
  return this.answer === ans;
}
