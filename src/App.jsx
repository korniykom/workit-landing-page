import CallToAction from "./CallToAction";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Value from "./Value";
//   md:bg-[url(src/assets/images/background/desktop-bg.svg)]
export default function App() {
  return (
    <>
      <div className="w h-[1446px] bg-[url(src/assets/images/background/mobile-bg.svg)] bg-cover bg-center min-[420px]:bg-[url(src/assets/images/background/tablet-bg.svg)]">
        <Header />
        <Hero />
        <Value />
      </div>
      <CallToAction />
      <Footer />
    </>
  );
}
