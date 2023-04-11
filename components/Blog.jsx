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
                <div className={styles.blogPageMapContainer}>
                  <div className={styles.blogPageMapSpan}>
                    <img
                      className={styles.blogPageMapUserImageUrl}
                      src={data.userImageUrl}
                      alt="Img"
                    />
                  </div>

                  <Link href={`/blogpost/${data.slug}`}>
                    <h2 className={styles.blogPageItemHeading}>{data.title}</h2>
                  </Link>
                  <p className={styles.blogPageItemContent}>
                    {data.content.substr(0, 50) + "..."}
                  </p>
                  <div className={styles.blogPageMapUserNameContainer}>
                    <h1 className={styles.blogPageMapUserName}>
                      -{data.userName}
                    </h1>
                  </div>
                </div>
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
