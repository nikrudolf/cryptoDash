import { useEffect, useState } from "react"
import axios from "axios"


//API Code
const NewsFeed = () => {

  const [articles, setArticles] = useState(null)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
      }
    }

    axios.request(options).then((response) => {
      console.log(response.data)
      setArticles(response.data)
    }).catch((error) => {
      console.error(error)
    });
  }, [] )

  //Articles are chosen from diffrent slices becuase they are ordered by source
  const firstArticles = articles?.slice(0, 3)

  const secondArticles = articles?.slice(70, 73)

  const thirdArticles = articles?.slice(150, 153)


  // display
  return (
    <div className="news-feed">
      <h2>NewsFeed</h2>
      {firstArticles?.map((article, _index) => (<a href={article.url}><div key={_index} className="news-feed-items">
        <b className="headline">{article.title}</b>
        <p className="link">Auf {article.source}</p>
      </div></a>))}
      {secondArticles?.map((article, _index) => (<a href={article.url}><div key={_index} className="news-feed-items">
        <b className="headline">{article.title}</b>
        <p className="link">Auf {article.source}</p>
      </div></a>))}
      {thirdArticles?.map((article, _index) => (<a href={article.url}><div key={_index} className="news-feed-items">
        <b className="headline">{article.title}</b>
        <p className="link">Auf {article.source}</p>
      </div></a>))}
    </div>
  )

}

export default NewsFeed
