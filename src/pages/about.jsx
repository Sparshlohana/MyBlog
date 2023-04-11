import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <div className={styles.aboutContainerMain}>
        <div className={styles.aboutHeadingContainer}>
          <h1 className={styles.aboutHeading}>About</h1>
        </div>
        <div className={styles.aboutServiceContainer}>
          <p className={styles.aboutService}>
            Hii, My name is Sparsh. Nice to meet you!!
          </p>
        </div>
      </div>
      <hr />
      <div className={styles.aboutContactMeContainer}>
        <h1 className={styles.aboutContactHeading}>Contact Me</h1>
        <div className={styles.iconContainer}>
          <a
            href="https://api.whatsapp.com/send?phone=8154000250&text=Heyy%20Sparsh..%20Nice%20to%20meet%20you!!!"
            className={styles.contactMeIconsAnchor}
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
              alt="WPIcon"
              className={styles.contactMeIcons}
            />
          </a>
        </div>

        <div className={styles.iconContainer}>
          <a
            href="https://www.instagram.com/its_.sparshiii/"
            className={styles.contactMeIconsAnchor}
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
              alt="WPIcon"
              className={styles.contactMeIcons}
            />
          </a>
        </div>
        <div className={styles.iconContainer}>
          <a
            href="https://www.linkedin.com/in/sparsh-r-lohana-845457242/"
            className={styles.contactMeIconsAnchor}
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="WPIcon"
              className={styles.contactMeIcons}
            />
          </a>
        </div>
        <div className={styles.iconContainer}>
          <a
            href="https://github.com/Sparshlohana"
            className={styles.contactMeIconsAnchor}
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
              alt="WPIcon"
              className={styles.contactMeIcons}
            />
          </a>
        </div>
        <div className={styles.iconContainer}>
          <a
            href="https://twitter.com/Sparsh_8304"
            className={styles.contactMeIconsAnchor}
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src="https://www.wellybox.com/wp-content/uploads/2023/02/pngkey.com-twitter-logo-png-transparent-27646.png"
              alt="WPIcon"
              className={styles.contactMeIcons}
            />
          </a>
        </div>
        <div className={styles.iconContainer}>
          <a
            href="https://www.facebook.com/sparshr.lohana"
            className={styles.contactMeIconsAnchor}
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
              alt="WPIcon"
              className={styles.contactMeIcons}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
