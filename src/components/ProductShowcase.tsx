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

export default function ProductShowcase(): React.ReactNode {
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
              <AccordionTrigger className="text-zinc-100 text-xl">{product.title}</AccordionTrigger>
              <AccordionContent className="text-zinc-100">
                <span>({product.images.length}) Images of {product.title}</span>
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
                      <DialogContent className="max-w-6xl bg-zinc-800 border-zinc-700">
                        <img
                          src={img.src}
                          alt={img.alt}
                          key={idx}
                          className="w-full h-full"
                        />
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {products.map((product, idx) => (
          <ProductSection id={product.id} key={idx}>
            <h1 className="font-bold text-zinc-100 text-3xl">
              {product.title}
            </h1>
            <div className="grid gap-4 md:grid-cols-2 md:grid-flow-dense">
              {product.images.map((image, idx) => (
                <ProductImage
                  src={image.src}
                  alt={image.alt}
                  key={idx}
                />
              ))}
            </div>
          </ProductSection>
        ))}
      </div>
    </section>
  );
}

function ProductSection({
  id,
  children,
}: {
  id: string;
  children?: React.ReactNode;
}): React.ReactNode {
  return (
    <div id={id} className="grid gap-4 scroll-mt-4">
      {children}
    </div>
  );
}

function ProductImage({
  src,
  alt = "",
}: {
  src: string;
  alt?: string;
}): React.ReactNode {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-lg md:object-cover md:aspect-square"
    />
  );
}

const productList = [
  {
    id: "a-frame-stand-sign",
    title: "A-Frame & Stand Sign",
    images: [
      {
        src: "a-frame-stand/2011-stand-juicebar.jpg",
        alt: ""
      },
      {
        src: "a-frame-stand/2011-stand-juicebar2.jpg",
        alt: ""
      },
      {
        src: "a-frame-stand/2011-stand-psychic-readings.jpg",
        alt: ""
      },
      {
        src: "a-frame-stand/2013-a-frame-monocle-order.jpg",
        alt: ""
      },
      {
        src: "a-frame-stand/2014-a-frame-hair-service.jpg",
        alt: ""
      },
      {
        src: "a-frame-stand/2014-a-frame-kiwa-salon.jpg",
        alt: ""
      },
      {
        src: "a-frame-stand/2015-a-frame-bagels.jpg",
        alt: ""
      },
      {
        src: "a-frame-stand/2016-a-frame-sports-center.jpg",
        alt: ""
      },
      {
        src: "a-frame-stand/2018-stand-yonekichi.jpg",
        alt: ""
      },
      {
        src: "a-frame-stand/2019-a-frame-parking.jpg",
        alt: ""
      },
      {
        src: "a-frame-stand/2020-a-frame-nomaste-psychic.jpg",
        alt: ""
      },
      {
        src: "a-frame-stand/2020-stand-restaurant.jpg",
        alt: ""
      },
    ],
  },
  {
    id: "aluminum-box-panel-sign",
    title: "Aluminum Box & Panel Sign",
    images: [],
  },
  {
    id: "backlit-sign",
    title: "Backlit Sign",
    images: [],
  },
  {
    id: "banner-sign",
    title: "Banner Sign",
    images: [],
  },
  {
    id: "bus-truck-van-door-lettering",
    title: "Bus, Truck, Van & Door Lettering",
    images: [],
  },
  {
    id: "cafe-stand-sign",
    title: "Cafe Stand & Stand Sign",
    images: [],
  },
  {
    id: "cast-metal-letters",
    title: "Cast Metal Letters",
    images: [],
  },
  {
    id: "channel-letters",
    title: "Channel Letters",
    images: [],
  },
  {
    id: "corrugated-board-sign",
    title: "Corrugated Board Sign",
    images: [],
  },
  {
    id: "cut-pvc-3d-letters",
    title: "Cut PVC 3D Letters",
    images: [],
  },
  {
    id: "directory-board-sign",
    title: "Directory Board Sign",
    images: [],
  },
  {
    id: "embossed-letters",
    title: "Embossed Letters",
    images: [],
  },
  {
    id: "engraving-wood-sign",
    title: "Engraving Wood Sign",
    images: [],
  },
  {
    id: "fabric-awning",
    title: "Fabric Awning",
    images: [
      {
        src: "awnings/2011-fabric-awning-cornercafe.jpg",
        alt: "2011 Fabric Awning - Corner Cafe & Grill",
      },
      {
        src: "awnings/2012-fabric-awning-hrblock.jpg",
        alt: "2012 Fabric Awning - H&R Block",
      },
      {
        src: "awnings/2012-fabric-awning-zerza.jpg",
        alt: "2012 Fabric Awning - Zerza Mediterranean",
      },
    ],
  },
  {
    id: "fabric-flag-sign",
    title: "Fabric Flag Sign",
    images: [],
  },
  {
    id: "light-box",
    title: "Light Box",
    images: [],
  },
  {
    id: "neon-sign",
    title: "Neon Sign",
    images: [
      {
        src: "neons/2013-neon-sign-bar.jpg",
        alt: "2013 Neon Sign - Dive Bar",
      },
      {
        src: "neons/2014-neon-sign-sprint.jpg",
        alt: "2014 Neon Sign - Sprint Sound Sessions",
      },
      {
        src: "neons/2016-neon-sign-burger.jpg",
        alt: "2016 Neon Sign - Burger",
      },
      {
        src: "neons/2017-neon-sign-booth.jpg",
        alt: "2017 Neon Sign - Booth",
      },
    ],
  },
  {
    id: "plastic-panel-sign",
    title: "Plastic Panel Sign",
    images: [],
  },
  {
    id: "pvc-board",
    title: "PVC Board",
    images: [],
  },
  {
    id: "retractable-awning",
    title: "Retractable Awning",
    images: [],
  },
  {
    id: "room-number-sign",
    title: "Room Number Sign",
    images: [],
  },
  {
    id: "stand-off-screws-sign",
    title: "Stand-Off Screws Sign",
    images: [],
  },
  {
    id: "sticker-sign",
    title: "Sticker Sign",
    images: [],
  },
  {
    id: "vestibule-panel",
    title: "Vestibule Panel",
    images: [],
  },
  {
    id: "windmaster-sign",
    title: "Windmaster Sign",
    images: [],
  },
];

