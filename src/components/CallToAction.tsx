import type React from "react";

export default function CallToAction(): React.ReactNode {
  return (
    <section className="mt-8 px-4 w-full grid sm:mt-12">
      <div className="place-self-center grid gap-8 w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-5xl lg:grid-cols-2">
        <div className="flex flex-col gap-8 sm:gap-12">
          <h1 className="font-bold text-zinc-100 text-4xl md:text-5xl lg:text-6xl">
            Custom Vinyl Stickers, Awnings, Neon Signs, PVC, and more!
          </h1>
          <a
            href="mailto:signdesignnyc@gmail.com"
            target="_blank"
            className="grid place-items-center rounded-full p-2 bg-yellow-400 hover:cursor-pointer lg:w-96"
          >
            <span className="font-bold text-zinc-800 text-2xl">Contact for Pricing</span>
          </a>
        </div>
        <div className="hidden lg:grid lg:place-items-center">
          <img
            src="neons/2016-neon-sign-burger.jpg"
            className="rounded-lg h-80"
          />
        </div>
      </div>
    </section>
  );
}
