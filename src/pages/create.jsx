import { useState } from "react";
import styles from "../styles/CreateBlogs.module.css";
import CreateBlogPermission from "../../components/createBlogPermission";

const Create = () => {
  const [blogContent, setBlogContent] = useState({
    title: "",
    content: "",
  });
  const [showCreateBlogPermission, setShowCreateBlogPermission] =
    useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogContent((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  if (showCreateBlogPermission) {
    return (
      <CreateBlogPermission
        setShowCreateBlogPermission={setShowCreateBlogPermission}
        blogContent={blogContent}
        setBlogContent={setBlogContent}
      />
    );
  } else
    return (
      <div className={styles.createContainer}>
        <div className={styles.createHeadingMainContainer}>
          <h1 className={styles.createHeadingMain}>Create your own Blog</h1>
        </div>
        <form className={styles.createBlogForm} action="/" method="post">
          <div className={styles.createBlogFromItems}>
            <span className={styles.createFormItemSpan}>title</span>{" "}
            <input
              className={styles.createFormItemInput}
              type="text"
              name="title"
              onChange={handleChange}
              value={blogContent.title}
            />
          </div>
          <div className={styles.createBlogFromItems}>
            <span className={styles.createFormItemSpan}>Content</span>{" "}
            <textarea
              className={styles.createFormItemInput}
              type="text"
              rows={13}
              cols={90}
              name="content"
              onChange={handleChange}
              value={blogContent.content}
            />
          </div>
          <button
            className={styles.createBlogFormSubmitButton}
            onClick={() => {
              setShowCreateBlogPermission(true);
            }}
          >
            Create Your Blog
          </button>
        </form>
      </div>
    );
};

export default Create;
