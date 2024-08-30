import imageHero from "./assets/images/image-hero.webp";
export default function Hero() {
  return (
    <section className="">
      <div className="mx-5 mb-[6rem] mt-14 flex h-[190px] flex-col items-center text-center">
        <h1 className="font-frauncesSemiBold mb-10 text-[3rem] leading-[3rem] tracking-normal text-white">
          Data <span className="border-b-[3px] border-[#44FFA1]">tailored</span>{" "}
          to your needs.
        </h1>
        <a
          className="flex h-[53px] w-[151px] items-center justify-center bg-[#44FFA1] font-manropeBold"
          href="#"
        >
          Learn more
        </a>
      </div>
      <img src={imageHero} className="m-auto w-80 translate-y-[-20%]"></img>
    </section>
  );
}
