import CallToAction from "./CallToAction";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Value from "./Value";

export default function App() {
  return (
    <div className="sm:h-[2203px] xl:h-[2558px]">
      <div className="h-[1446px] bg-[url(./assets/images/background/mobile-bg.svg)] bg-cover bg-center min-[420px]:bg-[url(./assets/images/background/tablet-bg.svg)] sm:h-[1268px] md:bg-[url(./assets/images/background/desktop-bg.svg)] xl:h-[1538px]">
        <Header />
        <Hero />
        <Value />
      </div>
      <CallToAction />

      <Footer />
    </div>
  );
}
