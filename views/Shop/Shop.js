/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";

const Shop = () => {
  const [activeText, setActiveText] = useState();
  return (
    <div className="px-5 mx-auto max-w-7xl">
      <div className="home_cards">
        {products.map(({ id, image, url, title }) => {
          return (
            <div
              key={id}
              className="max-w-[355px] w-full mx-auto"
              onMouseOver={() => setActiveText(id)}
              onMouseLeave={() => setActiveText(null)}
            >
              <Link href={url}>
                <a>
                  <div className="car_image-wrap">
                    <img src={image} alt="" className="w-[355px] h-[355px]" />
                  </div>
                  <h5
                    className={`card_title transition-all duration-300 transform ${
                      activeText === id
                        ? "visible -translate-y-10"
                        : "invisible"
                    }`}
                  >
                    {title}
                  </h5>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
const products = [
  {
    id: 1,
    title: "REPLACING PARTS WITH PRETTY THINGS",
    url: "/product-detail",
    image:
      "https://images.squarespace-cdn.com/content/v1/5478d371e4b0db8f16a2ec64/1623950794769-E1QNCRV7CE26N93V9XLK/Gorilla+on+paper.jpg?format=500w",
  },
  {
    id: 2,
    title: "REPLACING PARTS WITH PRETTY THINGS",
    url: "/product-detail",
    image:
      "https://images.squarespace-cdn.com/content/v1/5478d371e4b0db8f16a2ec64/1590805293997-GN9UX5CHHPD8RNTWJZIA/While+I+wait.jpg?format=500w",
  },
  {
    id: 3,
    title: "REPLACING PARTS WITH PRETTY THINGS",
    url: "/product-detail",
    image:
      "https://images.squarespace-cdn.com/content/v1/5478d371e4b0db8f16a2ec64/1617134427503-6C2PFKYDM8VW7IMVLJIG/The+object+of+time+framed.jpg?format=500w",
  },
  {
    id: 4,
    title: "REPLACING PARTS WITH PRETTY THINGS",
    url: "/product-detail",
    image:
      "https://images.squarespace-cdn.com/content/v1/5478d371e4b0db8f16a2ec64/1617134427503-6C2PFKYDM8VW7IMVLJIG/The+object+of+time+framed.jpg?format=500w",
  },
  {
    id: 5,
    title: "REPLACING PARTS WITH PRETTY THINGS",
    url: "/product-detail",
    image:
      "https://images.squarespace-cdn.com/content/v1/5478d371e4b0db8f16a2ec64/1617134427503-6C2PFKYDM8VW7IMVLJIG/The+object+of+time+framed.jpg?format=500w",
  },
  {
    id: 6,
    title: "REPLACING PARTS WITH PRETTY THINGS",
    url: "/product-detail",
    image:
      "https://images.squarespace-cdn.com/content/v1/5478d371e4b0db8f16a2ec64/1617134427503-6C2PFKYDM8VW7IMVLJIG/The+object+of+time+framed.jpg?format=500w",
  },
];
