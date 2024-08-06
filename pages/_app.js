import { Footer, HeaderNav } from "@/components/HeaderNav";
import "@/styles/globals.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function App({ Component, pageProps }) {
  return <div>

    <Component {...pageProps} />

  </div>
}
