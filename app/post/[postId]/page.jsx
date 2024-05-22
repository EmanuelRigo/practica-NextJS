import Post from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.postId);

  return (
    <div>
      post Page
      <h1> {post.id}</h1>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <hr />
      <h3>otras publicaciones</h3>
      <Suspense fallback={<div>Cargando publicaciones...</div>}>
        <Post></Post>
      </Suspense>
    </div>
  );
}

export default Page;
