import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import BlogComponent from "../../components/Blog";
import * as fs from "fs";

const Blog = ({ dataJson }) => {
  return <BlogComponent dataJson={dataJson} />;
};

// export async function getServerSideProps() {
//   const data = await fetch("http://localhost:3000/api/blogs");
//   const dataJson = await data.json();
//   return {
//     props: dataJson ? { dataJson } : [],
//   };
// }

export async function getStaticProps() {
  const dirName = await fs.promises.readdir("blogData");
  let dataJson = [];
  await Promise.all(
    dirName.map(async (item) => {
      const allData = await fs.promises.readFile("blogData/" + item, "utf8");
      dataJson.push(JSON.parse(allData));
    })
  );
  // res.status(200).json(jsonData);
  return {
    props: { dataJson },
  };
}

export default Blog;
