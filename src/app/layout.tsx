import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata = {
  title: "Cook Your Dream",
  description: "Cookbook and coocking blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-green-900">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
