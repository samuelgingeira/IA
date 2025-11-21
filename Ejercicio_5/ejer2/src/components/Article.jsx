import React from 'react';

function Article({ article, onPin }) {
  return (
    <div className={`card mb-3 ${article.pinned ? 'border-warning' : ''}`}>
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">Categoría: {article.category}</p>
        {article.pinned && <span className="badge bg-warning text-dark">Fijado</span>}
        <button 
          className="btn btn-sm btn-outline-secondary ms-2"
          onClick={() => onPin(article.id)}
        >
          Fijar
        </button>
      </div>
    </div>
  );
}

export default Article;
