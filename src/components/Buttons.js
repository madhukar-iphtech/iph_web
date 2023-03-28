import React from "react";
import { Button } from "react-bootstrap";
import "../../src/App.css";
const Buttons = (props) => {
  return (
    // <Button className="outline btn-lg button_style">{props.title}</Button>
    <Button
      className="btn btn-primary "
      style={{
        fontSize: 17,
        padding: 13,
        borderRadius: 5,
        borderWidth: 0,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: `${props.color}`,
      }}
    >
      {props.title}
    </Button>
  );
};

export default Buttons;
