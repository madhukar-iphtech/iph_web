import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import Cards from "./Cards";

import "../App.css";

export default function NewsAndUpdates() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 30;
  const [numberOfCards, setNumberOfCards] = useState(3);
  const isSmallScreen = window.matchMedia("(max-width: 576px)").matches;
  const isMediumScreen = window.matchMedia("(max-width: 992px)").matches;

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.matchMedia("(max-width: 576px)").matches;
      const isMediumScreen = window.matchMedia("(max-width: 992px)").matches;
      setNumberOfCards(isSmallScreen ? 1 : isMediumScreen ? 2 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    {
      title: "How the Millennial Lifestyle Changes as Service Prices Rise",
      description:
        "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.",
      lastUpdate: "12 hours",
      category: "Tech",
    },
    {
      title: "5 Bad Landing Page Examples & How We Would Fix Them",
      description:
        " Totam, soluta placeat hic adipisci reprehenderit iusto est nulla dolorum doloremque inventore suscipit consequuntur distinctio id.",
      lastUpdate: "12 minutes",
      category: "Stetergy",
    },

    {
      title: "Why UX Design Matters and How it Affects Ranking",
      description:
        "Quaerat quos assumenda numquam dolorem, repellendus est, itaque sint et odio perferendis laudantium laboriosam.",
      lastUpdate: "1 day ago",
      category: "Software",
    },
    {
      title: " How the Millennial Lifestyle Changes as Service Prices Rise",
      description:
        "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.",
      lastUpdate: "4 hours",
      category: "Technology",
    },
    {
      title: "Mobile App Generates Data for the Energy Management",
      description:
        "Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. ",
      lastUpdate: "20 sec",
      category: "Startups",
    },
    {
      title: "How the Millennial Lifestyle Changes as Service Prices Rise",
      description:
        "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.",
      lastUpdate: "12 hours",
      category: "Tech",
    },
    {
      title: "5 Bad Landing Page Examples & How We Would Fix Them",
      description:
        " Totam, soluta placeat hic adipisci reprehenderit iusto est nulla dolorum doloremque inventore suscipit consequuntur distinctio id.",
      lastUpdate: "12 minutes",
      category: "Stetergy",
    },

    {
      title: "Why UX Design Matters and How it Affects Ranking",
      description:
        "Quaerat quos assumenda numquam dolorem, repellendus est, itaque sint et odio perferendis laudantium laboriosam.",
      lastUpdate: "1 day ago",
      category: "Software",
    },
    {
      title: " How the Millennial Lifestyle Changes as Service Prices Rise",
      description:
        "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.",
      lastUpdate: "4 hours",
      category: "Technology",
    },
    {
      title: "Mobile App Generates Data for the Energy Management",
      description:
        "Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. ",
      lastUpdate: "20 sec",
      category: "Startups",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f3f6ff" }}>
      <div style={{ padding: `0 ${chevronWidth}px` }}>
        <div className="container py-md-3 py-lg-5 ">
          <div className="pt-4 text-center mb-4">
            <h2 className="news_heading">News &amp; Insights</h2>
          </div>
          <h2 className="h1 text-center pb-2"></h2>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={numberOfCards}
            gutter={20}
            leftChevron={
              isMediumScreen || isSmallScreen ? null : (
                <div style={{ marginRight: 50 }}>
                  <button
                    type="button"
                    id="news-prev"
                    className=" style_button btn btn-prev btn-icon shadow-sm rounded btn-sm position-absolute rounded-circle"
                    tabindex="0"
                    aria-label="Previous slide"
                    aria-controls="swiper-wrapper-e3d2ee7cf4e5fdc5"
                  >
                    <i class="bi bi-chevron-left"></i>
                  </button>
                </div>
              )
            }
            rightChevron={
              isMediumScreen || isSmallScreen ? null : (
                <div>
                  <button
                    type="button"
                    id="news-prev"
                    className=" style_button btn btn-prev btn-icon shadow-sm rounded btn-sm position-absolute rounded-circle"
                    tabindex="0"
                    aria-label="Previous slide"
                    aria-controls="swiper-wrapper-e3d2ee7cf4e5fdc5"
                  >
                    <i class="bi bi-chevron-right"></i>
                  </button>
                </div>
              )
            }
            outsideChevron
            chevronWidth={chevronWidth}
          >
            {data.map((item, index) => {
              return (
                <>
                  <Cards
                    data={item}
                    isSmallScreen={isSmallScreen}
                    isMediumScreen={isMediumScreen}
                  />
                </>
              );
            })}
          </ItemsCarousel>
        </div>
      </div>
    </div>
  );
}
