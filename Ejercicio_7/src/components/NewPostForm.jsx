import React, { useCallback, useEffect, useState } from 'react';

export default function NewPostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [createdPost, setCreatedPost] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // addPost definida y memorizada con useCallback
  const addPost = useCallback(async () => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, userId: 1 })
      });
      if (!res.ok) throw new Error('Error creando post');
      const data = await res.json();
      // jsonplaceholder no guarda realmente pero devuelve un objeto simulado con id
      setCreatedPost(data);
      setTitle('');
      setBody('');
    } catch (err) {
      setError('No se pudo crear el post.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }, [title, body]); // dependencia: estado del formulario

  // useEffect que se ejecuta cuando se crea un post con éxito.
  // Incluye addPost en la matriz de dependencias (tal y como pide el enunciado).
  useEffect(() => {
    if (createdPost) {
      console.log('Post creado:', createdPost);
      // Aquí podrías mostrar una notificación en la UI
      // (por ejemplo, setTimeout para ocultar mensaje, o un toast)
      // Ejemplo simple: alert (puedes cambiar por algo más elegante)
      // alert(`Post creado con id ${createdPost.id}`);
    }
  }, [createdPost, addPost]); // <-- addPost incluida en la matriz de dependencias

  function handleSubmit(e) {
    e.preventDefault();
    // llamamos a addPost al enviar el formulario
    addPost();
  }

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ddd', padding: 12, maxWidth: 600 }}>
      <div>
        <label>
          Título:
          <input value={title} onChange={e => setTitle(e.target.value)} required style={{ width: '100%', padding: 6, marginTop: 4 }} />
        </label>
      </div>
      <div style={{ marginTop: 8 }}>
        <label>
          Body:
          <textarea value={body} onChange={e => setBody(e.target.value)} required style={{ width: '100%', padding: 6, marginTop: 4 }} />
        </label>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={submitting} style={{ marginTop: 8 }}>
        {submitting ? 'Enviando...' : 'Crear post'}
      </button>

      {createdPost && (
        <div style={{ marginTop: 12, padding: 8, background: '#f6f6f6' }}>
          <strong>Post creado:</strong>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(createdPost, null, 2)}</pre>
        </div>
      )}
    </form>
  );
}
