"use client";
import { cn } from "@/utils/cn";
import { MetaMaskProvider } from "@metamask/sdk-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeButton } from "./ui/ThemeButton";
import { Button } from "./ui/button";
import { ConnectWalletButton } from "./ui/metmaskConnect";
import { Menu } from "./ui/navbar-menu";

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
  const handleClick = async () => {
    try {
      const response = await fetch(
        "/api/users?name=test&email=test@gmail.com",
        {
          // method: "GET",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          // body: JSON.stringify({ name: "user1", email: "user1@gmail.com" }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      alert("User created successfully!");
      console.log("user: ", response);
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user");
    }
  };
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-3xl mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div>
          <Link href="/" className="flex items-center">
            <img src="/logo.png" className="w-24 me-3" alt="FlowBite Logo" />
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          <Link href={"/app/home"}>Dashboard </Link>
          <Link href={"/"}>Customers </Link>
          <Button onClick={handleClick}>Post a User </Button>
          <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
            <ConnectWalletButton />
          </MetaMaskProvider>
          <ThemeButton />
        </div>
      </Menu>
    </div>
  );
}
