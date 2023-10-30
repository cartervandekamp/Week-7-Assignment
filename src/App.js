import React, { useEffect, useState } from "react";

import "./styles.css";
import PostList from "./components/PostList";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const source_url = "https://jsonplaceholder.typicode.com/posts";

    async function getArticles() {
      try {
        const response = await fetch(source_url);
        const data = await response.json();
        setArticles(data);

        setTimeout(() => setLoading(false), 1500);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    getArticles();
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">Recent Posts</h1>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        articles.map(function (article) {
          return <PostList key={article.id} article={article} />;
        })
      )}
    </div>
  );
}
