import React from "react";

// import awards from "../../components/Images/awards.jpg";
import Buttons from "../Buttons";
import { Row, Col, Image } from "react-bootstrap";
import "../../../src/App.css";
import Icons from ".././Icons";

const About = () => {
  return (
    <>
      <section className="container   mt-md-4 mt-lg-5">
        <div className="row about-row">
          <div
            className="col-md-5  text-md-start pb-5 "
            style={{ alignSelf: "center" }}
          >
            <div className="d-flex">
              <Row>
                <Col md={12}>
                  <div className="d-flex my-3 ">
                    <div className="mx-3" style={{ marginTop: "-7px" }}>
                      <Icons name={"infinity"} color="#f8a440" />
                    </div>
                    <div>
                      <h5 className="heading_style">Web Development</h5>
                      <p className="text_style">
                        Design & development for your business and eCommerce
                        website.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="d-flex my-3">
                    <div className="mx-3 " style={{ marginTop: "-4px" }}>
                      <Icons name={"laptop"} color="#f8a440" />
                    </div>

                    <div>
                      <h5 className="heading_style">UI/UX Designs</h5>

                      <p className="text_style">
                        We successfully implemented numerous UI/UX projects for
                        both global & local clients.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="d-flex my-3">
                    <div className="mx-3" style={{ marginTop: "-4px" }}>
                      <Icons name={"phone"} color="#f8a440" />
                    </div>

                    <div>
                      <h5 className="heading_style">Mobile App development</h5>
                      <p className="text_style">
                        Develop a high-quality mobile app for iOS, Android, and
                        windows mobile.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="d-flex my-3">
                    <div className="mx-3" style={{ marginTop: "-7px" }}>
                      <Icons name={"code"} color="#f8a440" />
                    </div>

                    <div>
                      <h5 className="heading_style">
                        Custom Software Development
                      </h5>
                      <p className="text_style">
                        Let technology make your business more optimized and
                        productive.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="button_about my-3">
              <Buttons title="More About Us" color="#f8a440" />
            </div>
          </div>

          <div className="col-xl-6 col-md-7 offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0 ">
            <Image
              src="/Images/about-img.jpeg"
              className="rounded-3 shadow-sm h-100 w-100 about-img"
              alt="about image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

/* <section className="container pt-5 mt-2 mt-md-4 mt-lg-5">
        <div className="row pt-xl-3">
            
          <div className="col-md-5 text-center text-md-start pb-5">
            <h1 className="mb-4">Award-Winning Software Company</h1>
            <p className="fs-lg pb-lg-3 mb-4">
              We create diverse, complex, web and mobile solutions for any
              business need. With us you get quality software and perfect
              service every time.
            </p>
            <div   className="d-flex ">
            <Card xs={12} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Card xs={12} style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card></div>
            <Buttons title="More About Us" color="#f07b3a" />
            <div className="mt-3 mt-sm-0 pt-4 pt-sm-5 mt-xl-4">
              <h2 className="h6 mb-4">Some of our awards:</h2>
              <img className=" w-50 h-50" src={awards} alt="Awards" />
            </div>
          </div>
          
          
          <div className="col-xl-6 col-md-7 offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
            <div style={{backgroundColor:"black" , borderRadius:10}}>
            <img
              src={about_img}
              className="rounded-3 shadow-sm h-100vh w-100"
              alt="about image"
            />
            </div>
          </div>
        </div>
      </section> */
