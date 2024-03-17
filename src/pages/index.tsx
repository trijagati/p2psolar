"use client";
import { Gemini } from "@/components/gemini";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/ui/Footer";
import { HeroLamp } from "@/components/ui/hero-lamp";
import React from "react";

export default function HeroParallaxDemo() {
  return <div>
    <Navbar className="top-2"/>
    <HeroLamp/>
    <Gemini/>
    <Footer/>
    </div>
  
}