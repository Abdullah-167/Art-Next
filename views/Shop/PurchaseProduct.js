import React from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import GetImage from "../../utils/getImage";
import Link from "next/link";

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

const PurchaseProduct = ({ data }) => {
  const imageProps = data?.defaultProductVariant?.mainImages
    ? GetImage(data?.defaultProductVariant?.mainImages)
    : null;
  return (
    <div className="w-full py-20">
      <div className="main-container">
        <div className="items-center grid-cols-2 gap-10 md:grid">
          <div className="order-first md:order-last">
            {imageProps && (
              <Image
                src={imageProps.src}
                loader={imageProps.loader}
                blurDataURL={imageProps.src}
                alt={data?.title}
                placeholder="blur"
                width={600}
                height={600}
                objectFit="cover"
                className="object-cover w-full"
              />
            )}
          </div>
          <div className="order-last md:order-first">
            <h1 className="text-[36px] pb-6"> {data?.title} </h1>
            <h5 className="pb-6 text-base">
              {" "}
              ${data?.defaultProductVariant?.price}{" "}
            </h5>
            <div className="text-[15px] font-light mb-[15px] leading-7 text-GrayLight">
              <PortableText value={data?.body} components={ptComponents} />
            </div>
            <div className="w-full md:w-1/2  mt-10 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-black text-xs mb-2"
                for="grid-state"
              >
                Frame
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-white border border-black text-black py-5 px-4 pr-8 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Select a Frame</option>
                  <option>White</option>
                  <option>Black</option>
                  <option>Gray</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <Link href={"/cart"}>
              <a className="flex justify-center px-32 py-4 mt-16 text-white bg-black cursor-pointer md:px-40">
                Add To Cart
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseProduct;
