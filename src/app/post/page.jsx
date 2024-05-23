import PostCard from "@/src/components/PostCard";
import "./Post.css";

async function loadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return data;
}

async function Post() {
  const post = await loadPost();

  return (
    <div className="grid">
      {post.map((post) => (
        <PostCard post={post} key={post.id}></PostCard>
      ))}
    </div>
  );
}

export default Post;
