import { Button } from "@/components/ui/button";
import {
  CardContent,
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { SunIcon } from "lucide-react";
import Layout from "../layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <SunIcon className="h-8 w-8" />
              <div className="grid gap-1">
                <h1 className="font-semibold text-2xl">SunHub</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Peer-to-peer solar energy marketplace
                </p>
              </div>
            </div>
            <Button className="ml-auto" size="sm">
              Connect Wallet
            </Button>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <img
                  alt="Avatar"
                  className="rounded-full aspect-square object-cover"
                  height="80"
                  src="/placeholder.svg"
                  width="80"
                />
                <div className="grid gap-1">
                  <h2 className="font-semibold text-xl">Solar Energy Seller</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Trusted seller with 100% positive feedback
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <img
                  alt="Avatar"
                  className="rounded-full aspect-square object-cover"
                  height="80"
                  src="/placeholder.svg"
                  width="80"
                />
                <div className="grid gap-1">
                  <h2 className="font-semibold text-xl">Solar Energy Buyer</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    New to the platform and excited to start using solar energy
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="border-t pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>My Wallet</CardTitle>
                <CardDescription>
                  View your solar energy balance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <SunIcon className="h-8 w-8" />
                  <div className="grid gap-1">
                    <h2 className="font-semibold">My Solar Energy</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      You currently have 5000 kWh of solar energy in your wallet
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>My Transactions</CardTitle>
                <CardDescription>
                  View your solar energy transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <SunIcon className="h-8 w-8" />
                    <div className="grid gap-1">
                      <h2 className="font-semibold">500 kWh</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Purchased from Solar Energy Seller
                      </p>
                    </div>
                    <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                      2 hours ago
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <SunIcon className="h-8 w-8" />
                    <div className="grid gap-1">
                      <h2 className="font-semibold">1000 kWh</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Sold to Solar Energy Buyer
                      </p>
                    </div>
                    <div className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                      1 day ago
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
