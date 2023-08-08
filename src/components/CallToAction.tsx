import type React from "react";

export default function CallToAction(): React.ReactNode {
  return (
    <section className="mt-8 px-4 w-full grid">
      <div className="place-self-center grid gap-6 w-full max-w-sm sm:max-w-lg md:max-w-2xl">
        <h1 className="font-bold text-zinc-100 text-4xl">
          Custom Vinyl Stickers, Awnings, Neon Signs, PVC, and more!
        </h1>
        <a
          href="mailto:signdesignnyc@gmail.com"
          target="_blank"
          className="grid place-items-center rounded-full p-2 bg-yellow-400 hover:cursor-pointer"
        >
          <span className="font-bold text-zinc-800 text-2xl">Contact for Pricing</span>
        </a>
      </div>
    </section>
  );
}
