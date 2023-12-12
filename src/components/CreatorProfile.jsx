import React from 'react'
import { Icon } from '@iconify/react';
import { Button, ButtonGroup } from 'react-bootstrap'

export default function CreatorProfile({ creator }) {
  return (
    <div className='d-flex flex-column gap-4 justify-content-center align-items-center'>
        <div className='w-50 pb-5 border-2 border-top border-black'>
        <div className='d-flex'>
            <div className='py-4'>
                <img className='rounded-circle' width={80} height={80} src={creator.img} alt="profile_image"/>
            </div>
            <div className='d-flex flex-column me-auto p-4 justify-content-center align-items-start'>
                <h4>{ creator.name }</h4>
                <h6>April 15, 2020 . 4 mins ago read</h6>
            </div>
            <div className='d-flex justify-content-end align-items-center'>
                <ButtonGroup className='shadow' aria-label="First group">
                    <Button className='border border-secondary ' variant="white"><span className='px-1'><Icon icon="ic:round-facebook" color="black" width="20" height="20" /></span></Button>
                    <Button className='border border-secondary ' variant="white"><span className='px-1'><Icon icon="mdi:twitter" color="black" width="20" height="20" /></span></Button>
                </ButtonGroup>
            </div>
        </div>
        <div>
            <p className='text-wrap lh-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consequuntur neque optio praesentium asperiores repudiandae. Vero necessitatibus mollitia quas aut ullam magnam possimus! Ratione in facere quos itaque illum repudiandae?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum eius libero vel suscipit aliquam rem voluptatem beatae numquam. Distinctio itaque atque dignissimos nesciunt repellendus harum repellat placeat libero ipsum voluptatem.
            </p>
        </div>
        </div>
    </div>
  )
}
