import Link from "next/link";
import styles from "../src/styles/Home.module.css";

const Navbar = () => {
  return (
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
      </ul>
    </nav>
  );
};

export default Navbar;
