import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import App from './App';

function Connexion() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    const enteredUsername = username; // Utilisez directement la valeur de l'état
    const enteredPassword = password; // Utilisez directement la valeur de l'état

    // Vérifie si le nom d'utilisateur contient le mot "victime" et si le mot de passe est "harceleur"
    if (enteredUsername.toLowerCase().includes('victime') && enteredPassword === 'harceleur') {
      setIsLoggedIn(true);
      setErrorMessage('');
    } else {
      setIsLoggedIn(false);
      setErrorMessage('Le nom d\'utilisateur ou le mot de passe n\'est pas valide');
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h1 className='App header'>Bienvenue dans la plateforme Stop Harcèlement au Travail (SHAT).</h1>
      <h2 className='App header'>Entrez vos identifiants fournis par votre entreprise pour participer au projet de sensibilisation contre le harcèlement au travail</h2>
      {isLoggedIn ? (
        <div>
          <App/> {/* Lien vers la classe App */}
        </div>
      ) : (
        <form onSubmit={handleLogin} className='App header'>
          <input type="text" value={username} onChange={handleUsernameChange} placeholder="Nom d'utilisateur" />
          <br />
          <br />
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="Mot de passe" />
          <br />
          <br />
          <button type="submit">Se connecter</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      )}
    </div>
  );
}

export default Connexion;
