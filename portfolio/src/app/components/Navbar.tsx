"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "projects" },
    { id: 2, link: "about me" },
    {
      id: 3,
      link: "resume",
      url: "/Pankhuri_Gupta_Resume.pdf",
    },
    { id: 4, link: "hackathons" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center text-black bg-white fixed w-full p-4 shadow-md z-50">
      <div className="relative">
        <Link
          href="/"
          className="text_name"
          style={{
            fontFamily: "Sarabun, sans-serif",
            fontSize: "30px",
            lineHeight: "46px",
            fontWeight: "700",
          }}
        >
          <span style={{ color: "#000000" }}>&lt;</span>
          <span style={{ color: "#F9629F" }}>Pankhuri Gupta</span>
          <span style={{ color: "#000000" }}>/&gt;</span>
        </Link>
      </div>

      <div className="hidden md:flex space-x-6">
        {links.map(({ id, link, url }) => (
          <li
            key={id}
            className="list-none px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 link-underline"
            style={{ transition: "color 0.2s" }} // Ensure smooth transition
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F9629F")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            {link === "resume" ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            ) : (
              <Link href={`/${link.replace(" ", "").toLowerCase()}`}>
                {link}
              </Link>
            )}
          </li>
        ))}
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col md:flex-row justify-center items-center absolute top-16 left-0 w-full bg-gradient-to-b from-black to-gray-800 text-gray-500 md:static md:h-auto md:bg-transparent md:space-x-6">
          {links.map(({ id, link, url }) => (
            <li
              key={id}
              className="px-6 py-4 cursor-pointer capitalize text-2xl md:text-base md:py-0"
            >
              {link === "resume" ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setNav(!nav)}
                >
                  {link}
                </a>
              ) : (
                <Link
                  onClick={() => setNav(!nav)}
                  href={`/${link.replace(" ", "").toLowerCase()}`}
                >
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
