import type { Metadata } from "next";


import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";



export const metadata: Metadata = {
  title: "stats page",
  description: "My Stats section",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider>
    <div className="min-h-screen flex flex-col">
      <Header/>
        { /* HEADER */}
        <main className="flex-1">{children}</main>
      
    </div>
    
  <SanityLive/>
  </ClerkProvider>
  );
}
