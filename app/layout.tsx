import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./globals.css";
import { Lora } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs/app-beta";

export const metadata = {
  title: "Cook Your Dream",
  description: "Cookbook and coocking blog",
};

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={lora.className}>
        <body className="flex min-h-screen flex-col bg-yellow-100 text-green-900">
          <Navigation />

          <main className="m-auto max-w-screen-2xl flex-grow px-12">
            {children}
          </main>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
