import React from 'react'

import svg from 'src/assets/svg/Group 10.svg'
import data from 'src/data/data.json'
import img from 'src/assets/images/image 2.png'

import ArticleJumboltron from 'src/components/ArticleJumboltron'
import CreatorProfile from 'src/components/CreatorProfile'
import ArticleDetails from 'src/components/ArticleDetails'
import AboutCreator from 'src/components/AboutCreator'
import SuggestArticles from 'src/components/SuggestArticles'
import Signup from 'src/components/Signup'

export default function ArticlePage() {
  return (
    <div>
        <ArticleJumboltron img={img}/>
        <CreatorProfile creator={data.user}/>
        <ArticleDetails/>
        <AboutCreator creator={data.user}/>
        <div className='w-100 my-4 border-top border-2 border-black position-relative'>
          <img className='position-absolute translate-middle start-50' src={svg} alt="svg" />
        </div>
        <h1 className='py-4 text-center text-black'>What to read next</h1>
        <SuggestArticles articles={data.articles}/>
        <Signup/>
    </div>
  )
}
