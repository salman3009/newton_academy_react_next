import React, { useState, useEffect } from 'react'
import '../styles/App.css';

const App = () => {
  const [category, setCategory] = useState("general");
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://gnews.io/api/v4/top-headlines?category=${category}&apikey=7a5a665a40c4505ff3945f1e74e0c0f0&max=10&lang=en`)
      .then((response) => response.json())
      .then((result) => result.articles)
      .then((data) => {
        setNewsData(data);
        console.log(newsData);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <div id="main">
      <h1 className='heading'>Top 10 {category} news.</h1>
      <select value={category} onChange={(event) => setCategory(event.target.value)}>
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
        <option value="world">World</option>
        <option value="entertainment">Entertainment</option>
        <option value="science">Science</option>
      </select>
      {loading ? (
        <p className='loader'>Loading...</p>
      ) : (
        <ol>
          {newsData.map((news) => (
            <li key={news.title}>
              <img className='news-img' src={news.image} alt={news.title}/>
              <section className='new-title-content-author'>
                <h3 className='news-title'>{news.title}</h3>
                <section className='new-content-author'>
                  <p className='news-description'>{news.description}</p>
                  <p className='news-source'><strong>Source:</strong> {news.source.name}</p>
                </section>
              </section>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}


export default App;
