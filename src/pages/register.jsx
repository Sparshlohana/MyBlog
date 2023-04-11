import React from "react";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";

const Register = () => {
  return (
    <SessionProvider>
      <InnerRegister />
    </SessionProvider>
  );
};

const InnerRegister = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.name}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in</p>
        <button onClick={() => signIn()}>Sign-In</button>
      </div>
    );
  }
};

export default Register;