const products = [
  {
    id: "awning",
    title: "Awning",
    images: [
      {
        src: "awnings/2011-fabric-awning-cornercafe.jpg",
        alt: "2011 Fabric Awning - Corner Cafe & Grill",
      },
      {
        src: "awnings/2012-fabric-awning-hrblock.jpg",
        alt: "2012 Fabric Awning - H&R Block",
      },
      {
        src: "awnings/2012-fabric-awning-zerza.jpg",
        alt: "2012 Fabric Awning - Zerza Mediterranean",
      },
    ],
  },
  {
    id: "neon",
    title: "Neon",
    images: [
      {
        src: "neons/2013-neon-sign-bar.jpg",
        alt: "2013 Neon Sign - Dive Bar",
      },
      {
        src: "neons/2014-neon-sign-sprint.jpg",
        alt: "2014 Neon Sign - Sprint Sound Sessions",
      },
      {
        src: "neons/2016-neon-sign-burger.jpg",
        alt: "2016 Neon Sign - Burger",
      },
      {
        src: "neons/2017-neon-sign-booth.jpg",
        alt: "2017 Neon Sign - Booth",
      },
    ],
  },
  {
    id: "channel-letters",
    title: "Channel Letters",
    images: [
      {
        src: "channel-letters/2011-channel-letters-ktv.jpg",
        alt: "2011 Channel Letters - KTV",
      },
      {
        src: "channel-letters/2012-channel-letters-hanami-sushi.jpg",
        alt: "2012 Channel Letters - Hanami Sushi",
      },
      {
        src: "channel-letters/2012-channel-letters-tea.jpg",
        alt: "2012 Channel Letters - Tea",
      },
      {
        src: "channel-letters/2016-channel-letters-lobster-pub.jpg",
        alt: "2016 Channel Letters - Lobster Pub",
      },
    ],
  },
  {
    id: "pvc",
    title: "PVC",
    images: [
      {
        src: "pvc/2005-2010-pvc-food-menu.jpg",
        alt: "2005-2010 PVC - Food Menu",
      },
      {
        src: "pvc/2013-double-sided-pvc-sign.jpg",
        alt: "2013 Double Sided PVC - Togama",
      },
      {
        src: "pvc/2013-pvc-board-sign-food-passion.jpg",
        alt: "2013 PVC Board Sign - Food Passion",
      },
      {
        src: "pvc/2022-pvc-board-sign-carriage-house.jpg",
        alt: "2022 PVC Board Sign - Carriage House",
      },
    ],
  },
  {
    id: "stickers",
    title: "Vinyl Stickers",
    images: [
      {
        src: "stickers/2013-window-sticker-k47.jpg",
        alt: "2013 Window Sticker - K47",
      },
      {
        src: "stickers/2019-wall-sticker-about.jpg",
        alt: "2019 Wall Sticker - About Us",
      },
      {
        src: "stickers/2022-frosted-glass.jpg",
        alt: "2022 Frosted Glass Door Sticker",
      },
      {
        src: "stickers/2022-wall-sticker-winter-surf.jpg",
        alt: "2022 Wall Sticker - Winter Surf",
      },
    ],
  },
];
