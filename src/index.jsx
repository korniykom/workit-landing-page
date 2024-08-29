import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Hero from "./Hero.jsx";
import "./index.css";
import Header from "./Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="h-[2000px] bg-[url(src/assets/images/background/mobile-bg.svg)] bg-top bg-no-repeat min-[320px]:bg-[url(src/assets/images/background/tablet-bg.svg)] md:bg-[url(src/assets/images/background/desktop-bg.svg)]"></div>
    {/* <Header /> */}
  </StrictMode>,
);
