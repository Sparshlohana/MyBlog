import { useRouter } from "next/router";
import style from "../../styles/BlogPost.module.css";
import { useEffect, useState } from "react";
import * as fs from "fs";

const Slug = ({ jsonData }) => {
  const [blogs, setBlog] = useState(jsonData);

  return (
    <div className={style.blogPostContainer}>
      <h1 className={style.blogPostTitle}>{blogs?.title}</h1>
      <hr className={style.blogPostHr} />
      <div className={style.blogPostContentContainer}>
        <p className={style.blogPostContent}>{blogs?.content}</p>
      </div>
    </div>
  );
};
// export async function getServerSideProps(context) {
//   const slug = context.query.slug;
//   const data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
//   const jsonData = await data?.json();
//   return {
//     props: { jsonData },
//   };
// }
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "1" } },
      { params: { slug: "2" } },
      { params: { slug: "3" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  let jsonData = await fs.promises.readFile(`blogData/${slug}.json`, "utf-8");
  console.log(jsonData);
  return {
    props: { jsonData: JSON?.parse(jsonData) },
  };
}

export default Slug;
