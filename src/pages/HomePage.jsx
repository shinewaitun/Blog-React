import React from 'react'
import AllArticles from 'src/components/AllArticles'
import ListingJumboltron from 'src/components/ListingJumboltron'
import data from 'src/data/data.json'
import img from 'src/assets/images/image 2.png'

export default function HomePage() {
  return (
    <div>
        <ListingJumboltron img={img} />
        <h1 className='text-center text-black fw-bold'>All Articles</h1>
        <AllArticles articles={data.articles}/>
    </div>
  )
}
