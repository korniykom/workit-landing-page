import imageHero from "./assets/images/image-hero.webp";
export default function Hero() {
  return (
    <section className="overflow-hidden xl:h-[929px]">
      <div className="mx-5 mb-[6rem] mt-14 flex flex-col items-center text-center sm:mx-11 sm:mb-[6rem]">
        <div className="relative flex flex-row">
          <svg
            className="absolute translate-x-[200%] sm:left-0 sm:translate-x-[-80%] sm:translate-y-[-20%] xl:translate-x-[-42%] xl:translate-y-[-2%]"
            xmlns="http://www.w3.org/2000/svg"
            width="341"
            height="317"
            viewBox="0 0 341 317"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="#44FFA1"
              transform="rotate(-152 159.204 128.626)"
            >
              <ellipse cx="54" cy="107.125" rx="53.5" ry="106.5" />
              <ellipse cx="94.706" cy="107" rx="53.5" ry="106.5" />
              <ellipse
                cx="134.529"
                cy="107.344"
                opacity=".75"
                rx="52.5"
                ry="106.5"
              />
              <ellipse
                cx="175.705"
                cy="108.102"
                opacity=".5"
                rx="53.5"
                ry="106.5"
              />
              <ellipse
                cx="217.294"
                cy="107.508"
                opacity=".25"
                rx="52.5"
                ry="106.5"
              />
            </g>
          </svg>
          <h1 className="font-frauncesSemiBold mb-10 text-[3rem] leading-[3rem] tracking-normal text-white sm:mx-[100px] sm:text-6xl xl:mx-[400px] xl:text-[80px]">
            Data{" "}
            <span className="border-b-[3px] border-[#44FFA1]">tailored</span> to
            your needs.
          </h1>
          <svg
            className="absolute translate-x-[-200%] sm:right-0 sm:translate-x-[80%] sm:translate-y-[80%] xl:translate-x-[50%] xl:translate-y-[110%]"
            xmlns="http://www.w3.org/2000/svg"
            width="174"
            height="181"
            viewBox="0 0 174 181"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="#44FFA1"
              transform="rotate(-56 110.742 58.398)"
            >
              <ellipse cx="28" cy="56.621" rx="27.5" ry="55.5" />
              <ellipse cx="49.633" cy="56.504" rx="27.5" ry="55.5" />
              <ellipse
                cx="69.878"
                cy="56.117"
                opacity=".75"
                rx="27.5"
                ry="55.5"
              />
              <ellipse cx="91.511" cy="56" opacity=".5" rx="27.5" ry="55.5" />
              <ellipse
                cx="113.703"
                cy="56.712"
                opacity=".25"
                rx="27.5"
                ry="55.5"
              />
            </g>
          </svg>
        </div>
        <a
          className="lx:w-[162px] flex h-[53px] w-[151px] items-center justify-center border-[2px] border-[#44FFA1] bg-[#44FFA1] font-manropeBold text-[1rem] hover:bg-transparent hover:text-[#44FFA1] sm:text-[1.125rem] xl:h-[56px]"
          href="#"
        >
          Learn more
        </a>
      </div>
      <img
        src={imageHero}
        className="m-auto w-80 translate-y-[-20%] sm:w-[520px] xl:w-[767px] xl:pt-24"
      ></img>
    </section>
  );
}
