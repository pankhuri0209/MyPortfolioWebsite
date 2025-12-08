"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { SiCanva, SiFigma } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Pay2FlixPage: React.FC = () => {
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
              style={{ backgroundColor: "#FF6B35" }}
            >
              3rd Place - No Code Solution Track
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Pay2Flix
            </h1>

            <p className="text-xl text-gray-600">
              EasyA x Stacks Harvard Hackathon | November 9-10, 2024
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Pay2Flix is a decentralized streaming platform built on the Stacks blockchain 
              that enables pay-per-view content monetization using Bitcoin. The platform 
              allows content creators to monetize their videos through microtransactions, 
              giving viewers the flexibility to pay only for the content they watch.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.figma.com/proto/w83YkAaURmz9gmcTsnrNuN/PAY2FLIX?node-id=4-109&node-type=canvas&t=mbgVSQ9kw2LLFJu6-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <SiFigma size={20} />
                View Prototype
              </a>
              <a
                href="https://www.canva.com/design/DAGWDWaGTq4/d15LBkT3poUFl-7x5B6QLQ/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                <SiCanva size={20} />
                Pitch Deck
              </a>
              <a
                href="https://x.com/easya_app/status/1856050187623641582"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaXTwitter size={20} />
                View on X
              </a>
              <a
                href="https://www.linkedin.com/posts/pankhurigupta0209_blockchain-netflix-smartcontracts-activity-7262210907152248833-UKrZ"
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
              src="/images/hackathons/pay2flix-team-photo.jpg"
              alt="Pay2Flix Team at EasyA Stacks Harvard Hackathon"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Traditional streaming platforms have significant limitations that affect both viewers and creators:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Subscription Waste</strong> - Users pay monthly fees for content they may not fully utilize
                </li>
                <li>
                  <strong>Creator Monetization</strong> - Content creators face challenges with fair revenue sharing and direct audience engagement
                </li>
                <li>
                  <strong>Centralized Control</strong> - Platforms control pricing, content availability, and revenue distribution
                </li>
                <li>
                  <strong>Payment Friction</strong> - High transaction fees make micropayments impractical
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-orange-800">
                  Pay-Per-View Model
                </h3>
                <p className="text-gray-700">
                  Users only pay for the content they actually watch, eliminating wasteful subscription fees and giving viewers complete control over their spending.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-yellow-800">
                  Bitcoin Microtransactions
                </h3>
                <p className="text-gray-700">
                  Leveraging the Stacks blockchain to enable secure, low-cost Bitcoin payments for streaming content with minimal transaction fees.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  Creator Empowerment
                </h3>
                <p className="text-gray-700">
                  Content creators receive direct payments without intermediaries taking large cuts of their earnings, enabling fair monetization.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">
                  No Code Approach
                </h3>
                <p className="text-gray-700">
                  Built using no-code tools to demonstrate rapid prototyping and accessibility in blockchain development.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">1.</span>
                  <span>
                    <strong>Decentralized Content Hosting</strong> - Content stored and streamed without central authority
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">2.</span>
                  <span>
                    <strong>Bitcoin-based Micropayments</strong> - Seamless payments via Stacks blockchain
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">3.</span>
                  <span>
                    <strong>User-friendly Interface</strong> - Intuitive experience for both viewers and creators
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">4.</span>
                  <span>
                    <strong>Transparent Revenue Sharing</strong> - Clear and fair distribution of earnings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">5.</span>
                  <span>
                    <strong>Smart Contract Access Control</strong> - Automated content access based on payment verification
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Stacks Blockchain",
                "Bitcoin",
                "Smart Contracts",
                "No-Code Tools",
                "Figma",
                "Canva",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-white font-medium"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Hackathon Highlights</h2>
            <div className="flex justify-center">
              <img
                src="/images/hackathons/pay2flix-hackathon-group.jpg"
                alt="EasyA Stacks Harvard Hackathon Group Photo"
                className="w-full max-w-2xl rounded-lg shadow-lg"
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Impact</h2>
            <div
              className="p-6 rounded-lg text-white"
              style={{ backgroundColor: "#FF6B35" }}
            >
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-bold">Fair Monetization</span> - Empowers creators with direct, transparent revenue streams
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">Consumer Choice</span> - Gives viewers control over what they pay for
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">Web3 Adoption</span> - Demonstrates practical blockchain use cases for everyday applications
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

export default Pay2FlixPage;
