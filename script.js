let score = 0;
let num1, num2, correctAnswer;

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const submitButton = document.getElementById('submit');

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;

    questionElement.textContent = `What is ${num1} + ${num2}?`;
}

function checkAnswer() {
    const userAnswer = parseInt(answerElement.value);
    if (userAnswer === correctAnswer) {
        resultElement.textContent = 'Correct!';
        score++;
    } else {
        resultElement.textContent = `Wrong! The correct answer was ${correctAnswer}.`;
    }
    scoreElement.textContent = `Score: ${score}`;
    answerElement.value = '';
    generateQuestion();
}

submitButton.addEventListener('click', checkAnswer);
window.addEventListener('load', generateQuestion);