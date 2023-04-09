"use client";

import { signIn } from "next-auth/react";

const LoginButton = () => {
const handleSignIn = () => {
  signIn("google").catch((error) => {
    console.log(error);
  });
};

  return (
    <button
      className="w-max py-2 px-7 m-auto bg-sky-500 text-yellow-100 rounded-lg"
      onClick={handleSignIn}
    >
      Sign In
    </button>
  );
};

export default LoginButton;
