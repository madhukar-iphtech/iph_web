import React from "react";
import Card from "react-bootstrap/Card";
import "../../src/App.css";

function Cards(props) {
  const isSmallScreen = props.isSmallScreen;
  const isMediumScreen = props.isMediumScreen;
  return (
    <Card
      className=" container my-2 mb-2  shadow-sm p-3 mb-5 rounded Card_style"
      style={{ height: isSmallScreen ? 400 : isMediumScreen ? 450 : 380 }}
    >
      <div class="d-flex align-items-center justify-content-between ">
        <a
          href="#"
          class="badge fs-sm text-nav  text-decoration-none position-relative zindex-2 my-4 mx-2 "
        >
          {props.data.category}
        </a>
        <Card.Text>{props.data.lastUpdate}</Card.Text>
      </div>
      <Card.Body>
        <Card.Title className="mb-3 card_heading">
          {props.data.title}
        </Card.Title>

        <Card.Text className="card_description" style={{ flexWrap: "wrap" }}>
          {props.data.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
