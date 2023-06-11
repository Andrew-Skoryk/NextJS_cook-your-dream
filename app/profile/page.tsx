import Heading from "app/components/UI/Heading";
import type { Metadata } from "next";
import {
  SignIn,
  currentUser,
  UserProfile,
} from "@clerk/nextjs/app-beta";
import { clerkAppearance } from "app/components/UI/clerkAppearance";

export const metadata: Metadata = {
  title: "Profile",
  description: "This page contains user management interface",
};

async function Profile() {
  const user = await currentUser();

  return (
    <section className="mb-20 flex flex-col">
      {user ? (
        <>
          <Heading>Hello, {user.firstName}!</Heading>
          <article>
            <UserProfile appearance={clerkAppearance} />
          </article>
        </>
      ) : (
        <article>
          <Heading>Please sign-in</Heading>
          <SignIn appearance={clerkAppearance} />
        </article>
      )}
    </section>
  );
}

export default Profile;
