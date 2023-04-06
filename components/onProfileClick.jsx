import { signOut } from "next-auth/react";
import styles from "../src/styles/onProfileClick.module.css";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

const OnProfileClick = ({ session, setOnProfileClick, onProfileClick }) => {
  return (
    <div
      className={styles.onProfileClick}
      onClick={(e) => {
        e.stopPropagation();
        setOnProfileClick(true);
      }}
    >
      <div className={styles.profileAccountInformationContainer}>
        <div className={styles.profileImageContainer}>
          <img
            src={session.user.image}
            className={styles.profileImage}
            alt="profileImg"
          />
        </div>
        <div className={styles.profileAccountInformation}>
          <p className={styles.profileAccountUserName}>{session.user.name}</p>
          <p className={styles.profileAccountEmail}>{session.user.email}</p>
        </div>
      </div>

      <div className={styles.profileAccountCreateYourOwnBlogContainer}>
        <Link href="/create">
          <span className={styles.profileAccountCreateYourOwnBlog}>
            Create Your Own Blog
          </span>
        </Link>
      </div>

      <div className={styles.profileAccountSignOutContainer}>
        <FaSignOutAlt className={styles.profileAccountSignOutIcon} />{" "}
        <span
          className={styles.profileAccountSignOut}
          onClick={() => signOut()}
        >
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default OnProfileClick;
