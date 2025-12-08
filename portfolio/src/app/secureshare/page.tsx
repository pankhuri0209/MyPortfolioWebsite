"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

const SecureSharePage: React.FC = () => {
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
              style={{ backgroundColor: "#F9629F" }}
            >
              Multiple 1st Place Prizes
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Secure Social Share
            </h1>

            <p className="text-xl text-gray-600">
              ETHBoston 2024 Hackathon | April 17, 2024
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Secure Social Share is an E2E encrypted data sharing system with strict, 
              smart contract-based access control, allowing users to securely share sensitive 
              information with their social circle in a decentralized way. Winner of multiple 
              1st place prizes at ETHBoston 2024.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/pankhuri0209/ETHBoston2k24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaGithub size={20} />
                GitHub Repository
              </a>
              <a
                href="https://devpost.com/software/secure-social-share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                <SiDevpost size={20} />
                Devpost
              </a>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7194818420310265856/"
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
              src="/images/securesocialshare/lock.jpg"
              alt="Secure Social Share"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Sharing sensitive personal information in today&apos;s digital world presents significant challenges:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Data Vulnerability</strong> - Centralized platforms are prone to data breaches and unauthorized access
                </li>
                <li>
                  <strong>Lack of Control</strong> - Users have limited control over who accesses their shared data and when
                </li>
                <li>
                  <strong>Trust Issues</strong> - No verifiable way to ensure data is only accessed by intended recipients
                </li>
                <li>
                  <strong>Privacy Concerns</strong> - Traditional sharing methods often expose metadata and access patterns
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-pink-800">
                  Web2-like Experience
                </h3>
                <p className="text-gray-700">
                  A familiar user interface to hold multiple inter-related types of digital 
                  assets to be shared with participants of the societal network.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Role-Based Badges
                </h3>
                <p className="text-gray-700">
                  Participants in the societal network are designated by configurable badges 
                  (social worker, primary doctor, EMT, public records agent, researcher, caregiver).
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">
                  Decentralized Encryption
                </h3>
                <p className="text-gray-700">
                  End-to-end encryption with sharing only to qualified custodians set by 
                  configurable rule settings using Threshold Network.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  Gas Reduction
                </h3>
                <p className="text-gray-700">
                  Cost-effective solution for participants in the network through Account 
                  Abstraction, increasing adoption potential.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Polygon Amoy Network",
                "NFTs",
                "Smart Contracts",
                "Account Abstraction",
                "Web3",
                "Threshold Network",
                "End-to-End Encryption",
                "Access Control Lists (ACLs)",
                "DABL Launchpad",
                "Alchemy Account Abstraction SDK",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-white font-medium"
                  style={{ backgroundColor: "#F9629F" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Demo Video</h2>
            <div className="flex justify-center">
              <video 
                width="100%" 
                controls 
                className="rounded-lg shadow-lg max-w-3xl"
              >
                <source
                  src="/images/securesocialshare/ETHBoston_Secure_Share.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Team Photos</h2>
            <div className="flex justify-center">
              <img
                src="/images/securesocialshare/collage.jpg"
                alt="ETHBoston 2024 Team Photos"
                className="w-full max-w-2xl rounded-lg shadow-lg"
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Impact</h2>
            <div
              className="p-6 rounded-lg text-white"
              style={{ backgroundColor: "#F9629F" }}
            >
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-bold">Privacy First</span> - Empowers users with complete control over their sensitive data
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">Trust Verification</span> - Blockchain-based proof of access rights and permissions
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">Healthcare Application</span> - Ideal for sharing medical records with authorized caregivers
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

export default SecureSharePage;
