"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { MetaMaskProvider } from "@metamask/sdk-react";
import { ConnectWalletButton } from "./ui/metmaskConnect";
import { ThemeButton } from "./ui/ThemeButton";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host, // using the host constant defined above
    },
  };
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div>
          <Link href="/" className="flex items-center">
            <img src="/logo.png" className="h-12 me-3" alt="FlowBite Logo" />
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          <Link href={"/app/home"}>Dashboard </Link>
          <Link href={"/"}>Customers </Link>
          <Link href={"/"}>Pricing </Link>
          <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
            <ConnectWalletButton />
          </MetaMaskProvider>
          <ThemeButton />
        </div>
      </Menu>
    </div>
  );
}
