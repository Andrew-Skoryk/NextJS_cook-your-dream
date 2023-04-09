import { type BlogPost } from '@prisma/client';
import type { FC } from 'react';
import BlogReview from './BlogReview';

type Props = {
  blogData: BlogPost[];
};

const BlogList: FC<Props> = ({ blogData }) => {
  return (
    <article className="grid md:grid-cols-2 lg:grid-cols-4">
      {blogData.map((post) => (
        <BlogReview blogPost={post} key={post.id} />
      ))}
    </article>
  );
};

export default BlogList;
