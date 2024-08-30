import Header from "./Header";
import Hero from "./Hero";
//  min-[420px]:bg-[url(src/assets/images/background/tablet-bg.svg)] md:bg-[url(src/assets/images/background/desktop-bg.svg)]
export default function App() {
  return (
    <>
      <div className="h-[1446px] bg-[url(src/assets/images/background/mobile-bg.svg)] bg-cover">
        <Header />
        <Hero />
      </div>
    </>
  );
}
