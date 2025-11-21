import React, { useState } from 'react';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import UserSearch from './components/UserSearch';
import PostComments from './components/PostComments';
import NewPostForm from './components/NewPostForm';

export default function App() {
  const [postId, setPostId] = useState(1);

  return (
    <div style={{ padding: 20 }}>
      <h1>Ejercicios useEffect / Fetch (jsonplaceholder)</h1>

      <section style={{ marginBottom: 24 }}>
        <h2>Ejercicio 1 — PostList</h2>
        <PostList />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>Ejercicio 2 — PostDetails</h2>
        <label>
          Post ID:
          <input
            type="number"
            min="1"
            value={postId}
            onChange={e => setPostId(Number(e.target.value) || 1)}
            style={{ marginLeft: 8 }}
          />
        </label>
        <PostDetails postId={postId} />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>Ejercicio 3 — UserSearch</h2>
        <UserSearch />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>Ejercicio 4 — PostComments</h2>
        <PostComments postId={postId} />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>Ejercicio 5 — NewPostForm</h2>
        <NewPostForm />
      </section>
    </div>
  );
}
