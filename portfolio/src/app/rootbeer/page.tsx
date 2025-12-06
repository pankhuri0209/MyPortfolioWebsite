"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { SiCanva } from "react-icons/si";

const RootBeerPage: React.FC = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32 pt-32">
        <div className="mb-6">
          <Link
            href="/hackathons"
            className="text-pink-600 hover:text-pink-800 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Hackathons
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div
              className="inline-block px-4 py-2 rounded-full text-white font-semibold text-sm"
              style={{ backgroundColor: "#E6007A" }}
            >
              Finalist Team
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Web3 Root Beer Game
            </h1>

            <p className="text-xl text-gray-600">
              EasyA x Polkadot Hackathon at Harvard University
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              A Web3 implementation of the classic supply chain management game
              (originally ideated at MIT in 1960 and developed by Harvard
              Publishing) that opens up new avenues in Web3 gaming for Real
              World Asset (RWA) tokenization at scale for supply chain
              financing.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/pankhuri0209/Web3-Root-Beer-DOT-Game"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaGithub size={20} />
                GitHub Repository
              </a>
              <a
                href="https://youtu.be/LgSRfNK9fFg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <FaYoutube size={20} />
                Demo Video
              </a>
              <a
                href="https://www.canva.com/design/DAGMN45zbkw/ccjFXDCS5UbSkpLWk81Wqw/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <SiCanva size={20} />
                Presentation
              </a>
              <a
                href="https://www.linkedin.com/posts/pankhurigupta0209_web3gaming-supplychainexcellence-nft-activity-7242741410850902016-XxO-"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaLinkedin size={20} />
                LinkedIn Post
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/hackathons/rootbeer-team.jpeg"
              alt="Root Beer Game Team at Polkadot Hackathon"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Global SMEs face a <strong>$2-3 trillion gap</strong> in supply
                chain financing, particularly in developing countries. The main
                challenges include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Lack of high-scale, low-barrier validation for business
                  genuineness and creditworthiness
                </li>
                <li>
                  The <strong>Bullwhip Effect</strong> - small demand variations
                  amplify into larger supply fluctuations across the supply
                  chain
                </li>
                <li>
                  Traditional Web2 systems only work with adjacent nodes,
                  distorting demand visibility
                </li>
                <li>
                  Unpredictability increases validation risk, forcing SMEs to
                  resort to predatory lending
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Web3 Root Beer Game
                </h3>
                <p className="text-gray-700">
                  A blockchain-based implementation that provides full supply
                  chain transparency through Polkadot&apos;s trust-minimized
                  peer-to-peer architecture, eliminating the blindness to true
                  demand that plagues centralized systems.
                </p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-pink-800">
                  NFT Badges for Validation
                </h3>
                <p className="text-gray-700">
                  Dynamic NFTs serve as proof of membership in high-performance
                  supply chains, providing cash flow validations that
                  institutional DeFi needs for financing decisions.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">
                  Team-Based Scoring
                </h3>
                <p className="text-gray-700">
                  The game emphasizes team scores over individual performance,
                  training participants to optimize for the entire supply chain
                  rather than local optimization.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  RWA Tokenization
                </h3>
                <p className="text-gray-700">
                  Extends NFTs beyond crypto-native collectibles to Real World
                  Assets - including nativity badges, biodiversity badges, and
                  heritage occupation NFTs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Polkadot",
                "Unique Network",
                "React.js",
                "Node.js",
                "SUBwallet",
                "OPAL Testnet",
                "Dynamic NFTs",
                "Nested NFTs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-white font-medium"
                  style={{ backgroundColor: "#E6007A" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">
              Why Unique Network on Polkadot?
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold">1.</span>
                  <span>
                    <strong>High-volume, Low-cost NFTs</strong> - Perfect for
                    brand and compliance NFTs at scale
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold">2.</span>
                  <span>
                    <strong>Nested NFTs</strong> - Model team-level structures
                    for vertically integrated supply chains
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold">3.</span>
                  <span>
                    <strong>Dynamic NFTs</strong> - Keep scores at individual
                    and team levels that update in real-time
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold">4.</span>
                  <span>
                    <strong>Customizable NFTs</strong> - Show operational
                    excellence through proof of participation badges
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Impact</h2>
            <div
              className="p-6 rounded-lg text-white"
              style={{ backgroundColor: "#E6007A" }}
            >
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-bold">Play to Manage</span> - Train on
                  advanced Web3 supply chain visibility
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">Play to Finance</span> - Earn
                  operational excellence badges for RWA instruments
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">Democratize Access</span> -
                  Broaden funding access for global SMEs through validated
                  supply chain credentials
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <br />
      <br />
      <Footer />
    </div>
  );
};

export default RootBeerPage;
