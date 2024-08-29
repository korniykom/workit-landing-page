import imageHero from "./assets/images/image-hero.webp";
export default function Hero() {
  return (
    <>
      <div className="h-[320px] w-full translate-y-[-100%] bg-red-500">
        <img src={imageHero} className="m-auto w-80"></img>
      </div>
      <div className="h-[100px] bg-blue-500"></div>
    </>
  );
}
