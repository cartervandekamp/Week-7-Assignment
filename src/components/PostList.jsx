import React, { useEffect, useState } from "react";

export default function PostList({ article }) {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const author_url = `https://jsonplaceholder.typicode.com/users/${article.userId}`;

    async function getAuthor() {
      const response = await fetch(author_url);
      const data = await response.json();
      setAuthor(data);
    }

    getAuthor();
  }, [article.userId]);

  return (
    <div className="article post-list-item">
      <h4 className="article-title">{article.title}</h4>
      {author && <p className="article-author">By: {author.name}</p>}
      <p className="article-body">{article.body}</p>
    </div>
  );
}
