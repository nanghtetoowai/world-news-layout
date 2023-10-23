import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function TrendingCard({ title, img, description }) {
  return (
    <Card style={{ width: "93%" , margin: "0 auto" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted fs-6">{description}</Card.Text>
        <div className="fs-6 text-muted">
          <AiOutlineClockCircle />
          <span>&nbsp; 2 min ago</span>
        </div>
      </Card.Body>
    </Card>
  );
}
