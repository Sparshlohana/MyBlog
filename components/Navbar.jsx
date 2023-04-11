import { SessionProvider, signIn, useSession } from "next-auth/react";
import Link from "next/link";
import styles from "../src/styles/Home.module.css";
import OnProfileClick from "./onProfileClick";

const Navbar = ({ setOnProfileClick, onProfileClick }) => {
  return (
    <SessionProvider>
      <Register
        setOnProfileClick={setOnProfileClick}
        onProfileClick={onProfileClick}
      />
    </SessionProvider>
  );
};

const postSession = async (session) => {
  try {
    if (session) {
      const stringifySession = JSON.stringify(session);
      const option = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: stringifySession,
      };
      const postSessionData = await fetch("/api/storeSession", option);
      const postSessionDataJson = await postSessionData.json();
    }
  } catch (error) {
    console.log(error.message);
  }
};

const Register = ({ setOnProfileClick, onProfileClick }) => {
  const { data: session } = useSession();
  postSession(session);
  const handleClick = (e) => {
    e.stopPropagation();
    setOnProfileClick(!onProfileClick);
  };

  return (
    <>
      <nav className={styles.mainNav}>
        <ul className={styles.mainNavUl}>
          <Link href="/">
            <li className={styles.mainNavLi}>Home</li>
          </Link>
          <Link href="/about">
            <li className={styles.mainNavLi}>About</li>
          </Link>
          <Link href="/blog">
            <li className={styles.mainNavLi}>Blog</li>
          </Link>
          <Link href="/contact">
            <li className={styles.mainNavLi}>Contact</li>
          </Link>
          <div className={styles.navSignInButtonContainer}>
            {session ? (
              <>
                <img
                  src={session.user.image}
                  alt="profileImg"
                  className={styles.navProfileImage}
                  onClick={handleClick}
                />
              </>
            ) : (
              <button
                className={styles.navSignInButton}
                onClick={() => {
                  signIn();
                }}
              >
                Sign-In
              </button>
            )}
          </div>
        </ul>
      </nav>
      {onProfileClick ? (
        <OnProfileClick
          setOnProfileClick={setOnProfileClick}
          onProfileClick={onProfileClick}
          session={session}
        />
      ) : null}
    </>
  );
};

export default Navbar;
