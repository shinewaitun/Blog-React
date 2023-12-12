import React from 'react'

export default function Signup() {
  return (
    <div className='d-flex flex-column gap-4 justify-content-center align-items-center'>
        <div className='w-50 pb-5 border-top border-4 border-black'>
          <div className='d-flex justify-content-center align-align-items-center flex-column pb-5 border border-1 border-black'>
              <h1 className='text-center text-black pt-5 px-3'>Sign up for the newsletter</h1>
              <h5 className='text-warp text-center pt-3 px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ratione nesciunt architecto</h5>
              <div className='w-100 d-flex justify-content-center gap-2 py-4'>
                <input className='w-50 rounded' height={200} type="text" />
                <button className='btn btn-dark'>SIGN UP</button>
              </div>
          </div>
        </div>
    </div>
  )
}
