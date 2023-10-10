import React, { useState } from 'react';

function Questionnaire({ questionsAndAnswers }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const [score, setScore] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsAndAnswers.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswerIndex(-1); // Réinitialiser la réponse sélectionnée pour la nouvelle question
      setShowCorrectAnswer(false); // Cacher la réponse correcte pour la nouvelle question
    } else {
      // Afficher le score final et la liste des bonnes réponses à la fin du questionnaire
      const correctAnswers = questionsAndAnswers.filter((question, index) => {
        return index === question.correctAnswer;
      });

      alert(`Score final : ${score}/${questionsAndAnswers.length}\n\nListe des bonnes réponses :\n${correctAnswers.map((question, index) => `Question ${index + 1}: ${question.answers[question.correctAnswer]}`).join('\n')}`);
    }
  };

  const handleAnswerClick = (index) => {
    if (index === questionsAndAnswers[currentQuestionIndex].correctAnswer) {
      // Si la réponse est correcte, incrémentez le score
      setScore(score + 1);
    } else {
      // Si la réponse est incorrecte, affichez la réponse correcte
      setShowCorrectAnswer(true);
    }
    setSelectedAnswerIndex(index);
  };

  return (
    <div>
      {currentQuestionIndex < questionsAndAnswers.length ? (
        <div>
          <h1 className='App header'>
            Question {currentQuestionIndex + 1} : {questionsAndAnswers[currentQuestionIndex].question}
          </h1>
          <ul>
            {questionsAndAnswers[currentQuestionIndex].answers.map((answer, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name="answer"
                  id={`answer${index}`}
                  value={answer}
                  checked={selectedAnswerIndex === index}
                  onChange={() => handleAnswerClick(index)}
                  disabled={showCorrectAnswer}
                />
                <label htmlFor={`answer${index}`}>{answer}</label>
              </li>
            ))}
          </ul>
          {showCorrectAnswer && (
            <p>La réponse correcte est : {questionsAndAnswers[currentQuestionIndex].answers[questionsAndAnswers[currentQuestionIndex].correctAnswer]}</p>
          )}
          <button onClick={handleNextQuestion} disabled={selectedAnswerIndex === -1 && !showCorrectAnswer}>
            Question suivante
          </button>
        </div>
      ) : (
        <p>Fin du questionnaire</p>
      )}
    </div>
  );
}

export default Questionnaire;
