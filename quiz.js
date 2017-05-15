function checkAnswers() {
  var quizScore = 0
  var questionOneAnswer = document.querySelector("input[name='1']:checked").value
  if (questionOneAnswer == "browncamo") {
    quizScore = quizScore + 1
  }
  var questionTwoAnswer = document.querySelector("input[name='2']:checked").value
  if (questionTwoAnswer == "england") {
    quizScore = quizScore + 1
  }
    var questionTwoAnswer = document.querySelector("input[name='3']:checked").value
  if (questionTwoAnswer == "new york") {
    quizScore = quizScore + 1
  }
    var questionTwoAnswer = document.querySelector("input[name='4']:checked").value
  if (questionTwoAnswer == "turtle dove") {
    quizScore = quizScore + 1
  }
    var questionTwoAnswer = document.querySelector("input[name='5']:checked").value
  if (questionTwoAnswer == "box logo") {
    quizScore = quizScore + 1
  }
    var questionTwoAnswer = document.querySelector("input[name='6']:checked").value
  if (questionTwoAnswer == "jerry") {
    quizScore = quizScore + 1
  }
    var questionTwoAnswer = document.querySelector("input[name='7']:checked").value
  if (questionTwoAnswer == "kanye") {
    quizScore = quizScore + 1
  }
    var questionTwoAnswer = document.querySelector("input[name='8']:checked").value
  if (questionTwoAnswer == "supreme") {
    quizScore = quizScore + 1
  }
    var questionTwoAnswer = document.querySelector("input[name='9']:checked").value
  if (questionTwoAnswer == "all") {
    quizScore = quizScore + 1
  }
    var questionTwoAnswer = document.querySelector("input[name='10']:checked").value
  if (questionTwoAnswer == "preme") {
    quizScore = quizScore + 1
  }
  alert("Your score is...")
  alert(quizScore)
}
