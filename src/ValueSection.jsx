export default function ValueSection({ number, title, description }) {
  return (
    <div className="mx-[1.25rem] mb-8 flex flex-col items-center text-center">
      <span className="font-frauncesSemiBold mb-6 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border-[1px] border-[#584D62] text-[20px]">
        {number}
      </span>
      <h2 className="font-frauncesSemiBold mb-4 text-[1.5rem] leading-[1.8rem]">
        {title}
      </h2>
      <p className="font-manropeRegular text-top text-[1rem] leading-[1.8rem]">
        {description}
      </p>
    </div>
  );
}
