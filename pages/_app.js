import { Footer, HeaderNav } from "@/components/HeaderNav";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <div>
    <HeaderNav />
    <Component {...pageProps} />;
    <Footer />
  </div>
}
