import React, { useState } from "react";
import Link from "next/link";
import { getAllProducts } from "../../lib/api";
import GetImage from "../../utils/getImage";


const Home = ({ allProducts }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showSecondaryImage, setShowSecondaryImage] = useState(false);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="home_cards relative">
        {allProducts.map(({ _id, slug, title, defaultProductVariant }) => {
          const firstImage = defaultProductVariant?.mainImages
            ? GetImage(defaultProductVariant?.mainImages)
            : null;

          const secondaryImage =
            defaultProductVariant?.images && defaultProductVariant?.images[0]
              ? GetImage(defaultProductVariant?.images[0])
              : null;

          return (
            <div
              key={_id}
              className="w-full border-b md:border-none border-gray-200 py-4 relative"
              onMouseEnter={() => setHoveredCard(_id)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStartCapture={() => setShowSecondaryImage(true)}
              onTouchEndCapture={() => setShowSecondaryImage(false)}
            >
              <Link href={`/shop/${slug?.current}`}>
                <a>
                  <figure className="swap-on-hover">
                    {firstImage && (
                      <img
                        className="swap-on-hover__front-image w-full max-w-[480px] max-h-[440px] object-contain"
                        src={firstImage?.src}
                        alt=""
                      />
                    )}
                    {secondaryImage && (
                      <img
                        className="swap-on-hover__back-image w-full max-h-[440px] object-contain"
                        src={secondaryImage?.src}
                        alt=""
                      />
                    )}
                    <h5
                      className={`card_title transition-all duration-300 pt-10 transform ${
                        hoveredCard === _id
                          ? "visible -translate-y-5"
                          : "invisible"
                      }`}
                    >
                      {title}
                    </h5>
                  </figure>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const allProducts = await getAllProducts();

  return {
    props: {
      allProducts,
    },
    revalidate: 1,
  };
}
