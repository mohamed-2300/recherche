import React from 'react';
import Article from './divArticle';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <Article 
          key={article.id} 
          id={article.id}
          tit={article.title} 
          cont={article.content} 
          aut={article.author} 
        />
      ))}
    </div>
  );
};

export default ArticleList;
