import { Header } from "@/components/Header";
import { HeaderNav } from "@/components/HeaderNav";
import { Hero } from "@/components/Hero";


export default function Home() {
  return (
    <main className="px-5">
      <Header/>
      <HeaderNav/>
        <Hero/>
      
    </main>
  );
}
