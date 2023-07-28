import React from "react";
import Nav from "../components/Nav";
import HeroTitle from "../components/HeroTitle";
import HeroDet from "../components/HeroDet"

export default function Hero() {
  return (
    <div className="bg-hero bg-center bg-no-repeat bg-cover h-screen flex flex-col justify-between">
        <Nav/>
        <HeroTitle/>
        <HeroDet/>
    </div>
  );
}
