export default function Navigation(): React.ReactNode {
  return (
    <nav className="sticky top-0 left-0 w-72 bg-zinc-900 py-6">
      <ul className="w-full grid gap-6 place-items-center">
        <NavLink
          href="#awnings"
          className="rounded-l-xl before:shadow-red-500 after:shadow-red-500"
        >
          <span className="text-3xl font-bold text-white underline">Awnings</span>
        </NavLink>
        <NavLink
          href="#neon"
          className="rounded-l-xl"
        >
          <span className="text-3xl font-bold text-white underline">Neon</span>
        </NavLink>
        <NavLink href="#channel-letters">
          <span className="text-3xl font-bold text-white underline">Channel Letters</span>
        </NavLink>
        <NavLink href="#pvc">
          <span className="text-3xl font-bold text-white underline">PVC</span>
        </NavLink>
        <NavLink href="#truck-stickers">
          <span className="text-3xl font-bold text-white underline">Truck Stickers</span>
        </NavLink>
        <NavLink href="#stickers">
          <span className="text-3xl font-bold text-white underline">Stickers</span>
        </NavLink>
      </ul>
    </nav>
  );
}

function NavLink({
  href,
  children,
  className = ""
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_self" className={`w-full text-center ${className}`}>
      <li className="py-3 px-4 grid place-items-center">
        {children}
      </li>
    </a>
  );
}
