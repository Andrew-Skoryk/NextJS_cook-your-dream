import Heading from "app/components/UI/Heading";
import type { Metadata } from "next";
import { redirect } from 'next/navigation';
import {
  SignIn,
  currentUser,
} from "@clerk/nextjs/app-beta";
import { clerkAppearance } from "app/components/UI/clerkAppearance";

export const metadata: Metadata = {
  title: "Login",
  description: "This page contains login form",
};

async function Login() {
  const user = await currentUser();

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
