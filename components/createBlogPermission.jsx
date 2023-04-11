import { toast } from "react-toastify";
import styles from "../src/styles/CreateBlogPermission.module.css";

const CreateBlogPermission = ({
  setShowCreateBlogPermission,
  blogContent,
  setBlogContent,
}) => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const jsonData = JSON.stringify(blogContent);
    const option = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: jsonData,
    };
    const postContent = await fetch("/api/createBlog", option);
    const jsonPostContent = await postContent.json();
    await setShowCreateBlogPermission(false);
    notify();
    setBlogContent({ title: "", content: "" });
  };
  const notify = () => {
    toast.success("Blog created successfully!!");
  };
  return (
    <div className={styles.createBlogPermissionContainerMain}>
      <div className={styles.createBlogPermissionContainer}>
        <div className={styles.createBlogPermissionHeadingContainer}>
          <h2 className={styles.createBlogPermissionHeading}>
            Do you want to create the blog!?
          </h2>
        </div>
        <div className={styles.createBlogPermissionButtonsContainer}>
          <form
            action="/create"
            onSubmit={onSubmit}
            className={styles.createBlogPermissionForm}
          >
            <button
              className={styles.createBlogPermissionButtons}
              type="submit"
            >
              Yes
            </button>
            <button
              className={styles.createBlogPermissionButtons}
              onClick={() => {
                setShowCreateBlogPermission(false);
              }}
            >
              No
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogPermission;
