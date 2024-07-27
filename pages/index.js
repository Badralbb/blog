import { Header } from "@/components/Header";
import { Footer, HeaderNav } from "@/components/HeaderNav";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="px-5">
      <HeaderNav />
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
