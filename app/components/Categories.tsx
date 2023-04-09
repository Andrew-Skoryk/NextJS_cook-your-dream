import Image from "next/image";
import Link from "next/link";
import { type PropsWithChildren } from "react";

type Props = {
  img: string;
  title: string;
};

const Categories = ({ img, title, children }: PropsWithChildren<Props>) => {
  return (
    <div className="relative rounded-lg bg-yellow-50 p-7 text-center shadow-2xl">
      <div className="relative mx-auto mb-4 h-80 w-80">
        <Image
          src={img}
          alt={"category"}
          fill
          placeholder="empty"
          sizes="(max-width: 320px) 100vw,
              (max-width: 320px) 50vw,
              33vw"
          className={
            "mx-auto mb-4 rounded-full object-cover transition-transform duration-300 hover:scale-110"
          }
        />
      </div>

      <h3 className="relative mb-5 text-center text-2xl font-semibold tracking-wide">
        {title}

        <span className="absolute left-1/2 -bottom-1/3 block h-1 w-1/2 -translate-x-1/2 bg-lime-500" />
      </h3>

      <p className="mb-16 block text-justify">{children}</p>

      <Link
        href={"/" + title.toLocaleLowerCase()}
        className={
          "absolute bottom-7 right-auto w-fit -translate-x-1/2 rounded-lg bg-yellow-300 py-3 px-7 font-semibold text-lime-800 transition-colors transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-yellow-400 hover:text-lime-700 active:bg-yellow-500"
        }
      >
        Explore recipes
      </Link>
    </div>
  );
};

export default Categories;
