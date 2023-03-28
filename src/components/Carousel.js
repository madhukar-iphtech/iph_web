import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "../App.css";
import Buttons from "./Buttons";
import SocialIcons from "./SocialIcons";

const Crousel = () => {
  var width = window.innerWidth;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const data = [
    {
      title: "The Best IT Solutions for Your Business",
      description:
        "We provide the wide range of high quality IT services and best practices solutions to our customers making their business better.",
      button: "Start your project",
    },
    {
      title: "Award-Winning Software Development",
      description:
        "We build complex web, desktop and mobile applications. With us you get quality software and perfect service every time.",
      button: "View case studies",
    },
    {
      title: "24/7 Tech & Business Support",
      description:
        "We ensure lifetime support of all applications we've built. Our support department is a team of professionals who will assist you 24/7.",
      button: "Work with us",
    },
  ];
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/Images/hero-bg.jpeg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            opacity: 0.6,
          }}
        ></div>

        <Carousel
          fade={true}
          slide={true}
          controls={width > 500 && `false`}
          activeIndex={index}
          onSelect={handleSelect}
          className="hide-indicators"
          style={{}}
        >
          {data.map((item, index) => {
            return (
              <Carousel.Item>
                <div
                  className="container text-center py-xl-5"
                  style={{
                    position: "relative",
                    color: "#fff",
                    width: "60%",
                    height: "100vh",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h3
                    className="heading_crousel from-start mb-lg-4"
                    style={{ width: "80%", marginTop: 20 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="fs-xl text-light opacity-70  mb-lg-5 mt-0"
                    style={{
                      marginBottom: "50px",
                      fontWeight: "300",
                      width: "90%",
                      fontFamily: "Verdana",
                      fontSize: 10,
                    }}
                  >
                    {item.description}
                  </p>
                  <Buttons color="#f8a440" title={item.button} />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>

        <SocialIcons />
      </div>
    </>
  );
};

export default Crousel;
