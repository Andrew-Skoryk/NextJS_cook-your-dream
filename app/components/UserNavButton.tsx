"use client";

import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs/dist/app-beta/client";
import { clerkAppearance } from "./UI/clerkAppearance";
import NavLink from "./UI/NavLink";

function UserNavButton() {
  return (
    <li className="pl-4">
      <SignedIn>
        <UserButton
          userProfileMode="navigation"
          userProfileUrl="/profile"
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
