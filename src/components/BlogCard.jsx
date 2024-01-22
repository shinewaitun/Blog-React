import React from "react";
import { Card } from "react-bootstrap";

export default function BlogCard({ img, title }) {
  return (
    <Card>
      <Card.Img
        style={{ height: "12rem", width: "auto" }}
        variant="top"
        src={img}
      />
      <Card.Body>
        <Card.Text>{title}</Card.Text>
      </Card.Body>
    </Card>
  );
}
