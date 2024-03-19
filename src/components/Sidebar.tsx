import React from "react";import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Bell,
  DollarSign,
  Home,
  Package,
  Settings,
  Sun,
  Users,
} from "lucide-react";

type Props = {};

export default function Sidebar({}: Props) {
    const activeClass = "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-gray-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <Sun className="h-6 w-6" />
            <span className="">SunHub</span>
          </Link>
          <Button
            className="ml-auto h-8 w-8"
            size="icon"
            variant="outline"
          >
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg  px-3 py-2 text-gray-900 bg-gray-100  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="/app/home"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <Package className="h-4 w-4" />
              Listings
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/app/customers"
            >
              <Users className="h-4 w-4" />
              Customers
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <DollarSign className="h-4 w-4" />
              Transactions
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <Button className="rounded-full w-10 h-10" size="icon">
            <img
              alt="Avatar"
              className="rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
          <Button className="rounded-full" size="lg">
            Upgrade to Pro
          </Button>
        </div>
      </div>
    </div>
  );
}
