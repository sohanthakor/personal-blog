import { useParams } from 'react-router-dom';
import posts from '../Data/Posts';

export default function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) return <div className="p-4">Post not found.</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-2">{post.title}</h1>
      <p className="text-gray-600">{post.date}</p>
      <p className="mt-4">{post.content}</p>
    </div>
  );
}
