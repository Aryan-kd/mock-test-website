import type { Metadata } from "next";
import "./globals.css";
// Fontawesome Icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// Components
import Navbar from "@/components/Navbar/Navbar";
import BottomNavbar from "@/components/Navbar/BottomNavbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <div className="w-full h-fit sticky z-50 top-0 md:block hidden">
          <Navbar />
        </div>
        <main className="min-h-[90vh] w-full">{children}</main>
        <div className="w-full h-fit sticky z-50 bottom-0 md:hidden block">
          <BottomNavbar />
        </div>
      </body>
    </html>
  );
}
