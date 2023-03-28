import React from "react";
import { Button, Col, Form, Row, Card } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
function Services() {
  return (
    <>
      <div style={{ backgroundColor: "#f3f6ff", opacity: "1" }}>
        <div className="services-main container">
          <div>
            <Form.Text className="text-uppercase service-top-text ">
              WHAT WE DO
            </Form.Text>

            <div className="pt-3 d-flex justify-content-between align-items-center ">
              <Form.Text className="service-secondTop-text">
                Software & Mobile App Development Company
              </Form.Text>
              <Button className="outline btn-lg service-btn">Read More</Button>
            </div>
          </div>

          <div className="pb-5 pt-1">
            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                <Card className="service-card left-card position-relative shadow-sm rounded bg-white">
                  <div className="d-inline-block shadow rounded-3 position-absolute top-0 translate-middle-y p-3 card-icon">
                    <img
                      src="Images/rocket.svg"
                      class="d-block m-1"
                      width="40"
                      alt="Icon"
                    />
                  </div>
                  <Card.Body className="cardBody">
                    <Card.Title className="mt-4 srvce-crd-title">
                      Fresh ideas
                      <BsFillArrowRightCircleFill className="cardArrowIcon" />
                    </Card.Title>
                    <Card.Text className="cardBodyText">
                      We expertise in providing innovative tech solutions for
                      the business ideas in your mind. Starting from flexible
                      and convenient layouts to the multipurpose arrangement of
                      designs. We have a diversified collection of layouts which
                      fits your imagination. Moreover, customization is the
                      smartest thing to offer
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <Card className="service-card right-card position-relative shadow-sm rounded">
                  <div class="d-inline-block  shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3 card-icon">
                    <img
                      src="Images/cms.svg"
                      class="d-block m-1"
                      width="40"
                      alt="Icon"
                    />
                  </div>
                  <Card.Body className="cardBody">
                    <Card.Title className="mt-4 srvce-crd-title">
                      Unique Designs{" "}
                      <BsFillArrowRightCircleFill className="cardArrowIcon" />
                    </Card.Title>
                    <Card.Text className="cardBodyText">
                      Our designs support the strategic approach of the business
                      person by highlighting the insight and inspiration of the
                      idea to achieve unique expectations and goals.
                      Pixel-perfect replication of the designers is intended for
                      both front-end and back-end developers to build their
                      pages with greater comfort.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                <Card className="service-card left-card position-relative shadow-sm rounded">
                  <div class="d-inline-block  shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3 card-icon">
                    <img
                      src="Images/analytics.svg"
                      class="d-block m-1"
                      width="40"
                      alt="Icon"
                    />
                  </div>
                  <Card.Body className="cardBody">
                    <Card.Title className="mt-4 srvce-crd-title">
                      Organized Implementation{" "}
                      <BsFillArrowRightCircleFill className="cardArrowIcon" />
                    </Card.Title>
                    <Card.Text className="cardBodyText">
                      This is the most significant process of integrating a
                      newly developed technical solution to a business where the
                      organized MVC format is followed, which heavily depends on
                      the architecture of the solution. Our approach is to make
                      the developed software solution flexible, bug-free and
                      smooth to run on all the platforms.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <Card className="service-card right-card position-relative shadow-sm rounded">
                  <div class="d-inline-block shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3 card-icon">
                    <img
                      src="Images/timer.svg"
                      class="d-block m-1"
                      width="40"
                      alt="Icon"
                    />
                  </div>
                  <Card.Body className="cardBody">
                    <Card.Title className="mt-4 srvce-crd-title">
                      Minimum Viable Product{" "}
                      <BsFillArrowRightCircleFill className="cardArrowIcon" />
                    </Card.Title>
                    <Card.Text className="cardBodyText">
                      We provide feasible software solutions with all the
                      adequate features to help your business in reaching the
                      heights of success. These cost-effective solutions are
                      tailored up to your imagination that can give the exact
                      idea of the product according to the relevant requirement
                      of the time.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                <Card className="service-card left-card position-relative shadow-sm  rounded">
                  <div class="d-inline-block shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3 card-icon">
                    <img
                      src="Images/web-search.svg"
                      class="d-block m-1"
                      width="40"
                      alt="Icon"
                    />
                  </div>
                  <Card.Body className="cardBody">
                    <Card.Title className="mt-4 srvce-crd-title">
                      Target-Oriented Solution{" "}
                      <BsFillArrowRightCircleFill className="cardArrowIcon" />
                    </Card.Title>
                    <Card.Text className="cardBodyText">
                      Your priority is our primary concern. We believe in
                      designing and developing the software solutions according
                      to the set of objectives you follow in business. Being a
                      software development company, our entire focus is on
                      deploying software solutions which resemble the business
                      approach.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <Card className="service-card right-card position-relative shadow-sm bg-white rounded">
                  <div class="d-inline-block shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3 card-icon">
                    <img
                      src="Images/mobile-app.svg"
                      class="d-block m-1"
                      width="40"
                      alt="Icon"
                    />
                  </div>
                  <Card.Body className="cardBody">
                    <Card.Title className="mt-4 srvce-crd-title">
                      Profitability Focus{" "}
                      <BsFillArrowRightCircleFill className="cardArrowIcon" />
                    </Card.Title>
                    <Card.Text className="cardBodyText">
                      The ultimate goal of any business is to acquire financial
                      benefits, and that’s exactly how our software solutions
                      are developed. Keeping in mind the profitability of your
                      business, the customization of the software product,
                      whether it is web or mobile app, is done so that our
                      solutions assist your outlook of generating revenue.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
