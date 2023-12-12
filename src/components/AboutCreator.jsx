import React from 'react'

export default function AboutCreator({ creator }) {
  return (
    <div className='d-flex flex-column gap-4 justify-content-center align-items-center'>
        <div className='w-50 pb-5 border-2 border-top border-dark-subtle '>
        <div className='d-flex'>
            <div className='py-4'>
                <img className='rounded-circle' width={80} height={80} src={creator.img} alt="profile_image"/>
            </div>
            <div className='d-flex flex-column me-auto p-4 justify-content-center align-items-start'>
                <p className='text-warp'>
                <span className='text-lg fw-bold text-uppercase'>{ creator.name }</span> { creator.content }
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}
