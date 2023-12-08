import React from 'react'
import { Card } from 'react-bootstrap'

export default function BlogCard({ img,title }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Text>
          {title}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
