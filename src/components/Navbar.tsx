import type React from "react";

export default function Navbar(): React.ReactNode {
  return (
    <nav className="bg-zinc-800 p-4 w-full">
      <div className="grid gap-4 place-items-center m-auto lg:max-w-6xl">
        <a href="/" className="max-w-sm sm:max-w-md">
          <img
            src="signdesignnyc-logo-dark.svg"
            alt="SignDesignNYC Logo Dark"
            className="w-fit"
          />
        </a>
        {/* TODO: Turn products into dropdown */}
        <ul className="grid grid-cols-2 gap-4 justify-center sm:flex sm:flex-wrap lg:grow lg:justify-end">
          <NavLink href="#products">Products</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </ul>
      </div>
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
    <a href={href} className="text-center">
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
