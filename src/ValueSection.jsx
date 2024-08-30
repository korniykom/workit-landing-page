export default function ValueSection({ number, title, description }) {
  return (
    <div className="] mx-[1.25rem] mb-8 flex flex-col items-center text-center sm:mx-0 sm:flex-row sm:text-start xl:w-[352px] xl:flex-col xl:text-center">
      <span className="font-frauncesSemiBold mb-6 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border-[1px] border-[#584D62] text-[20px] sm:my-9 sm:ml-11 sm:mr-14 xl:mx-0 xl:my-0 xl:mb-14 xl:h-[60px] xl:w-[60px] xl:text-[24px]">
        {number}
      </span>
      <div className="justify-start sm:flex sm:w-[570px] sm:flex-col xl:w-auto">
        <h2 className="font-frauncesSemiBold mb-4 text-[1.5rem] leading-[1.8rem] sm:mb-7 sm:text-[28px] xl:mb-7 xl:text-[2rem] xl:leading-[2.4rem]">
          {title}
        </h2>
        <p className="font-manropeRegular text-top text-[1rem] leading-[1.8rem] xl:text-[18px] xl:leading-[32.4px]">
          {description}
        </p>
      </div>
    </div>
  );
}
