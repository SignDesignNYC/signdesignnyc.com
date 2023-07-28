export default function Navigation(): React.ReactNode {
  return (
    <nav className="w-72 bg-zinc-900 p-4">
      <ul className="w-full grid gap-6 place-items-center">
        <NavLink href="/awnings">
          <span className="text-3xl font-bold text-white underline">Awnings</span>
        </NavLink>
        <NavLink href="/neon">
          <span className="text-3xl font-bold text-white underline">Neon</span>
        </NavLink>
        <NavLink href="/channel-letters">
          <span className="text-3xl font-bold text-white underline">Channel Letters</span>
        </NavLink>
        <NavLink href="/pvc">
          <span className="text-3xl font-bold text-white underline">PVC</span>
        </NavLink>
        <NavLink href="/truck-stickers">
          <span className="text-3xl font-bold text-white underline">Truck Stickers</span>
        </NavLink>
        <NavLink href="/stickers">
          <span className="text-3xl font-bold text-white underline">Stickers</span>
        </NavLink>
      </ul>
    </nav>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_self">
      <li className="py-3 px-4">
        {children}
      </li>
    </a>
  );
}
