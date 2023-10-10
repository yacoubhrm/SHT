import React, { Component } from 'react';
import './App.css';
import Questionnaire from './Questionnaire';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionsAndAnswers: [
        {
          question: 'Quelle est votre couleur préférée ?',
          answers: ['Rouge', 'Bleu', 'Vert', 'Jaune'],
          correctAnswer: 0, // Indice de la réponse correcte
        },
        {
          question: 'Quel est votre animal préféré ?',
          answers: ['Chien', 'Chat', 'Lion', 'Oiseau'],
          correctAnswer: 1, // Indice de la réponse correcte
        },
        // Ajoutez d'autres questions et réponses ici
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Questionnaire questionsAndAnswers={this.state.questionsAndAnswers} />
      </div>
    );
  }
}

export default App;
