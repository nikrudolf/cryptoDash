import { useEffect, useState } from "react"
import axios from "axios"

const NewsFeed = () => {

  const [articles, setArticles] = useState(null)

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
        'x-rapidapi-key': '443b6a8c4fmsh7b184418946b25cp15be7ajsn097be1c09636'
      }
    }

    axios.request(options).then((response) => {
      console.log(response.data)
      setArticles(response.data)
    }).catch((error) => {
      console.error(error)
    });
  }, [] )

  const firstArticles = articles?.slice(0, 3)

  const secondArticles = articles?.slice(70, 73)

  const thirdArticles = articles?.slice(150, 153)

  return (
    <div className="news-feed">
      <h2>NewsFeed</h2>
      {firstArticles?.map((article, _index) => (<div key={_index}>
        <b>{article.title}</b>
        <p>Weiterlesen auf: <a href={article.url}> {article.source}</a></p>
      </div>))}
      {secondArticles?.map((article, _index) => (<div key={_index}>
        <b>{article.title}</b>
        <p>Weiterlesen auf: <a href={article.url}> {article.source}</a></p>
      </div>))}
      {thirdArticles?.map((article, _index) => (<div key={_index}>
        <b>{article.title}</b>
        <p>Weiterlesen auf: <a href={article.url}> {article.source}</a></p>
      </div>))}
    </div>
  )

}

export default NewsFeed
