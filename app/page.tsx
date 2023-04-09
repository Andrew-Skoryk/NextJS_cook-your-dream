import Categories from "./components/Categories";
import Heading from "./components/UI/Heading";
import Paragraph from "./components/UI/Paragraph";

export default function Home() {
  return (
    <>
      <section className="mb-12 space-y-5">
        <Heading>Welcome to Cook Your Dream!</Heading>

        <Paragraph>
          Welcome to Cook Your Dream, the ultimate destination for all things
          cooking and baking! Whether you&apos;re a seasoned home cook or just
          starting out, our website has something for everyone.
        </Paragraph>

        <Paragraph>
          Browse our collection of delicious recipes, ranging from quick and
          easy meals to more elaborate dishes for special occasions. All of our
          recipes are tested and perfected, ensuring that your meals come out
          perfectly every time.
        </Paragraph>

        <Paragraph>
          Looking to expand your cooking skills? Check out our blog section,
          where we share tips and tricks for everything from knife skills to
          advanced cooking techniques. You&apos;ll also find reviews of the
          latest cooking gadgets and appliances, so you can make informed
          decisions about what to add to your kitchen. At Cook Your Dream, we
          believe that cooking should be fun and accessible to everyone.
          That&apos;s why we offer a range of resources to help you on your
          culinary journey, including cooking tutorials, ingredient guides, and
          more.
        </Paragraph>

        <Paragraph>
          So whether you&apos;re looking for inspiration for your next meal or
          want to take your cooking skills to the next level, you&apos;ve come
          to the right place. Join our community of food lovers today and start
          cooking your dreams!
        </Paragraph>
      </section>

      <section className="mb-16 grid gap-8 md:grid-flow-col">
        <Categories
          title="Breakfast"
          img="https://daqvdvltgohkkrwpgpfd.supabase.co/storage/v1/object/public/img/eiliv-aceron-uAm1CZMdPCw-unsplash.jpg"
        >
          Start your day off right with our delicious breakfast recipes. From
          savory omelets to sweet pancakes, we&apos;ve got everything you need
          to fuel your morning!
        </Categories>

        <Categories
          title="Lunch"
          img="https://daqvdvltgohkkrwpgpfd.supabase.co/storage/v1/object/public/img/mariana-medvedeva-fk6IiypMWss-unsplash.jpg"
        >
          Keep your energy levels up with our satisfying lunch recipes. Whether
          you&apos;re in the mood for a hearty salad or a comforting soup,
          we&apos;ve got you covered.
        </Categories>

        <Categories
          title="Dinner"
          img="https://daqvdvltgohkkrwpgpfd.supabase.co/storage/v1/object/public/img/annie-spratt-oT7_v-I0hHg-unsplash.jpg"
        >
          End your day on a high note with our flavorful dinner recipes. From
          classic comfort foods to exotic dishes from around the world,
          we&apos;ve got something for everyone to enjoy.
        </Categories>
      </section>

      <section className="mb-16 text-center">
        <h2 className="mb-4  text-3xl font-semibold">
          Culinary Blog: Cooking Deliciously
        </h2>

        <p className="mb-8 text-lg">
          Exciting breakfast and lunch ideas, a collection of the best recipes
          by categories, and intriguing culinary blogs.
        </p>

        <article className="grid gap-8 px-10 md:grid-flow-col"></article>
      </section>
    </>
  );
}
