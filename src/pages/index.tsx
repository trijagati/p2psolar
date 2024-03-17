"use client";
import { products } from "@/utils/constants";
import { HeroParallax } from "../components/ui/hero-parallax";
import { HeroLamp } from "@/components/ui/hero-lamp";
import { Navbar } from "@/components/navbar";

export default function HeroParallaxDemo() {
  return <div>
    <Navbar className="top-2"/>
    <HeroLamp/>
    <HeroParallax products={products} />;
    </div>
  
}
