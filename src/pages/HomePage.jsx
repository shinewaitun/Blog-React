import React from 'react'
import NavBar from 'src/layouts/NavBar'
import ListingJumboltron from 'src/layouts/ListingJumboltron'
import AllArticles from 'src/components/AllArticles'
import Footer from 'src/layouts/Footer'
import img from 'src/assets/images/image 2.png'
import data from 'src/data/data.json'

export default function HomePage() {
  return (
    <div className="App">
      <NavBar/>
      <ListingJumboltron img={img}/>
      <h1 className='text-center text-black fw-bold'>All Articles</h1>
      <AllArticles articles={data.articles}/>
      <Footer/>
    </div>
  )
}
