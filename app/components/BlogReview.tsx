import Link from 'next/link';
import Image from "next/image";
import { type FC } from 'react';
import { type BlogPost } from "@prisma/client";

type Props = {
  blogPost: BlogPost;
};

const BlogReview: FC<Props> = ({ blogPost }) => {
  return (
    <div className="relative rounded-lg bg-yellow-50 p-5 text-center shadow-2xl">
        <Image
          src={blogPost.imgUrl}
          alt={"category"}
          height={140}
          width={140}
          className={
            "mx-auto mb-4 w-auto"
          }
        />

      <h3 className="mb-5 text-center text-2xl font-semibold tracking-wide">
        {blogPost.title}
      </h3>

      <p className="mb-16 block text-justify">{blogPost.body}</p>

      <Link
        href={`${blogPost.id}`}
        className={
          "absolute bottom-5 right-auto w-fit -translate-x-1/2 rounded-lg bg-yellow-300 p-3 font-semibold text-lime-800 transition-colors duration-300 ease-in-out hover:bg-yellow-400 hover:text-lime-700 active:bg-yellow-500"
        }
      >
        Read more...
      </Link>
    </div>
  );
};

export default BlogReview;
