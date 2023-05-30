import React, { useState } from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import GetImage from "../../utils/getImage";
import { useKeenSlider } from "keen-slider/react";
function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit("max").auto("format")}
        />
      );
    },
  },
};

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function ProductDetail({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      slides: {
        perView: 4.5,
        spacing: 5,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );
  console.log(currentSlide, "currentSlide");
  return (
    <div className="max-w-6xl px-4 mx-auto">
      <div className="max-w-xl py-8">
        <div ref={sliderRef} className="keen-slider">
          {data?.defaultProductVariant?.images?.map((item, index) => {
            const imageProps =
              item !== null && item !== undefined ? GetImage(item) : null;

            return (
              <div key={index} className="mb-7 keen-slider__slide">
                {imageProps && (
                  <Image
                    src={imageProps.src}
                    loader={imageProps.loader}
                    blurDataURL={imageProps.src}
                    alt={"Thumbnail"}
                    placeholder="blur"
                    width={600}
                    height={600}
                    objectFit="contain"
                    className="w-full"
                  />
                )}
              </div>
            );
          })}
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
        <div ref={thumbnailRef} className="keen-slider  max-w-[170px] mx-auto" >
          {data?.defaultProductVariant?.images?.map((item, index) => {
            const imageProps = item ? GetImage(item) : null;
            return (
              <div className="w-3 h-1 px-4">
                {imageProps && (
                  <div key={index}
                    className={`${index === currentSlide ? "bg-black" : "bg-gray-300 "} w-1 h-1 keen-slider__slide object-cover border-none rounded-full mr-2 cursor-pointer`}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
        <div ref={thumbnailRef} className="keen-slider thumbnail">
          {data?.defaultProductVariant?.images?.map((item, index) => {
            const imageProps = item ? GetImage(item) : null;

            return (
              <div key={index} className="mb-10 pb-5 min-h-[45px] max-h-[50px] sm:max-h-max sm:min-h-[60px]">
                {imageProps && (
                  <img
                    src={imageProps.src}
                    loader={imageProps.loader}
                    blurDataURL={imageProps.src}
                    alt={"Thumbnail"}
                    placeholder="blur"
                    width={100}
                    height={100}
                    className={`${index === currentSlide
                      ? "border-black"
                      : "border-transparent"
                      }  keen-slider__slide border-2 hover:border-black object-cover`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}



function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}