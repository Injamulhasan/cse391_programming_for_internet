document.addEventListener('DOMContentLoaded', function() {
  const questions = [
      {
          question: "What is the capital of Missouri?",
          answers: { A: "St. Louis", B: "Jefferson City", C: "Kansas City" },
          correct: "B"
      },
      {
          question: "How many ounces in a pound?",
          answers: { A: "10", B: "12", C: "16" },
          correct: "C"
      },
      {
          question: "Who was the first person to set foot on the moon?",
          answers: { A: "Buzz Aldrin", B: "Yuri Gagarin", C: "Neil Armstrong" },
          correct: "C"
      },
      {
          question: "Who holds the Major League Baseball record for most home runs in a season?",
          answers: { A: "Barry Bonds", B: "Mark McGwire", C: "Sammy Sosa" },
          correct: "A"
      },
      {
          question: "In what year was University of Liverpool founded?",
          answers: { A: "1250", B: "1881", C: "1900" },
          correct: "B"
      },
      {
          question: "What is the largest planet in our Solar System?",
          answers: { A: "Earth", B: "Jupiter", C: "Saturn" },
          correct: "B"
      },
      {
          question: "What is the smallest prime number?",
          answers: { A: "1", B: "2", C: "3" },
          correct: "B"
      },
      {
          question: "Who wrote 'To be, or not to be'?",
          answers: { A: "Charles Dickens", B: "Jane Austen", C: "William Shakespeare" },
          correct: "C"
      },
      {
          question: "Which element has the chemical symbol 'O'?",
          answers: { A: "Oxygen", B: "Gold", C: "Osmium" },
          correct: "A"
      },
      {
          question: "What is the capital of France?",
          answers: { A: "Berlin", B: "Madrid", C: "Paris" },
          correct: "C"
      }
  ];

  const setupForm = document.getElementById('setup-form');
  const quizContainer = document.getElementById('quiz-container');
  const quizQuestionsContainer = document.getElementById('quiz-questions');
  const quizResultsContainer = document.getElementById('quiz-results');
  const startQuizButton = document.getElementById('start-quiz');
  const submitQuizButton = document.getElementById('submit-quiz');
  const resetQuizButton = document.getElementById('reset-quiz');

  startQuizButton.addEventListener('click', startQuiz);
  submitQuizButton.addEventListener('click', submitQuiz);
  resetQuizButton.addEventListener('click', resetQuiz);

  function startQuiz() {
      const numQuestions = parseInt(document.getElementById('num-questions').value) || 5;
      const selectedQuestions = selectRandomQuestions(numQuestions);

      setupForm.style.display = 'none';
      quizContainer.style.display = 'block';
      quizResultsContainer.style.display = 'none';

      quizQuestionsContainer.innerHTML = '';

      selectedQuestions.forEach((question, index) => {
          const questionElement = document.createElement('div');
          questionElement.className = 'question';
          questionElement.innerHTML = `
              <p>${index + 1}. ${question.question}</p>
              <label class="answer"><input type="radio" name="question${index}" value="A"> A) ${question.answers.A}</label>
              <label class="answer"><input type="radio" name="question${index}" value="B"> B) ${question.answers.B}</label>
              <label class="answer"><input type="radio" name="question${index}" value="C"> C) ${question.answers.C}</label>
          `;
          quizQuestionsContainer.appendChild(questionElement);
      });
  }

  function selectRandomQuestions(num) {
      const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
      return shuffledQuestions.slice(0, num);
  }

  function submitQuiz() {
      const answers = document.querySelectorAll('.question input[type="radio"]:checked');
      let correctCount = 0;
      const totalQuestions = answers.length;

      quizResultsContainer.innerHTML = '';

      answers.forEach((answer, index) => {
          const questionIndex = parseInt(answer.name.replace('question', ''));
          const question = questions[questionIndex];
          const userAnswer = answer.value;
          const correctAnswer = question.correct;

          const resultElement = document.createElement('div');
          resultElement.className = 'result';

          if (userAnswer === correctAnswer) {
              resultElement.innerHTML = `<p>${index + 1}. ${question.question} <br> You guessed ${userAnswer}) ${question.answers[userAnswer]} <br> <strong>CORRECT</strong></p>`;
              correctCount++;
          } else {
              resultElement.innerHTML = `<p>${index + 1}. ${question.question} <br> You guessed ${userAnswer}) ${question.answers[userAnswer]} <br> <strong>INCORRECT</strong>: the correct answer is ${correctAnswer}) ${question.answers[correctAnswer]}</p>`;
          }

          quizResultsContainer.appendChild(resultElement);
      });

      const scorePercentage = (correctCount / totalQuestions) * 100;

      const scoreElement = document.createElement('div');
      scoreElement.className = 'score';
      scoreElement.innerHTML = `<p>You answered ${correctCount} out of ${totalQuestions} questions correctly (${scorePercentage.toFixed(2)}%).</p>`;

      quizResultsContainer.appendChild(scoreElement);
      quizResultsContainer.appendChild(resetQuizButton);
      quizResultsContainer.style.display = 'block';
  }

  function resetQuiz() {
      setupForm.style.display = 'block';
      quizContainer.style.display = 'none';
      quizResultsContainer.style.display = 'none';
      document.getElementById('num-questions').value = 5;
      quizQuestionsContainer.innerHTML = '';
      quizResultsContainer.innerHTML = '';
  }
});
