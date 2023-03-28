import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  Card,
  Carousel,
  Button,
  Image,
  Figure,
} from "react-bootstrap";
import Cards from "../Cards";
import "../../App.css";
import { FaQuoteLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

function ChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? 2 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === 2 ? 0 : activeIndex + 1);
  };

  return (
    <>
      <div className="container ChooseUs_main">
        <div className="ChooseUs_sub_main  text-center">
          <Form.Text className="chseUstext1 mb-4">Why Choose Us?</Form.Text>
          <p className="chseUstext2">
            We personalize how we work to fit your project needs. Our approach
            helps augment innovation.
          </p>
        </div>
        <div className="mt-4 mb-5">
          <Row>
            <Col className="chooseUs-col" xs={12} sm={6} md={6} lg={3}>
              <Card className="chooseUs-card">
                <div className="card chooseUs-cardIcon d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                  <Image
                    src="Images/choose-us-Icon1.svg"
                    width="32"
                    alt="Icon"
                  />
                </div>
                <div className="text-center chooseUS-card-txt">
                  <Card.Title>
                    Build a functional prototype in 24 hrs
                  </Card.Title>
                </div>
              </Card>
              <div className="vr"></div>
            </Col>

            <Col className="chooseUs-col" xs={12} sm={6} md={6} lg={3}>
              <Card className="chooseUs-card">
                <div className="card  d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                  <img src="Images/choose-us-icon2.svg" width="32" alt="Icon" />
                </div>
                <div className="text-center chooseUS-card-txt">
                  <Card.Title>Create an MVP within two weeks</Card.Title>
                </div>
              </Card>
              <div className="vr"></div>
            </Col>

            <Col className="chooseUs-col" xs={12} sm={6} md={6} lg={3}>
              <Card className="chooseUs-card ">
                <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                  <img src="Images/choose-us-icon3.svg" width="32" alt="Icon" />
                </div>
                <div className="text-center chooseUS-card-txt">
                  <Card.Title>Kickstart software development</Card.Title>
                </div>
              </Card>
              <div className="vr"></div>
            </Col>

            <Col className="chooseUs-col" xs={12} sm={6} md={6} lg={3}>
              <Card className="chooseUs-card">
                <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
                  <img src="Images/choose-us-icon4.svg" width="32" alt="Icon" />
                </div>
                <div className="text-center chooseUS-card-txt">
                  <Card.Title>Get 24/7 tech & business support</Card.Title>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="mt-5 mb-5">
          <Row>
            <Col xs={12} sm={12} md={5} lg={5}>
              <Card className="chooseUs-card2-left">
                <div className="chooseUsmain">
                  <h3 className="display-4  mb-1 fw-medium">200+</h3>
                  <h2 className="text-light pb-5 mb-2">
                    Clients Already Served
                  </h2>
                  <a
                    href="#"
                    className="reviewPage d-inline-flex align-items-center rounded-3 text-decoration-none py-3 px-4"
                  >
                    <div className="pe-3">
                      <div className="fs-xs reviewtxt text-light text-uppercase opaciy-70 mb-2">
                        Reviewed on
                      </div>
                      <img
                        src="Images/clutch-logo.svg"
                        width="97"
                        alt="Clutch"
                      />
                    </div>
                    <div className="ps-1">
                      <div className="text-nowrap mb-2">
                        <AiFillStar className="starIcon" />
                        <AiFillStar className="starIcon" />
                        <AiFillStar className="starIcon" />
                        <AiFillStar className="starIcon" />
                        <AiFillStar className="starIcon" />
                      </div>
                      <div className="text-light opacity-70">49 reviews</div>
                    </div>
                  </a>
                </div>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={7} lg={7}>
              <Card className="chooseUs-card2-right shadow-sm card_style">
                <div className="d-flex justify-content-between align-items-center mx-3 mb-0 mt-2">
                  <span>
                    <div className="quoteIcon">
                      <FaQuoteLeft className="fs-5 " />
                    </div>
                  </span>

                  <div>
                    <button
                      onClick={() => handlePrevClick()}
                      type="button"
                      id="news-prev"
                      className=" style_button btn btn-prev btn-icon shadow-sm rounded btn-sm position-relative rounded-circle mx-2"
                      tabindex="0"
                      aria-label="Previous slide"
                      aria-controls="swiper-wrapper-e3d2ee7cf4e5fdc5"
                    >
                      <i class="bi bi-chevron-left"></i>
                    </button>
                    <button
                      onClick={() => handleNextClick()}
                      type="button"
                      id="news-prev"
                      className=" style_button btn btn-prev btn-icon shadow-sm rounded btn-sm position-relative rounded-circle mx-2"
                      tabindex="0"
                      aria-label="Previous slide"
                      aria-controls="swiper-wrapper-e3d2ee7cf4e5fdc5"
                    >
                      <i class="bi bi-chevron-right"></i>
                    </button>
                  </div>
                </div>

                <Carousel
                  indicators={false}
                  activeIndex={activeIndex}
                  onSelect={() => {}}
                >
                  <Carousel.Item interval={100000} className="carosalItem">
                    <Form.Text className="carosalItemText">
                      Ac at sed sit senectus massa. Massa ante amet ultrices
                      magna porta tempor. Aliquet diam in et magna ultricies mi
                      at. Lectus enim, vel enim egestas nam pellentesque et leo.
                      Elit mi faucibus laoreet aliquam pellentesque sed aliquet
                      integer massa. Orci leo tortor ornare id mattis auctor
                      aliquam volutpat aliquet. Odio lectus viverra eu blandit
                      nunc malesuada vitae eleifend pulvinar
                    </Form.Text>
                    <div className="d-flex align-items-center mt-4 profilePosition">
                      <img
                        className="rounded-circle carosalProfileIcn"
                        src="/Images/profile2img.png"
                      />
                      <div className="ml-4 mb-1">
                        <Form.Text className="crslprofileName  ">
                          Madhukar Pandey
                        </Form.Text>
                        <Form.Text className="crslPositioneName">
                          Senior Software Engineer at Iph Technologies
                        </Form.Text>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={100000} className="carosalItem">
                    <Form.Text className="carosalItemText">
                      Ac t sed sit senectus massa. Massa ante amet ultrices
                      magna porta tempor. Aliquet diam in et magna ultricies mi
                      at. Lectus enim, vel enim egestas nam pellentesque et leo.
                      Elit mi faucibus laoreet aliquam pellentesque sed aliquet
                      integer massa. Orci leo tortor ornare id mattis auctor
                      aliquam volutpat aliquet. Odio lectus viverra eu blandit
                      nunc malesuada vitae eleifend pulvinar
                    </Form.Text>

                    <div className="d-flex align-items-center mt-4">
                      <img
                        className="rounded-circle carosalProfileIcn"
                        src="/Images/profile-img.png"
                      />
                      <div className="ml-4 mb-1">
                        <Form.Text className="crslprofileName  ">
                          Madhukar Pandey
                        </Form.Text>
                        <Form.Text className="crslPositioneName">
                          Senior Software Engineer at Iph Technologies
                        </Form.Text>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={100000} className="carosalItem">
                    <Form.Text className="carosalItemText">
                      Elit mi faucibus laoreet aliquam pellentesque sed aliquet
                      integer massa. Orci leo tortor ornare id mattis auctor
                      aliquam volutpat aliquet. Odio lectus viverra eu blandit
                      nunc malesuada vitae eleifend pulvinar Ac at sed sit
                      senectus massa. Massa ante amet ultrices magna porta
                      tempor. Aliquet diam in et magna ultricies mi at. Lectus
                      enim, vel enim egestas nam pellentesque et leo.
                    </Form.Text>

                    <div className="d-flex align-items-center mt-4">
                      <img
                        className="rounded-circle carosalProfileIcn"
                        src="/Images/profile2img.png"
                      />
                      <div className="ml-4 mb-1">
                        <Form.Text className="crslprofileName  ">
                          Madhukar Pandey
                        </Form.Text>
                        <Form.Text className="crslPositioneName">
                          Senior Software Engineer at Iph Technologies
                        </Form.Text>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default ChooseUs;
