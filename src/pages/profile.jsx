const { SessionProvider, useSession } = require("next-auth/react");
import { useEffect, useState } from "react";
import styles from "../styles/ProfilePage.module.css";
import { AiFillMail } from "react-icons/ai";
import Blog from "./blog";
import Link from "next/link";

const Profile = () => {
  return (
    <SessionProvider>
      <ProfileComponent />
    </SessionProvider>
  );
};

const MailComponent = ({ session }) => {
  return <p className={styles.profilePageMailPara}> {session?.user?.email}</p>;
};
const ProfileComponent = () => {
  const { data: session } = useSession();
  const [showMail, setShowMail] = useState(false);
  const [getEmailCount, setGetEmailCount] = useState([]);
  const handleClick = () => {
    setShowMail(!showMail);
  };

  useEffect(() => {
    getEmailCountData();
  }, [session]);

  const getEmailCountData = async () => {
    console.log("email pfl====>", session?.user?.email);
    const emailCount = await fetch(
      `/api/numberOfBlogsPerUser?email=${session?.user?.email}`
    );
    const jsonEmailCount = await emailCount.json();
    console.log(jsonEmailCount);
    setGetEmailCount(jsonEmailCount);
  };
  console.log(getEmailCount);
  // getEmailCountData();
  return (
    <>
      <div className={styles.profilePageContainer}>
        <div className={styles.profilePageProfileContainer}>
          <div className={styles.profilePageImageContainer}>
            <img
              className={styles.profilePageImage}
              src={session?.user?.image}
              alt="ProfilePic"
            />
          </div>

          <div className={styles.profilePageContentContainer}>
            {/* <div className={styles.profilePageUserNameContainer}> */}
            <h1 className={styles.profilePageUserHeading}>
              {session?.user?.name}
            </h1>
            {/* </div> */}
            <div className={styles.profilePageUserNameContainer}>
              {/* <div className={styles.profilePageContent}> */}
              <AiFillMail
                onClick={() => {
                  handleClick();
                }}
                className={styles.profilePageUserMailIcon}
              />
              {/* </div> */}
              <p className={styles.profilePageContent}>
                Number Of Posts: {getEmailCount.count}
              </p>
            </div>
            {/* <div className={styles.profilePageUserNameContainer}> */}
            {/* </div> */}
            {showMail ? <MailComponent session={session} /> : null}
          </div>
        </div>
      </div>

      <div className={styles.blogPageContainerMain}>
        <div className={styles.blogPageContainer}>
          <h2 className={styles.blogPageHeading}>Latest blogPages</h2>

          <div className={styles.blogPageItemContainer}>
            {getEmailCount?.data?.map((data) => {
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
                      <h2 className={styles.blogPageItemHeading}>
                        {data.title}
                      </h2>
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
    </>
  );
};

export default Profile;
