import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ dataJson }) {
  return (
    <>
      <Head>
        <title>My Blog Op</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="nextJs, my blog op, my op blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.center}>My Blog Op</h1>

        {/* <Image
          src="/codingImg.png"
          className={styles.blogHomeImg}
          alt="img"
          width={500}
          height={316}
          loader={"/codingImg.png"}
        /> */}
        <img
          src="/codingImg.png"
          className={styles.blogHomeImg}
          alt="img"
          width={500}
          height={316}
        />
      </main>

      {/* <BlogComponent dataJson={dataJson} /> */}
    </>
  );
}

// export async function getServerSideProps() {
//   const data = await fetch("http://localhost:3000/api/blogs");
//   const dataJson = await data.json();
//   return {
//     props: dataJson ? { dataJson } : [],
//   };
// }

// export async function getStaticProps() {
//   const dirName = await fs.promises.readdir("blogData");
//   let dataJson = [];
//   await Promise.all(
//     dirName.map(async (item) => {
//       const allData = await fs.promises.readFile("blogData/" + item, "utf8");
//       dataJson.push(JSON.parse(allData));
//     })
//   );
//   // res.status(200).json(jsonData);
//   return {
//     props: { dataJson },
//   };
// }
