import { Header } from "@/components/Header";
import { Footer, HeaderNav } from "@/components/HeaderNav";
import { Hero } from "@/components/Hero";
import { MainLaytout } from "@/components/MainLayout";

export default function Home() {
  return (
    <MainLaytout className="px-5 md:px-0">

      <Header />
      <Hero />

    </MainLaytout>
  )
}

