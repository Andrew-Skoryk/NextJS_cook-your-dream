"use client";

import Heading from "app/components/UI/Heading";
import { useState, type ChangeEvent } from "react";
import { useAuth } from "@clerk/nextjs";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const { userId } = useAuth();

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    setTitle("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <Heading>Create new Blog post </Heading>

      <span>Hello, {userId}</span>

      <form
        onSubmit={() => handleSubmit}
        className="flex flex-col gap-3 text-center text-lg font-medium"
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleChange}
        />

        <label htmlFor="body">Body</label>
        <textarea name="body"></textarea>
        <button className="m-auto mt-7 w-min rounded-md bg-lime-500 px-5 py-2 font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
}
