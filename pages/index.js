import { Header } from "@/components/Header";
import { Footer, HeaderNav } from "@/components/HeaderNav";
import { Hero } from "@/components/Hero";
import { MainLaytout } from "@/components/MainLayout";
import Head from "next/head";

// import AwesomeSlider from "react-awesome-slider";
// import AwsSliderStyles from "react-awesome-slider/src/styles.scss";
export default function Home() {
  return (
    <main>
      <MainLaytout className="px-5 md:px-0">
        <Header />
        <Hero />
      </MainLaytout>
    </main>
  );
}
