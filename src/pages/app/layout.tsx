import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
    <Sidebar />

    <div className="flex flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        {children}
      </main>
    </div>
  </div>
);

export default Layout;
