import type { Metadata } from "next";
import { prisma } from "../../prisma/client";
import Link from "next/link";
import Heading from "../components/UI/Heading";
import BlogList from "../components/BlogList";
import {
  SignedIn,
  SignedOut,
} from "@clerk/nextjs/dist/app-beta/client";

export const metadata: Metadata = {
  title: "Blog",
  description: "This page contain blog posts",
};

export const revalidate = 60;

async function getBlogList() {
  const data = await prisma.blogPost.findMany({
    orderBy: { created_at: "desc" },
  });

  return data;
}

async function Blog() {
  const blogDataFromServer = getBlogList();
  const blogData = await blogDataFromServer;


  return (
    <section className="mb-12 flex flex-col">
      <Heading>Blog page 📚📑</Heading>

      <BlogList blogData={blogData} />

      <SignedIn>
        <Link
          href={"/blog/createblog"}
          className="mb-8 max-w-fit rounded-xl bg-lime-500 p-3 font-semibold text-sky-700 transition-colors duration-300 hover:bg-lime-400 active:bg-lime-300"
        >
          Add new Blog post
        </Link>
      </SignedIn>

      <SignedOut>
        <span>
          In order to create new blog post please
          {
            <Link
              href="/login"
              className="rounded-lg px-2 py-1 font-semibold transition-colors duration-300 hover:bg-yellow-400 active:bg-yellow-500"
            >
              login
            </Link>
          }
        </span>
      </SignedOut>
    </section>
  );
}

export default Blog;
