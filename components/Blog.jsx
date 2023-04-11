import Link from "next/link";
import { useState } from "react";
import styles from "../src/styles/Blog.module.css";

const Blog = ({ dataJson }) => {
  const jsonData = JSON.parse(dataJson);
  const [blogData, setBlogData] = useState(jsonData);
  console.log(blogData);
  return (
    <div className={styles.blogPageContainerMain}>
      <div className={styles.blogPageContainer}>
        <h2 className={styles.blogPageHeading}>Latest blogPages</h2>

        <div className={styles.blogPageItemContainer}>
          {blogData.map((data) => {
            return (
              <>
                <Link href={`/blogpost/${data.slug}`}>
                  <h2 className={styles.blogPageItemHeading}>{data.title}</h2>
                </Link>
                <p className={styles.blogPageItemContent}>
                  {data.content.substr(0, 50) + "..."}
                </p>
                <br />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
