import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Oral Medicine",
      imageUrl: "/departments/oralmed.jpg",
    },
    {
      name: "Endodontics",
      imageUrl: "/departments/endo.jpg",
    },
    {
      name: "Oral Surgeon",
      imageUrl: "/departments/surgeon.jpg",
    },
    {
      name: "Prosthodontics",
      imageUrl: "/departments/prostho.jpg",
    },
    {
      name: "Periodontics",
      imageUrl: "/departments/perio.jpg",
    },
    {
      name: "Orthodontics",
      imageUrl: "/departments/orth.jpg",
    },
    {
      name: "Implantology",
      imageUrl: "/departments/imp.jpg",
    },
    {
      name: "Cosmetic Dentistry",
      imageUrl: "/departments/cos.jpg",
    },
   
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Departments</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["medium","small"]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt={depart.name} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;