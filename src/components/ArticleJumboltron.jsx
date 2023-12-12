import React from 'react'
import img from 'src/assets/images/image 2.png'

export default function ArticleJumboltron() {
  return (
    <div className='p-5 d-flex flex-column gap-4 justify-content-center align-items-center'>
        <h1 className='w-50 text-center fw-bold text-black'>A few words about this blog platform, Ghost and how this site was made</h1>
        <div className='w-50 pb-5'>
            <h5 className='w-75 text-center mx-auto'>Why Ghost (& Figma) instead of Medium, WordPress or other options?</h5>
        </div>
        <img className='w-100' src={img} alt="image_1" />
    </div>
  )
}
