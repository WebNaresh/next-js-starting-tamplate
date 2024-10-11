// app/layout.tsx or app/[section]/layout.tsx
import { NextAuthProvider } from "@/components/wrapper/next-auth-provider";
import { ThemeProvider } from "@/components/wrapper/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./(bare)/globals.css";

const inter = Inter({ subsets: ["latin"] });

// Shared metadata for all pages within this layout
export const metadata: Metadata = {
  title: "Nitin Dada Ghotkule - Empowering Rural Communities",
  description:
    "Nitin Dada Ghotkule is committed to rural transformation through sustainable development, entrepreneurship, and community welfare initiatives.",
  openGraph: {
    title: "Nitin Dada Ghotkule - Rural Development Visionary",
    description:
      "Discover how Nitin Dada Ghotkule is leading impactful projects in rural development, water conservation, and education.",
    url: "https://yourdomain.com",
    images: [
      {
        url: "https://yourdomain.com/images/og-image.jpg", // Replace with actual image URL
        alt: "Nitin Dada Ghotkule",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitin Dada Ghotkule - Rural Development Leader",
    description:
      "Explore the projects and vision of Nitin Dada Ghotkule in empowering rural communities.",
    images: [
      {
        url: "https://yourdomain.com/images/twitter-image.jpg", // Replace with actual image URL
        alt: "Nitin Dada Ghotkule",
      },
    ],
  },
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
      <link
        rel="icon"
        href="/favicon.ico"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body
        className={cn(inter.className, "flex flex-col h-[100dvh] contents")}
      >
        <NextAuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Toaster />
            <div className="h-full w-full">{children}</div>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
