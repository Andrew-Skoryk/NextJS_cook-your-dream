import Heading from "app/components/UI/Heading";
import type { Metadata } from "next";
import { currentUser, SignUp } from "@clerk/nextjs/app-beta";
import { clerkAppearance } from "app/components/UI/clerkAppearance";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "This page contains Sign Up interface",
};

async function Profile() {
  const user = await currentUser();

  if (user) {
    redirect("/profile");
  }

  return (
    <section className="mb-20 flex flex-col">
      <article>
        <Heading>Please fill form</Heading>
        <SignUp appearance={clerkAppearance} />
      </article>
    </section>
  );
}

export default Profile;
