import style from "../../styles/BlogPost.module.css";
import { useEffect, useState } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Slug = () => {
  return (
    <SessionProvider>
      <SessionProviderComponent />
    </SessionProvider>
  );
};

const SessionProviderComponent = () => {
  const [blogs, setBlog] = useState([]);

  const router = useRouter();
  const { slug } = router.query;
  console.log("Slug=====>", slug);
  useEffect(() => {
    handleApiCall();
  }, []);

  const handleApiCall = async () => {
    const getBlogs = await fetch(`/api/getBlog?slug=${slug}`);
    const getBlogsJson = await getBlogs.json();
    setBlog(getBlogsJson);
  };

  console.log(blogs);
  const { data: session } = useSession();
  if (session) {
    return (
      <div className={style.blogPostContainer}>
        <h1 className={style.blogPostTitle}>{blogs?.title}</h1>
        <hr className={style.blogPostHr} />
        <div className={style.blogPostContentContainer}>
          <p className={style.blogPostContent}>{blogs?.content}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.blogPostSignInContinueContainer}>
        <h1 className={style.blogPostSignInContinue}>Sign in to continue</h1>
      </div>
    );
  }
};

// export async function getServerSideProps(context) {
//   const slug = context.query.slug;
//   // const data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
//   // const jsonData = await data?.json();
//   const getSingleBlogData = await BlogContent.findOne({ slug: slug });
//   const jsonData = JSON.stringify(getSingleBlogData);
//   return {
//     props: { jsonData },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: "1" } },
//       { params: { slug: "2" } },
//       { params: { slug: "3" } },
//     ],
//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {
//   const slug = context.params.slug;
//   let jsonData = await fs.promises.readFile(`blogData/${slug}.json`, "utf-8");
//   // console.log(jsonData);
//   return {
//     props: { jsonData: JSON?.parse(jsonData) },
//   };
// }

export default Slug;
