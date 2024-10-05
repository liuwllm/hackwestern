import Image from "next/image";
import Header from "./header";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

function Hero() {
  const router = useRouter();

  return (
    <div className="relative h-screen flex-col items-center justify-center overflow-x-clip bg-hw-radial-gradient">
      <Header />
      <div className="absolute left-0 top-0 h-full w-full" />
      {/* Images */}
      <div className="absolute left-[39%] top-[59%] z-30 h-10 w-10 sm:left-[37%] sm:top-[55%] sm:h-16 sm:w-16 md:left-[37%] md:top-[50%] md:h-28 md:w-28 xl:left-[39%] xl:top-[50%]">
        <Image src="/images/sun.svg" alt="hack western 11 sun" fill />
      </div>
      <div className="absolute right-[10%] top-[30%] z-20 h-[150%] w-[150%] overflow-clip rounded-hw-gradient-radius bg-hw-highlight-radial-gradient" />
      <div>
        <div className="absolute bottom-0 left-0 z-30 h-[130%] w-[70%] animate-cloud4 outline-red-500 md:w-[60%]  lg:-bottom-72">
          <Image
            src="/images/cloud4.svg"
            alt="hack western cloud"
            className="object-contain object-left-bottom"
            fill
          />
        </div>
        <div className="absolute -bottom-24 right-0 z-30 h-[120%] w-full animate-cloud3">
          <Image
            src="/images/cloud3.svg"
            alt="hack western cloud"
            className="w-full object-contain object-right-bottom"
            fill
          />
        </div>
        <div className="absolute -bottom-32 right-0 z-30 h-full w-[50%] animate-cloud2 delay-75 md:h-full md:w-[30%]">
          <Image
            src="/images/cloud2.svg"
            alt="hack western cloud"
            className="object-contain object-right-bottom"
            fill
          />
        </div>
        <div className="absolute bottom-0 left-0 z-30 h-full  w-[50%] animate-cloud1 md:h-full md:w-[30%]">
          <Image
            src="/images/cloud1.svg"
            alt="hack western cloud"
            className="object-contain object-left-bottom"
            fill
          />
        </div>
        <div className="absolute bottom-[40%] right-[50%] z-30 flex h-[80%] w-[80%] translate-x-1/2 translate-y-1/2 sm:bottom-[5%] sm:right-[15%] sm:h-[60%] sm:w-[60%] sm:translate-x-0 sm:translate-y-0 md:bottom-[10%] md:right-[30%] md:h-[40%] md:w-[40%] md:translate-x-0 md:translate-y-0 lg:bottom-[7%] lg:right-[27%] lg:h-[40%] lg:w-[40%] lg:translate-x-0 lg:translate-y-0">
          <Image
            src="/images/plane.svg"
            alt="hack western plane"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      {/* Grain Filter */}
      <div className="absolute left-0 top-0 h-full w-full">
        <Image
          className="opacity-20"
          src="/images/hwfilter.png"
          alt="Hack Western Main Page"
          fill
        />
      </div>

      {/* Text */}
      <div className="relative z-50 flex h-screen w-screen justify-center">
        <div className="flex flex-col items-center pt-32 text-white 2xl:pt-40 3xl:pt-48">
          <h3 className="pb-4 text-xl font-medium">
            November 29th - December 1st, 2024
          </h3>
          <h1 className="bg-hw-hero-text-gradient bg-clip-text font-MagicRetro text-5xl leading-normal text-transparent mix-blend-screen md:text-5xl lg:text-8xl 2xl:text-8xl">
            hack western 11
          </h1>
          <h2 className="-mt-3 font-sans text-xl font-light italic md:-mt-1 md:text-2xl lg:text-3xl 2xl:text-4xl">
            where ideas take flight
          </h2>
          <Button
            className="mt-12 rounded-md bg-[#5E28B8] px-12 py-6 text-xl drop-shadow-[0_2px_24px_rgba(255,212,251,0.25)] transition-all hover:bg-[#5C2FAA] hover:drop-shadow-[0_2px_12px_rgba(255,212,251,0.5)]"
            onClick={() => router.push("/register")}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;