import type { Metadata } from "next";
import Heading from "../components/UI/Heading";

export const metadata: Metadata = {
  title: "Page not found",
};

function notFound() {
  return (
    <section>
      <Heading>Oops! Page not found...</Heading>
    </section>
  );
}

export default notFound;
