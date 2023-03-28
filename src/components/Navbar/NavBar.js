import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "bootstrap/js/src/collapse.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";
export default function NavBar() {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/Images/IPH-LOGO.png"
              alt="IPH-LOGO"
              width="100"
              height="72"
              class="d-inline-block align-text-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <NavDropdown title="About" id="navbarScrollingDropdown">
                <div className="navAbout  ">
                  <div className="col-lg-3 p-lg-5 col-md-6  col-xs-12 col-sm-9 containerList">
                    <ul className="nav-item-list navaboutLink">
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link  px-0 pt-1 pb-2 nav-item-list "
                        >
                          Our company
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link d-inline-block px-0 pt-1 pb-2 nav-item-list"
                        >
                          How we work
                        </a>
                      </li>
                      <li className="nav-item d-lg-block d-none">
                        <a
                          href="#"
                          className="nav-link d-inline-block px-0 pt-1 pb-2 nav-item-list"
                        >
                          Core team
                        </a>
                      </li>
                      <div id="nav-link">
                        <h6 className="mb-1">
                          <a
                            href="#team-links"
                            className="d-block text-dark dropdown-toggle d-lg-none py-2 navDropdown"
                            data-bs-toggle="collapse"
                          >
                            Core team
                            <RiArrowDropDownLine className="dropdown_icon" />
                          </a>
                        </h6>
                        <div
                          id="team-links"
                          className="collapse d-lg-block"
                          data-bs-parent="#nav-links"
                        >
                          <ul className="nav flex-column mb-2 mb-lg-0">
                            <li className="nav-item">
                              <a
                                href="#"
                                className="nav-link d-inline-block px-0 pt-1 pb-2 nav-item-list"
                              >
                                Agile development
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#"
                                className="nav-link d-inline-block px-0 pt-1 pb-2 nav-item-list"
                              >
                                Career
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 mt-4 pt-4">
                    <p className="d-lg-block d-none mt-1 navLinkParagraph">
                      Full cycle product development
                    </p>
                    <div id="nav-link">
                      <h6 className="mb-2">
                        <a
                          href="#social-links"
                          className="d-block text-dark dropdown-toggle d-lg-none py-2  navDropdown"
                          data-bs-toggle="collapse"
                        >
                          Full cycle product development
                          <RiArrowDropDownLine className="dropdown_icon" />
                        </a>
                      </h6>
                      <div
                        id="social-links"
                        className="collapse d-lg-block"
                        data-bs-parent="#nav-links"
                      >
                        <ul className="nav flex-column mb-2 mb-lg-0">
                          <li className="nav-item">
                            <a
                              href="#"
                              className="nav-link d-inline-block px-0 pt-1 pb-2 nav-item-list"
                            >
                              <TbPointFilled className="navBullet" /> Product
                              management
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#"
                              className="nav-link d-inline-block px-0 pt-1 pb-2 nav-item-list"
                            >
                              <TbPointFilled className="navBullet" /> MVP
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#"
                              className="nav-link d-inline-block px-0 pt-1 pb-2 nav-item-list"
                            >
                              <TbPointFilled className="navBullet" /> Startups
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="nav-link d-inline-block px-0 pt-1 pb-2 nav-item-list"
                            >
                              <TbPointFilled className="navBullet" /> Enterprise
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="cardImageSection col-lg-6 d-lg-block  d-xs-none d-none ">
                    <div className="d-flex flex-row navImageContainer">
                      <div className="col-lg-4 navImage col-md-2">
                        <img
                          src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                          height="350px"
                          alt="bookImg"
                        />
                      </div>
                      <div className="col-lg-6 d-flex flex-column  navContainer col-md-6">
                        <h4 className="navHeading   justify-content-center align-items-center mt-5">
                          How to be a successful app entrepreneur
                        </h4>
                        <p className="  justify-content-center align-items-center mt-4 mb-4 navParagraph">
                          Deep dive into our exclusive eBook that shares the
                          secret to how to transition from full time employee to
                          an app enterprenuer
                        </p>
                        <Button
                          variant="primary"
                          className="navButton d-flex justify-content-start text-center "
                        >
                          Download our eBook
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <RiArrowDropDownLine className="navbarDropdown d-md-block  d-sm-block d-none" />
              </NavDropdown>

              <NavDropdown title="Services" id="navbarScrollingDropdown">
                <div class="container-fluid">
                  <div class="row d-flex " style={{ height: "65vh" }}>
                    <div
                      class="col-12 col-lg-2"
                      style={{ backgroundColor: "orange", height: "100%" }}
                    >
                      <ul
                        class="nav flex-column "
                        style={{ marginRight: "-12px", marginLeft: "20px" }}
                      >
                        <div className="style_block my-4">
                          <li class="nav-item">
                            <a class="nav-link text-center" href="#">
                              Discover
                            </a>
                          </li>
                        </div>
                        <div className="style_block my-4">
                          <li class="nav-item">
                            <a class="nav-link  text-center" href="#">
                              Design
                            </a>
                          </li>
                        </div>
                        <div className="style_block my-4">
                          <li class="nav-item">
                            <a class="nav-link  text-center" href="#">
                              Engineer
                            </a>
                          </li>
                        </div>
                        <div className="style_block my-4">
                          <li class="nav-item">
                            <a class="nav-link  text-center" href="#">
                              Scale
                            </a>
                          </li>
                        </div>
                      </ul>
                    </div>

                    <div class="col ">
                      <ul class="navList my-4 ">
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            iOS
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/android.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Android
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Blockchain
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Flutter
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Cloud services
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Web development
                          </li>
                        </div>
                      </ul>
                    </div>
                    <div class="col ">
                      <ul class="navList my-4 ">
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            iOS
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/android.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Android
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Blockchain
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Flutter
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Cloud services
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Web development
                          </li>
                        </div>
                      </ul>
                    </div>
                    <div class="col ">
                      <ul class="navList my-4 ">
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            iOS
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/android.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Android
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Blockchain
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Flutter
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Cloud services
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Web development
                          </li>
                        </div>
                      </ul>
                    </div>
                    <div class="col ">
                      <ul class="navList my-4 ">
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            iOS
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/android.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Android
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Blockchain
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Flutter
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Cloud services
                          </li>
                        </div>
                        <div className="d-flex my-5">
                          <img
                            className="mx-2"
                            style={{
                              height: 30,
                              width: 30,
                              borderRadius: "50%",
                            }}
                            src="/Images/app-store.png"
                          />

                          <li class="list-group-item d-flex justify-content-between align-items-center">
                            Web development
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </NavDropdown>
              <NavDropdown
                title="Industries"
                id="navbarScrollingDropdown"
              ></NavDropdown>
              <Nav.Link href="#portfolioes">Portfolioes</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact" className="contact nav-link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
