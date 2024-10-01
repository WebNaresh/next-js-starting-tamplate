import Navbar from "@/components/navbar";
import { NextAuthProvider } from "@/components/wrapper/next-auth-provider";
import { ThemeProvider } from "@/components/wrapper/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./(bare)/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className="dark"
      style={{ colorScheme: "dark" }}
    >
      <body className={cn(inter.className, "flex flex-col h-[100dvh] ")}>
        <NextAuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <Toaster />

            <div className="h-full w-full ">{children}</div>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
