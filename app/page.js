"use client"

import { Header } from "@/components/Header";

import { Hero } from "@/components/Hero";
import { MainLaytout } from "@/components/MainLayout";


import Head from "next/head";


export default function Home() {
  return (
    <main>
      <Head>
        <meta property="og:title" content="Badral's Blog" />
        <meta property="og:description" content="Badral Blog's description" />
        <meta
          property="og:image"
          content="https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1"
        />
        <meta property="og:type" content="website" />
      </Head>
      <MainLaytout className="px-5 md:px-0">
        <Header />
        <Hero />
      </MainLaytout>


  
    </main>
  );
}
