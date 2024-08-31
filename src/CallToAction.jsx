import image from "./assets/images/image-founder.webp";
export default function CallToAction() {
  return (
    <section className="mt-[112px] flex flex-col items-center justify-center overflow-hidden sm:mx-11 sm:items-start xl:mx-[160px] xl:items-center">
      <img
        className="h-[280px] w-[280px] xl:h-[477px] xl:w-[477px] xl:translate-x-[-67.5%] xl:translate-y-[1%]"
        src={image}
        alt="Founder"
      />
      <div className="h-[393px] w-[90%] translate-y-[-12%] bg-[#24053E] text-center text-white sm:w-[504px] sm:translate-x-[35%] sm:translate-y-[-27.5%] sm:text-start xl:h-[411px] xl:w-[730px] xl:translate-x-[27%] xl:translate-y-[-74%]">
        <h2 className="my-[2rem] font-frauncesSemiBold text-[2rem] leading-[2.4rem] sm:mx-[3rem] sm:mb-[3rem] sm:mt-[3.5rem] sm:text-[3rem] xl:mx-[64px] xl:mt-[78px] xl:text-[56px]">
          Be the first to test
        </h2>
        <p className="mb-[2.5rem] px-[2rem] font-manropeRegular text-[1rem] leading-[1.8rem] sm:px-[3rem] xl:px-[64px] xl:text-[18px] xl:leading-[32.4px]">
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>

        <a
          className="h-[56px] bg-[#44FFA1] px-[32px] py-[14px] font-manropeBold text-[#24053E] hover:border-[2px] hover:border-[#44FFA1] hover:bg-transparent hover:text-[#44FFA1] sm:mx-[3rem] sm:text-[18px] sm:leading-[32.4px] xl:ml-[64px] xl:w-[207px]"
          href="#"
        >
          Apply for access
        </a>
        <svg
          className="absolute translate-x-[-200%] sm:translate-x-[122%] sm:translate-y-[-19%] xl:translate-x-[181.5%] xl:translate-y-[-31%]"
          xmlns="http://www.w3.org/2000/svg"
          width="221"
          height="212"
          viewBox="0 0 221 212"
        >
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="#44FFA1"
            transform="rotate(-145 104.244 83.528)"
          >
            <ellipse cx="34.5" cy="68.5" rx="34" ry="68" />
            <ellipse cx="60.5" cy="68.5" rx="34" ry="68" />
            <ellipse cx="86" cy="68.5" opacity=".75" rx="33.5" ry="68" />
            <ellipse cx="112.5" cy="68.5" opacity=".5" rx="34" ry="68" />
            <ellipse cx="139" cy="68.5" opacity=".25" rx="33.5" ry="68" />
          </g>
        </svg>
      </div>
    </section>
  );
}
