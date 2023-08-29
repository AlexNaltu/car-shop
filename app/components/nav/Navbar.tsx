import DropMenu from "@/utils/DropMenu";
import React from "react";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import Container from "../Container";
import TextFields from "@/utils/TextField";
import Hero from "../Hero";
import HoverCardLocation from "@/utils/HoverCard";

function Navbar() {
  return (
    <div className="custom-bg h-[70vh] bg-no-repeat w-full">
      <Container>
        <div className="flex gap-4 justify-between text-blue-600 my-6 items-center">
          <div className="flex gap-14 font-ligth">
            <Link
              href="/"
              className="text-xl md:text-3l font-black"
            >
              CARSHOP
            </Link>

            <div className="hidden sm:inline-flex gap-8 text-base md:text-lg">
              <Link href="/shop/shoppage">Shop</Link>
              <Link href="/studio">Finance</Link>
              <DropMenu />
            </div>
          </div>
          <div className="flex gap-4">
            <HoverCardLocation />
            <AiFillHeart
              size={20}
              className="text-red-600"
            />
            <BsPersonCircle size={20} />
          </div>
        </div>
        <TextFields />
        <Hero />
      </Container>
    </div>
  );
}

export default Navbar;
