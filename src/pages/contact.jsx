import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    description: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jsonData = JSON.stringify(formData);
      const option = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: jsonData,
      };
      console.log(option);
      const response = await fetch("/api/contact", option);
      const result = await response.json();
      console.log("Data Posted Successfully");
      const notify = () => {
        toast.success("Thanks for Contacting Us!!");
      };
      notify();
      setFormData({
        name: "",
        phoneNumber: "",
        description: "",
        email: "",
      });
    } catch (error) {
      console.log(error.message);
      const notify = () => {
        toast.error("Oops! Something went wrong!");
      };
      notify();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // destructure name and value from the event target

    setFormData((prev) => {
      return {
        ...prev, // spread previous state object to retain its other values
        [name]: value, // update the value of the field whose name matches the `name` variable
      };
    });
  };

  // console.log(formData);
  return (
    <div className={styles.formContainer}>
      <form
        action="/"
        onSubmit={handleSubmit}
        className={styles.form}
        method="post"
      >
        <center>
          <h1 className={styles.formHeading}>Contact Us</h1>
        </center>
        <div className={styles.formInputContainer}>
          <input
            type="text"
            name="name"
            required
            className={styles.formInput}
            onChange={handleChange}
            value={formData.name}
          />
          <span className={styles.formSpan}>Full Name</span>
        </div>

        <div className={styles.formInputContainer}>
          <input
            type="number"
            name="phoneNumber"
            required
            className={styles.formInput}
            onChange={handleChange}
            value={formData.phoneNumber}
          />
          <span className={styles.formSpan}>Phone Number</span>
        </div>

        <div className={styles.formInputContainer}>
          <input
            type="text"
            name="description"
            className={styles.formInput}
            onChange={handleChange}
            required
            value={formData.description}
          />
          <span className={styles.formSpan}>Description</span>
        </div>

        <div className={styles.formInputContainer}>
          <input
            type="email"
            name="email"
            className={styles.formInput}
            onChange={handleChange}
            value={formData.email}
            required
          />
          <span className={styles.formSpan}>Email</span>
        </div>

        <center>
          <button className={styles.formSubmitButton} type="submit">
            Submit
          </button>
        </center>
      </form>
    </div>
  );
};

export default Contact;
