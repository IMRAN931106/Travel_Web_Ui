import React, { useEffect } from "react";
import "./main.scss";
import img from "../../Assets/img.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import {
  HiOutlineClipboardCheck,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sit non accusamus tempora provident, pariatur repellat quo, autem illum libero doloremque fugit voluptates reprehenderit assumenda!",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sit non accusamus tempora provident, pariatur repellat quo, autem illum libero doloremque fugit voluptates reprehenderit assumenda!",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sit non accusamus tempora provident, pariatur repellat quo, autem illum libero doloremque fugit voluptates reprehenderit assumenda!",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sit non accusamus tempora provident, pariatur repellat quo, autem illum libero doloremque fugit voluptates reprehenderit assumenda!",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sit non accusamus tempora provident, pariatur repellat quo, autem illum libero doloremque fugit voluptates reprehenderit assumenda!",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sit non accusamus tempora provident, pariatur repellat quo, autem illum libero doloremque fugit voluptates reprehenderit assumenda!",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$790",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sit non accusamus tempora provident, pariatur repellat quo, autem illum libero doloremque fugit voluptates reprehenderit assumenda!",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sit non accusamus tempora provident, pariatur repellat quo, autem illum libero doloremque fugit voluptates reprehenderit assumenda!",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum sit non accusamus tempora provident, pariatur repellat quo, autem illum libero doloremque fugit voluptates reprehenderit assumenda!",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map((item, index) => {
          return (
            <div
              data-aos="fade-up"
              key={index + item.id}
              className="singleDestination"
            >
              <div className="imageDiv">
                <img src={item.imgSrc} alt={item.destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{item.destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{item.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {item.grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{item.fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{item.description}</p>
                </div>

                <button className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
