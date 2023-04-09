import Heading from "app/components/UI/Heading";
import type { Metadata } from "next";
import {
  SignIn,
  currentUser,
  UserProfile,
} from "@clerk/nextjs/app-beta";

export const metadata: Metadata = {
  title: "Profile",
  description: "This page contain user management interface",
};

async function Profile() {
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
          <Heading>Please sign in</Heading>
          <SignIn appearance={clerkAppearance} />
        </article>
      )}
    </section>
  );
}

export default Profile;
