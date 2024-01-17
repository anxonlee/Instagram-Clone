import React, { useEffect, useState } from 'react';

function Post() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3005/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log((error)));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <p>{post.acName}</p>
            <h2>{post.description}</h2>
            <p><img src='({post.imgUrl})'/></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
