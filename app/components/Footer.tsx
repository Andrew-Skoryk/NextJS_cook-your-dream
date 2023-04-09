import Link from 'next/link';
import { type FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="rounded-t-md bg-gray-800 px-8 pt-12 text-yellow-50">
      <div className="m-auto mb-8 flex justify-between px-12 text-center lg:max-w-4xl">
        <Link href="/">Recipes</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/aboutus">About us</Link>
        <Link href="/profile">Profile</Link>
      </div>

      <p className="m-auto pb-4 text-center text-sm font-extralight text-gray-300">
        Copyright © 2023 - All right reserved by &rdquo;Cook Your Dream&rdquo;
        Ltd
      </p>
    </footer>
  );
};

export default Footer;
