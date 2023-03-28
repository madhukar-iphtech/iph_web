import React from "react";
import { Form } from "react-bootstrap";
// import "./NavBar.css";

function NavbarService() {
  return (
    <div className="w-100% h-auto m-0 p-0 ">
      <div className="d-flex NavServiceMain">
        <div className="NavServiceleft">
          <div className="NavsrvceleftLink">
            <Form.Text className="navsrvcetxt">Discover</Form.Text>
          </div>
          <div className="NavsrvceleftLink">
            <Form.Text className="navsrvcetxt">Design</Form.Text>
          </div>
          <div className="NavsrvceleftLink">
            <Form.Text className="navsrvcetxt">Engineer</Form.Text>
          </div>
          <div className="NavsrvceleftLink">
            <Form.Text className="navsrvcetxt">Scale</Form.Text>
          </div>
        </div>
        <div className="NavServiceRight"></div>
      </div>
    </div>
  );
}

export default NavbarService;
