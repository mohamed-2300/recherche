import React from 'react';
import ArticleList from './afichageArticle';
import './App.css';

function App() {
  const articles = [
    {
      id: 1,
      title: "Introduction à React",
      content: "Découvrez les bases de React et comment créer vos premiers composants.",
      author: "Mohamed",
    },
    {
      id: 2,
      title: "Gestion d'état avec Redux",
      content: "Apprenez à gérer l'état global de votre application avec Redux.",
      author: "Ahmed",
    },
    {
      id: 3,
      title: "Hooks React : Guide complet",
      content: "Un guide détaillé sur l'utilisation des hooks dans vos projets React.",
      author: "abdelrahman",
    },
    {
      id: 4,
      title: "React Router : Navigation simplifiée",
      content: "Comprenez comment utiliser React Router pour gérer les routes dans votre application.",
      author: "abdulah",
    },
  ];

  return (
    <div className="App">
      <h1>Aprendre React</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
