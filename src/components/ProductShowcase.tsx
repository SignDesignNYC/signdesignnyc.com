import type React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProductShowcase({
  productList
}: {
  productList: {
    id: string;
    title: string;
    images: {
      src: string;
      alt: string;
    }[]
  }[];
}): React.ReactNode {
  return (
    <section id="products" className="mt-8 px-4 w-full grid">
      <div className="
        place-self-center grid gap-6 w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-5xl
      ">
        <h1 className="font-bold text-4xl text-zinc-100">Products</h1>
        {/* TODO: Progressive low-quality images for fast loading */}
        {/* TODO: Click image to show HD quality */}
        <Accordion type="single" collapsible className="w-full">
          {productList.map((product, idx) => (
            <AccordionItem value={product.id} key={idx} className="border-b-zinc-700">
              <AccordionTrigger className="text-zinc-100 text-xl">
                <div className="flex w-full justify-between place-items-center mr-2">
                  <span>{product.title}</span>
                  <span className="text-sm font-normal">{product.images.length} images</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-zinc-100">
                <div className="grid grid-cols-3 gap-0.5">
                  {product.images.map((img, idx) => (
                    <Dialog>
                      <DialogTrigger asChild>
                        <img
                          src={img.src}
                          alt={img.alt}
                          key={idx}
                          className="relative object-cover aspect-square hover:cursor-pointer"
                        />
                      </DialogTrigger>
                      <DialogContent className="max-h-screen max-w-6xl bg-zinc-800 border-zinc-700 grid place-items-center overflow-y-auto">
                        <img
                          src={img.src}
                          alt={img.alt}
                          key={idx}
                          className="w-fit h-fit"
                        />
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
