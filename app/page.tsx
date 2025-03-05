"use client";
import "./globals.css";
import Image from "next/image";
import Middle from "./middle"; 
import About from "./about"; 
import Service from "./service"; 
import Creative from "./creative"; 
import Project from "./project"; 
import Footer from "./footer"

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-orange-500">
              INTERIOR DESIGN
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-6">
              {["Home", "About", "Services", "Gallery", "Blog", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-900 hover:text-orange-500 transition duration-300"
                  >
                    {link}
                  </a>
                )
              )}
            </div>

            {/* Buttons */}
            <div className="hidden md:flex space-x-4">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">
                Create an account
              </button>
              <button className="text-orange-500 font-semibold">Sign in</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-orange-500 focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden flex flex-col space-y-2 py-4">
              {["Home", "About", "Services", "Gallery", "Blog", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-gray-900 hover:text-orange-500 px-4 py-2"
                  >
                    {link}
                  </a>
                )
              )}
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold mx-4">
                Create an account
              </button>
              <button className="text-orange-500 font-semibold mx-4">
                Sign in
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-[500px] mt-16 md:mt-20">
        {/* Background Image */}
        <Image
          src="/photos/main1.jpg" // ✅ Correct path
          alt="Interior Design"
          layout="fill"
          objectFit="cover"
          priority
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="bg-orange-500 text-white text-3xl md:text-4xl font-bold px-6 py-3 rounded-lg shadow-lg">
            Decoration Ideas
          </div>
          <p className="text-orange-500 font-semibold mt-2 text-sm md:text-lg">
            IDEAS & INSPIRATIONS
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="text-center mt-10 px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
          All the more reasons to get your dream home interiors now
        </h2>
      </div>
    
    </div>
    <Middle/>
    <About/>
    <Service/>
    <Creative/>
    <Project/>
    <Footer/>
    </>
  );
}
