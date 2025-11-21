import React, { useEffect, useState } from 'react';

export default function PostComments({ postId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!postId) return;

    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchComments() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, { signal });
        if (!res.ok) throw new Error('Error fetching comments');
        const data = await res.json();
        setComments(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('No se pudieron cargar los comentarios.');
          setComments([]);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchComments();

    return () => controller.abort();
  }, [postId]);

  if (isLoading) return <p>Cargando comentarios...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!comments.length) return <p>No hay comentarios para este post.</p>;

  return (
    <div style={{ marginTop: 8 }}>
      <h4>Comentarios ({comments.length})</h4>
      <ul>
        {comments.map(c => (
          <li key={c.id}>
            <strong>{c.name}</strong> ({c.email}): <br />
            {c.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
