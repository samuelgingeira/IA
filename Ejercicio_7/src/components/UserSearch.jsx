import React, { useEffect, useState } from 'react';

export default function UserSearch() {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (term.trim() === '') {
      setResults([]);
      return;
    }

    setLoading(true);
    const timeoutId = setTimeout(() => {
      // Lanzar la petición tras 500ms de inactividad
      (async () => {
        try {
          const res = await fetch(`https://jsonplaceholder.typicode.com/users?username=${encodeURIComponent(term)}`);
          if (!res.ok) throw new Error('Error fetching users');
          const data = await res.json();
          setResults(data);
        } catch (err) {
          console.error(err);
          setResults([]);
        } finally {
          setLoading(false);
        }
      })();
    }, 500); // 500 ms

    // cleanup: si term cambia antes de 500ms, cancelamos el timeout
    return () => clearTimeout(timeoutId);
  }, [term]);

  return (
    <div style={{ marginTop: 8 }}>
      <input
        placeholder="Buscar username..."
        value={term}
        onChange={e => setTerm(e.target.value)}
        style={{ padding: 6, width: 240 }}
      />
      {loading && <p>Cargando usuarios...</p>}
      <ul>
        {results.map(user => (
          <li key={user.id}>
            {user.username} — {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
