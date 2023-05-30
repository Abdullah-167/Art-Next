import React from "react";
import groq from "groq";
import client from "../../lib/sanity";
import ProductDetail from "../../views/ProductDetail/ProductDetail";

const Product = ({ data }) => {
  return (
    <article>
      <ProductDetail data={data} />
    </article>
  );
};

export default Product;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "product" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const data = await client.fetch(
    `
      *[_type == "product" && slug.current == $slug][0]
    `,
    { slug }
  );
  return {
    props: {
      data,
    },
  };
}
