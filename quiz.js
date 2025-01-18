const submitAnswer = document.getElementById("submit-answer")
function checkAnswer() {
    const userAnswer = document.querySelector("input[name ="quiz,"]:checked")
    const correctAnswer = "4";
    if (parseInt(userAnswer.value) === correctAnswer) {
        feedback.textContent = "correct! well done."
    }
    else {
        feedback.textContent="that is incorrect. Try again"
    }

}
submitAnswer.addEventListener("click", checkAnswer);