import type React from "react";

export default function ProductShowcase(): React.ReactNode {
  return (
    <section id="products" className="mt-8 px-4 w-full grid">
      <div className="
        place-self-center grid gap-6 w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl
      ">
        <h1 className="font-bold text-4xl text-zinc-100">Products</h1>
        <ProductList />
        {/* TODO: Progressive low-quality images for fast loading */}
        {/* TODO: Click image to show HD quality */}
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

function ProductList(): React.ReactNode {
  return (
   <ul className="grid">
      <ProductListItem title="A-Frame & Stand Sign" />
      <ProductListItem title="Aluminum Box & Panel Sign" />
      <ProductListItem title="Backlit Sign" />
      <ProductListItem title="Banner Sign" />
      <ProductListItem title="Bus, Truck, Van & Door Lettering" />
      <ProductListItem title="Cafe Stand & Stand Sign" />
      <ProductListItem title="Cast Metal Letters" />
      <ProductListItem title="Channel Letters" />
      <ProductListItem title="Corrugated Board Sign" />
      <ProductListItem title="Cut PVC 3D Letters" />
      <ProductListItem title="Directory Board Sign" />
      <ProductListItem title="Embossed Letters" />
      <ProductListItem title="Engraving Wood Sign" />
      <ProductListItem title="Fabric Awning" />
      <ProductListItem title="Fabric Flag Sign" />
      <ProductListItem title="Light Box" />
      <ProductListItem title="Neon Sign" />
      <ProductListItem title="Plastic Panel Sign" />
      <ProductListItem title="PVC Board" />
      <ProductListItem title="Retractable Awning" />
      <ProductListItem title="Room Number Sign" />
      <ProductListItem title="Stand-Off Screws Sign" />
      <ProductListItem title="Sticker Sign" />
      <ProductListItem title="Vestibule Panel" />
      <ProductListItem title="Windmaster Sign" />
    </ul>
  );
}

function ProductListItem({
  title,
}: {
  title: string;
}): React.ReactNode {
  return (
    <li>
      <button className="w-full h-full hover:bg-zinc-300/20 p-4 border border-zinc-300/20">
        <span className="font-bold text-zinc-100 text-3xl">{title}</span>
      </button>
    </li>
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
