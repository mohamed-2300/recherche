import React, { useState } from 'react';

const Article = ({ id, tit, cont, aut }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment("");
    }
  };

  return (
    <div className="article">
      <h2>{tit}</h2>
      <p>{cont}</p>
      <p><strong>Auteur :</strong> {aut}</p>

      <div className="comments-section">
        <h3>Commentaires :</h3>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment, index) => (
              <li key={`${id}-comment-${index}`}>{comment}</li>
            ))}
          </ul>
        ) : (
          <p>Aucun commentaire pour l'instant.</p>
        )}
      </div>

      <form onSubmit={handleAddComment}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Écrivez un commentaire..."
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default Article;
