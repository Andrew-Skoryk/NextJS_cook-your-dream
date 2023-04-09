import Heading from "app/components/UI/Heading";
import type { Metadata } from "next";
import { redirect } from 'next/navigation';
import {
  SignIn,
  currentUser,
} from "@clerk/nextjs/app-beta";

export const metadata: Metadata = {
  title: "Login",
  description: "This page contain login form",
};

async function Login() {
  const user = await currentUser();
  const clerkAppearance = {
    variables: {
      colorPrimary: "rgb(234 179 80)",
      colorText: "rgb(20 83 45)",
      fontFamily: "Lora",
      fontSize: "1.3rem",
      colorBackground: "rgb(254 252 232)",
    },
  };

  if (user) {
     redirect("/profile")
  }

  return (
    <section className="mb-20 flex flex-col">
      <Heading>Login form</Heading>
        <article>
          <SignIn appearance={clerkAppearance} />
        </article>
    </section>
  );
}

export default Login;
