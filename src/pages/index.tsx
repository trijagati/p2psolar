"use client";
import { Gemini } from "@/components/gemini";
import { Navbar } from "@/components/navbar";
import { HeroLamp } from "@/components/ui/hero-lamp";
import React from "react";

export default function HeroParallaxDemo() {
  return <div>
    <Navbar className="top-2"/>
    <HeroLamp/>
    <Gemini/>
    </div>
  
}