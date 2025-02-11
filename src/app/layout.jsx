import "./globals.css";

import NavbarComponent from "@/components/navbar/NavbarComponent";
import FooterComponent from "@/components/footer/FooterComponent";
import Title from "@/components/title/Title";

export const metadata = {
  title: "Centro estético VM",
  description: "Centro estético VM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <NavbarComponent />
        <main className="pb-12    md:flex-1 md:pb-2">
          <Title />
          {children}
        </main>
        <FooterComponent />
      </body>
    </html>
  );
}
