import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../BlogData';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) return <h2 style={{ padding: '2rem' }}>Blog not found</h2>;

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '2rem' }}>
      {blog.imageUrl && (
        <img
          src={blog.imageUrl}
          alt={blog.title}
          style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem' }}
        />
      )}
      <h2>{blog.title}</h2>
      <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;