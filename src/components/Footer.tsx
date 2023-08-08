import { Facebook, Instagram, LucideIcon, Mail } from "lucide-react";
import type React from "react";

export default function Footer(): React.ReactNode {
  return (
    <footer id="contact" className="mt-12 px-4 w-full bg-zinc-900">
      <div className="my-8 max-w-sm m-auto flex flex-col gap-4">
        <a href="/" className="max-w-xs">
          <img src="signdesignnyc-logo-dark.svg" alt="SignDesignNYC Logo Dark" className="w-fit" />
        </a>
        <SocialLinks />
        <Copyright />
      </div>
    </footer>
  );
}

function SocialLinks(): React.ReactNode {
  return (
    <div className="flex -translate-x-2">
      <SocialLink
        href="mailto:signdesignnyc@gmail.com"
        target="_blank"
        title="Email"
        icon={Mail}
      />
      <SocialLink
        href=""
        title="Facebook"
        icon={Facebook}
      />
      <SocialLink
        href=""
        title="Instagram"
        icon={Instagram}
      />
    </div>
  );
}

function SocialLink({
  href = "",
  title = "",
  target = "_self",
  icon,
}: {
  href?: string;
  title?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  icon: LucideIcon
}): React.ReactNode {
  const Icon = icon;  
  
  return (
    <a
      href={href}
      title={title}
      target={target}
      className="group p-2"
    >
      <Icon
        className="w-8 h-8 text-zinc-100 group-hover:text-yellow-300 transition-all duration-150 ease-in-out"
      />
    </a>
  );
}

function Copyright(): React.ReactNode {
  return (
    <span className="mt-20 text-zinc-500 text-sm">
      &copy; 2023 SignDesignNYC, All Rights Reserved
    </span>
  );
}
