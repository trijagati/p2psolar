import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Layout from "../layout";
import { ArrowLeft } from "lucide-react";

export default function CustomerPage() {
  return (
    <Layout>
      <div className="grid gap-4 md:gap-8">
        <div className="flex items-center gap-4">
          <Button size="icon" variant="outline">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="font-semibold text-lg md:text-2xl">
            Nearby Sellers
            <span className="font-normal text-gray-500 dark:text-gray-400">
              {`
                                 - Showing 5 of 20'}
                              `}
            </span>
          </h1>
        </div>
        <div className="grid gap-4 md:gap-8">
          <Card>
            <CardContent className="flex items-center gap-4">
              <img
                alt="Avatar"
                className="rounded-full"
                height="64"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <div className="grid gap-1 text-sm md:grid-cols-2 md:text-base">
                <div className="font-semibold">Sophia Anderson</div>
                <div className="text-gray-500 dark:text-gray-400">
                  San Francisco, CA
                </div>
                <div>
                  Solar energy enthusiast and seller of high-efficiency solar
                  panels. Contact me for more information!
                </div>
              </div>
              <Link
                className="ml-auto flex shrink-0 h-8 items-center justify-center w-8 rounded-full bg-gray-100  hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                Contact
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4">
              <img
                alt="Avatar"
                className="rounded-full"
                height="64"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <div className="grid gap-1 text-sm md:grid-cols-2 md:text-base">
                <div className="font-semibold">Ethan Taylor</div>
                <div className="text-gray-500 dark:text-gray-400">
                  New York, NY
                </div>
                <div>
                  Offering affordable solar energy solutions for homes and
                  businesses. Let's make the world greener together!
                </div>
              </div>
              <Link
                className="ml-auto flex shrink-0 h-8 items-center justify-center w-8 rounded-full bg-gray-100  hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                Contact
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4">
              <img
                alt="Avatar"
                className="rounded-full"
                height="64"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <div className="grid gap-1 text-sm md:grid-cols-2 md:text-base">
                <div className="font-semibold">Luna Patel</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Austin, TX
                </div>
                <div>
                  Specializing in community solar projects. Bringing affordable
                  and sustainable energy to your neighborhood.
                </div>
              </div>
              <Link
                className="ml-auto flex shrink-0 h-8 items-center justify-center w-8 rounded-full bg-gray-100  hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                Contact
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4">
              <img
                alt="Avatar"
                className="rounded-full"
                height="64"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <div className="grid gap-1 text-sm md:grid-cols-2 md:text-base">
                <div className="font-semibold">Noah Garcia</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Los Angeles, CA
                </div>
                <div>
                  Solar energy consultant with a passion for sustainable living.
                  Let's talk about your solar journey!
                </div>
              </div>
              <Link
                className="ml-auto flex shrink-0 h-8 items-center justify-center w-8 rounded-full bg-gray-100  hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                Contact
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4">
              <img
                alt="Avatar"
                className="rounded-full"
                height="64"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width="64"
              />
              <div className="grid gap-1 text-sm md:grid-cols-2 md:text-base">
                <div className="font-semibold">Zoe Wright</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Miami, FL
                </div>
                <div>
                  Offering solar energy solutions for homes and businesses.
                  Let's make the switch to clean energy!
                </div>
              </div>
              <Link
                className="ml-auto flex shrink-0 h-8 items-center justify-center w-8 rounded-full bg-gray-100  hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                href="#"
              >
                Contact
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
