import React from 'react';
import Article from './Article';

function ArticleList({ articles, onPin }) {
  return (
    <>
      {articles.map(article => (
        <Article key={article.id} article={article} onPin={onPin} />
      ))}
    </>
  );
}

export default ArticleList;
