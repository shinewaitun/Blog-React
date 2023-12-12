import React from 'react'

export default function JumboltronText({ img }) {
  return (
    <div className='p-5 d-flex flex-column gap-4 justify-content-center align-items-center'>
        <img width={700} height={400} src={img} alt="image_1" />
        <h1 className='w-50 text-center fw-bold text-black'>A few words about this blog platform, Ghost and how this site was made</h1>
        <div className='w-50 pb-5 border-bottom border-black border-2'>
            <h5 className='w-75 text-center mx-auto'>Why Ghost (& Figma) instead of Medium, WordPress or other options?</h5>
        </div>
    </div>
  )
}
