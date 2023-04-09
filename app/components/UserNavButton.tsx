"use client";

import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs/dist/app-beta/client";
import NavLink from "./UI/NavLink";

function UserNavButton() {
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
    <li className="pl-4">
      <SignedIn>
        <UserButton
          userProfileMode="navigation"
          userProfileUrl="profile"
          appearance={{
            ...clerkAppearance,
            elements: { userButtonAvatarBox: "h-14 w-14" },
          }}
        />
      </SignedIn>

      <SignedOut>
        {<NavLink href="/login">Log in</NavLink>}
      </SignedOut>
    </li>
  );
}

export default UserNavButton;
