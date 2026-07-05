import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen relative">
      <div className="aurora-blobs" aria-hidden />
      <Navbar />
      <main className="pt-28">{children}</main>
      <Footer />
    </div>
  );
}
