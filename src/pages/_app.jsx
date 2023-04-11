import "@/styles/globals.css";
import Navbar from "../../components/Navbar";
import { ToastContainer } from "react-toastify";
import SessionProvider from "next-auth/react";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "../../utils/connect";
export default function App({ Component, pageProps }) {
  const [onProfileClick, setOnProfileClick] = useState(false);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div onClick={() => setOnProfileClick(false)}>
        <Navbar
          setOnProfileClick={setOnProfileClick}
          onProfileClick={onProfileClick}
        />
        <Component {...pageProps} />
      </div>
    </>
  );
}

// openssl rand - base64 32
