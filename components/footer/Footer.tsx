import React from "react";
import FooterList from "./FooterList";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div className=" pt-16 pb-8 bg-gradient-to-l from-slate-0 to-slate-200">
      <div className="w-[90vw] mx-auto flex flex-col  md:flex-row justify-between">
        <FooterList>
          <h1 className="font-bold text-base mb-2">Buying Cars</h1>
          <Link href="#">Find a Car</Link>
          <Link href="#">Find a Dealer</Link>
          <Link href="#">Certified Pre-Owned</Link>
          <Link href="#">Car Reviews</Link>
          <Link href="#">Fraud Awareness</Link>
        </FooterList>
        <FooterList>
          <h1 className="font-bold text-base mb-2">Explore Our Brand</h1>
          <Link href="#">CarShop.com</Link>
          <Link href="#">DealerRater</Link>
        </FooterList>
        <FooterList>
          <h1 className="font-bold text-base mb-2">Our Company</h1>
          <Link href="#">About Us</Link>
          <Link href="#">Contact CarShop</Link>
          <Link href="#">Investor</Link>
          <Link href="#">Feedback</Link>
        </FooterList>
        <FooterList>
          <h1 className="font-bold text-base-mb-2">Our Mobile App</h1>
          <Link href="https://play.google.com/store/games?device=windows">Download the App Today</Link>
          <Link href="#">Conect With Us</Link>
          <Link
            href="#"
            className="font-bold text-base my-2"
          >
            Follow Us
          </Link>
          <div className="flex gap-2">
            <Link href="https://www.instagram.com/">
              <RiInstagramFill size={30} />
            </Link>
            <Link href="https://twitter.com/home">
              <BsTwitter size={30} />
            </Link>
            <Link href="https://www.youtube.com/">
              <FaYoutube size={30} />
            </Link>
            <Link href="www.linkedin.com">
              <FaLinkedin size={30} />
            </Link>
            <Link href="https://www.facebook.com/">
              <BiLogoFacebook size={30} />
            </Link>
          </div>
        </FooterList>
      </div>
    </div>
  );
}

export default Footer;
