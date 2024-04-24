import React from 'react'
import { useSelector } from 'react-redux'
import NewsCard from '../../molecules/blogPage/NewsCard';


function NewsListing() {
  interface RootState {
    news: any;
  }

  // const {news} = useSelector((state) => state.news)

  const news: any = useSelector<RootState>((state) => state.news);

  console.log(news)

 const newsData = (news.news.articles)

//  console.log(data[0].title)
  // for(let i = 0; i < news.length;i++){
  //   console.log(i)
  // }




  return (
    <div>
      {newsData.map((news:any)=>(
        <NewsCard key={news.articles} news={news} />
      ))}
    </div>
  )
}

export default NewsListing