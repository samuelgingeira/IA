import React, { useEffect, useState } from 'react';

export default function PostDetails({ postId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!postId) return;

    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchPost() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { signal });
        if (!res.ok) throw new Error('Error fetching post');
        const data = await res.json();
        setPost(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setPost(null);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchPost();

    // cleanup: abort si postId cambia o componente se desmonta
    return () => controller.abort();
  }, [postId]); // <-- efecto se vuelve a ejecutar cada vez que cambie postId

  if (loading) return <p>Cargando post...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>Selecciona un post válido.</p>;

  return (
    <div style={{ border: '1px solid #ddd', padding: 12, marginTop: 8 }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
