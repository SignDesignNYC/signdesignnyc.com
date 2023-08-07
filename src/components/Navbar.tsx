import type React from "react";

export default function Navbar(): React.ReactNode {
  return (
    <nav className="sticky top-0 bg-zinc-800 p-4 w-full grid gap-4 place-items-center">
      <a href="/" className="max-w-sm">
        <img
          src="signdesignnyc-logo-dark.svg"
          alt="SignDesignNYC Logo Dark"
          className="w-fit"
        />
      </a>
      <ul className="flex gap-4 flex-wrap justify-center">
        <NavLink href="#awning">Awning</NavLink>
        <NavLink href="#neon">Neon</NavLink>
        <NavLink href="#channel-letters">Channel Letters</NavLink>
        <NavLink href="#pvc">PVC</NavLink>
        <NavLink href="#stickers">Vinyl Stickers</NavLink>
      </ul>
    </nav>
  );
}

function NavLink({
  href = "",
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}): React.ReactNode {
  return (
    <a href={href}>
      <NavListItem>
        {children}
      </NavListItem>
    </a>
  );
}

function NavListItem({
  children,
}: {
  children?: React.ReactNode;
}): React.ReactNode {
  return (
    <li>
      <NavLinkText>
        {children}
      </NavLinkText>
    </li>
  );
}

function NavLinkText({
  children,
}: {
  children?: React.ReactNode,
}) {
  return (
    <span className="
      text-xl font-bold text-zinc-200 hover:text-yellow-300 transition-all duration-150 ease-in-out
    ">
      {children}
    </span>
  );
}
