import image from "/home/max/workit-landing-page/src/assets/images/image-founder.webp";
export default function CallToAction() {
  return (
    <section className="mt-[112px] flex flex-col items-center">
      <img className="h-[280px] w-[280px]" src={image} alt="Founder" />
      <div className="h-[393px] w-[90%] translate-y-[-12%] bg-[#24053E] text-center text-white">
        <h2 className="font-frauncesSemiBold my-[2rem] text-[2rem] leading-[2.4rem]">
          Be the first to test
        </h2>
        <p className="font-manropeRegular mb-[3rem] px-[2rem] text-[1rem] leading-[1.8rem]">
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <a
          className="h-[56px] bg-[#44FFA1] px-[32px] py-[12px] font-manropeBold text-[#24053E]"
          href="#"
        >
          Apply for access
        </a>
      </div>
    </section>
  );
}
