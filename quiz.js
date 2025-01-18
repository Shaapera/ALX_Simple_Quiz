const submitAnswer = document.getElementById("submit-answer")
function checkAnswer() {
    const userAnswer = document.querySelector("input[name ="quiz,"]:checked")
    const correctAnswer = "4";
    if (parseInt(userAnswer.value) === correctAnswer) {
        feedback.textContent = "Correct! Well done."
    }
    else {
        feedback.textContent="That's incorrect. Try again!"
    }

}
submitAnswer.addEventListener("click", checkAnswer);