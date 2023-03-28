import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "bootstrap/js/src/collapse.js";
import { HiOutlineMail } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <Container fluid className="text-center  footerContainer dark-mode">
        <p className=" footerParagraphStarted">Ready to get Started?</p>
        <h2 className="fs-3 fw-bolder text-center pb-3 text-light footerHeading">
          Launch Your Project with Us
        </h2>
        <Button
          className="btn btn-primary "
          style={{
            fontSize: 17,
            padding: 13,
            borderRadius: 5,
            borderWidth: 0,
            paddingRight: 20,
            paddingLeft: 20,
            backgroundColor: `#f8a440`,
          }}
        >
          work with us
        </Button>
      </Container>
      <footer className="footer dark-mode  pt-5 pb-4 pb-lg-5">
        <div className="container pt-lg-4">
          <div className="row pb-5">
            <div className="col-lg-4 col-md-6">
              <div cclassName="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
                <img
                  src="/Images/IPH-LOGO.png"
                  width="70"
                  alt="IPH-LOGO"
                  height="50"
                />
              </div>
              <p className="fs-sm  opacity-70 pb-lg-3 mb-4 footerParagraph">
                Proin ipsum pharetra, senectus eget scelerisque varius pretium
                platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi
                sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget
                elementum dolor ullamcorper sodales ultrices eros.
              </p>
              <form className="needs-validation" novalidate="">
                <label for="subscr-email" className="form-label">
                  Subscribe to our newsletter
                </label>
                <div className="input-group">
                  <input
                    type="email"
                    id="subscr-email"
                    className="form-control rounded-start ps-5"
                    placeholder="Your email"
                    required=""
                  />
                  <HiOutlineMail className="emailIcon position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5  " />
                  <div className="invalid-tooltip position-absolute top-100 start-0">
                    Please provide a valid email address.
                  </div>
                  <button type="submit" className="btn SubscribeButton">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
              <div id="footer-links" className="row">
                <div className="col-lg-4">
                  <h6 className="mb-2">
                    <a
                      href="#useful-links"
                      className="d-block  dropdown-toggle d-lg-none py-2 collapsed dropdownLink"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                    >
                      Useful Links
                      <RiArrowDropDownLine className="dropdown_icon" />
                    </a>
                  </h6>
                  <div
                    id="useful-links"
                    className="collapse d-lg-block"
                    data-bs-parent="#footer-links"
                  >
                    <ul className="nav flex-column pb-lg-1 mb-lg-3">
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link d-inline-block px-0 pt-1 pb-2 text-light footerList"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link d-inline-block px-0 pt-1 pb-2 footerList"
                        >
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link d-inline-block px-0 pt-1 pb-2 footerList"
                        >
                          Case Studies
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link d-inline-block px-0 pt-1 pb-2 footerList"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link d-inline-block px-0 pt-1 pb-2 footerList"
                        >
                          News &amp; Insights
                        </a>
                      </li>
                    </ul>
                    <ul className="nav flex-column mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link d-inline-block px-0 pt-1 pb-2 footerList"
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link d-inline-block px-0 pt-1 pb-2 footerList"
                        >
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3">
                  <h6 className="mb-2">
                    <a
                      href="#social-links"
                      className="d-block text-dark dropdown-toggle d-lg-none py-2 dropdownLink"
                      data-bs-toggle="collapse"
                    >
                      Socials
                      <RiArrowDropDownLine className="dropdown_icon" />
                    </a>
                  </h6>
                  <div
                    id="social-links"
                    className="collapse d-lg-block"
                    data-bs-parent="#footer-links"
                  >
                    <ul className="nav flex-column mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link d-inline-block px-0 pt-1 pb-2 footerList"
                        >
                          Facebook
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link d-inline-block px-0 pt-1 pb-2 footerList"
                        >
                          LinkedIn
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link d-inline-block px-0 pt-1 pb-2 footerList"
                        >
                          Twitter
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#"
                          className="nav-link d-inline-block px-0 pt-1 pb-2 footerList"
                        >
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 pt-2 pt-lg-0">
                  <h6 className="mb-2  dropdownLink">Contact Us</h6>
                  <a href="mailto:email@example.com" className="fw-medium">
                    email@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className=" text-center  mb-0">
            <span className="textFooter">© All rights reserved.</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
