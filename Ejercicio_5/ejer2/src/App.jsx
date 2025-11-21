import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ArticleList from './ArticleList';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmptyState from './EmptyState';

const allArticles = [
  { id: 'a1', title: 'React 19 ya está aquí', category: 'React', pinned: true },
  { id: 'a2', title: 'Novedades en CSS: View Transitions', category: 'CSS', pinned: false },
  { id: 'a3', title: 'State Management con Zustand', category: 'React', pinned: false },
  { id: 'a4', title: 'El futuro de JavaScript: Records y Tuples', category: 'JavaScript', pinned: false },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [articles, setArticles] = useState(allArticles);


  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || article.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handlePin = (id) => {
    setArticles(prevArticles => {
      return prevArticles.map(article => {
        if (article.id === id) return { ...article, pinned: true };
        return { ...article, pinned: false };
      }).sort((a, b) => b.pinned - a.pinned); 
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Feed de Noticias</h1>
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="btn-group mb-3">
        {['All', 'React', 'CSS', 'JavaScript'].map(cat => (
          <button
            key={cat}
            className={`btn btn-${categoryFilter === cat ? 'primary' : 'outline-primary'}`}
            onClick={() => setCategoryFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <hr />

      {filteredArticles.length === 0 ? (
        <EmptyState />
      ) : (
        <ArticleList articles={filteredArticles} onPin={handlePin} />
      )}
    </div>
  );
}

export default App;
