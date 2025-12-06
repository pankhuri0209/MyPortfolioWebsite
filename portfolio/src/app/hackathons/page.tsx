"use client";

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

const HackathonsPage: React.FC = () => {
  useEffect(() => {
    console.log("Custom script executed!");
    const textElement = document.querySelector(".text p") as HTMLElement;
    if (textElement) {
      textElement.innerHTML = textElement.innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${i * 9.2}deg)">${char}</span>`
        )
        .join("");
    }
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-8">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Hackathons
            </h1>

            <div className="space-y-6 text-lg text-gray-700">
              <p className="text-xl leading-relaxed">
                I love participating in hackathons to solve real-world problems
                through innovative technology solutions. Here are some of the
                hackathon projects I&apos;ve worked on, showcasing my skills in
                computer vision, blockchain, and full-stack development.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end items-center">
            <div className="circle">
              <div className="logo">
                <div className="text">
                  <p className="uppercase tracking-wide font-semibold">
                    Hackathons
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="flex flex-col items-center space-y-16 mt-16 w-full">
        {/* WebNova Container Challenge Project Card */}
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#E3F2FD" }}
        >
          <CardBody>
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="col-span-12 md:col-span-5 flex justify-center">
                <div className="flex space-x-4">
                  <img
                    src="/images/hackathons/webnova-container.png"
                    alt="WebNova Container Challenge"
                    className="w-full h-auto md:w-full md:h-auto object-contain flex-shrink-0"
                  />
                </div>
              </div>

              <div className="col-span-12 md:col-span-7">
                <h3
                  className="font-semibold text-lg md:text-xl"
                  style={{ color: "#1565C0" }}
                >
                  Python, Computer Vision, Docker
                </h3>
                <h1 className="text-2xl font-bold">
                  <a
                    href="https://github.com/pankhuri0209/webnovaContainers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    WebNova Container Challenge
                  </a>
                </h1>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  A computer vision solution for counting differences in
                  shipping containers between two satellite images of the same
                  geographic location. The system uses SIFT (Scale-Invariant
                  Feature Transform) detection and BruteForce matching
                  algorithms to identify and compare containers.{" "}
                  <strong>Winner of 2nd Place Honorable Mention.</strong>
                </p>
                <div className="flex justify-start mt-4">
                  <Link href="/webnova">
                    <button className="button">
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        className="icon w-4 h-4"
                      >
                        <path
                          style={{ fill: "#232326" }}
                          d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Secure Social Share - ETHBoston 2024 Project Card */}
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#FDF2F4FF" }}
        >
          <CardBody>
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="col-span-12 md:col-span-5 flex justify-center">
                <div className="flex space-x-4">
                  <img
                    src="/images/securesocialshare/lock.jpg"
                    alt="Secure Social Share"
                    className="w-full h-auto md:w-full md:h-auto object-contain flex-shrink-0"
                  />
                </div>
              </div>

              <div className="col-span-12 md:col-span-7">
                <h3
                  className="font-semibold text-lg md:text-xl"
                  style={{ color: "#E34D73FF" }}
                >
                  Blockchain, Frontend
                </h3>
                <h1 className="text-2xl font-bold">
                  <a
                    href="https://devpost.com/software/secure-social-share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Secure Social Share - ETHBoston 2024
                  </a>
                </h1>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  An E2E encrypted data sharing system with strict, smart
                  contract-based access control, allowing users to securely
                  share sensitive information with their social circle in a
                  decentralized way.{" "}
                  <strong style={{ color: "#E34D73" }}>Winner of multiple 1st place prizes at ETHBoston 2024.</strong>
                </p>
                <div className="flex justify-start mt-4">
                  <Link href="/secureshare">
                    <button className="button">
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        className="icon w-4 h-4"
                      >
                        <path
                          style={{ fill: "#232326" }}
                          d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Pay2Flix - EasyA Stacks Harvard Hackathon Project Card */}
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#FFF3E0" }}
        >
          <CardBody>
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="col-span-12 md:col-span-5 flex justify-center">
                <div className="flex space-x-4">
                  <img
                    src="/images/hackathons/pay2flix-banner.png"
                    alt="Pay2Flix - Pay for what you watch"
                    className="w-full h-auto md:w-full md:h-auto object-contain flex-shrink-0"
                  />
                </div>
              </div>

              <div className="col-span-12 md:col-span-7">
                <h3
                  className="font-semibold text-lg md:text-xl"
                  style={{ color: "#FF6B35" }}
                >
                  No Code, Blockchain, Stacks
                </h3>
                <h1 className="text-2xl font-bold">
                  <a
                    href="https://x.com/easya_app/status/1856050187623641582"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Pay2Flix - EasyA Stacks Harvard Hackathon
                  </a>
                </h1>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  A decentralized streaming platform built on Stacks blockchain
                  enabling pay-per-view content monetization using Bitcoin.
                  Allows creators to monetize videos through microtransactions.{" "}
                  <strong>Winner of 3rd Place in the No Code Solution Track.</strong>
                </p>
                <div className="flex justify-start mt-4">
                  <Link href="/pay2flix">
                    <button className="button">
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        className="icon w-4 h-4"
                      >
                        <path
                          style={{ fill: "#232326" }}
                          d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Root Beer Game - EasyA Polkadot Harvard Hackathon Project Card */}
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#F3E5F5" }}
        >
          <CardBody>
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="col-span-12 md:col-span-5 flex justify-center">
                <div className="flex space-x-4">
                  <img
                    src="/images/hackathons/rootbeer-game.jpeg"
                    alt="Web3 Root Beer Game - Supply Chain Management"
                    className="w-full h-auto md:w-full md:h-auto object-contain flex-shrink-0"
                  />
                </div>
              </div>

              <div className="col-span-12 md:col-span-7">
                <h3
                  className="font-semibold text-lg md:text-xl"
                  style={{ color: "#E6007A" }}
                >
                  Polkadot, React.js, Unique Network
                </h3>
                <h1 className="text-2xl font-bold">
                  <a
                    href="https://github.com/pankhuri0209/Web3-Root-Beer-DOT-Game"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Root Beer Game - EasyA Polkadot Harvard Hackathon
                  </a>
                </h1>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  A Web3 implementation of the classic supply chain management game
                  (originally from MIT/Harvard) built on Polkadot&apos;s Unique Network.
                  Uses NFT badges to validate supply chain operational excellence
                  for RWA tokenization and trade financing.{" "}
                  <strong style={{ color: "#E6007A" }}>Finalist Team.</strong>
                </p>
                <div className="flex justify-start mt-4">
                  <Link href="/rootbeer">
                    <button className="button">
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 25 25"
                        className="icon w-4 h-4"
                      >
                        <path
                          style={{ fill: "#232326" }}
                          d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* GoalForge - InnovAIte Hackathon Project Card */}
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#E0F7FA" }}
        >
          <CardBody>
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="col-span-12 md:col-span-5 flex justify-center">
                <div className="flex items-center justify-center w-full h-48 md:h-64 rounded-lg" style={{ backgroundColor: "#00ACC1" }}>
                  <div className="text-center text-white p-6">
                    <div className="text-6xl mb-4">🎯</div>
                    <div className="text-2xl font-bold">GoalForge</div>
                    <div className="text-sm opacity-90">Career Navigator</div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-7">
                <h3
                  className="font-semibold text-lg md:text-xl"
                  style={{ color: "#00838F" }}
                >
                  AI, Node.js, JavaScript
                </h3>
                <h1 className="text-2xl font-bold">
                  <a
                    href="https://github.com/pankhuri0209/innovaite_hackathon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GoalForge - NEU AI Club InnovAIte Hackathon
                  </a>
                </h1>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  A personalized career navigator powered by AI that helps users
                  chart their professional development path. Built at Northeastern
                  University&apos;s AI Club InnovAIte hackathon, featuring intelligent
                  career recommendations and goal tracking.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href="https://github.com/pankhuri0209/innovaite_hackathon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://docs.google.com/presentation/d/1e4_vJW68Mq7o54Mj0HYfYtTVIkKjWDs2isvj5aPs30Q/edit#slide=id.g2c7ccb6075c_0_141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm"
                  >
                    Presentation
                  </a>
                  <a
                    href="https://www.figma.com/proto/LEESGAurYVGSSL3yQh86SO/innovaite-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                  >
                    Figma Prototype
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/pankhurigupta0209_hackathon-aiinnovation-careerdevelopment-activity-7194061543720828929-ZZRZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* VoteMatch - Voter Hackathon Project Card */}
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#E8F5E9" }}
        >
          <CardBody>
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="col-span-12 md:col-span-5 flex justify-center">
                <div className="flex items-center justify-center w-full h-48 md:h-64 rounded-lg" style={{ backgroundColor: "#2E7D32" }}>
                  <div className="text-center text-white p-6">
                    <div className="text-6xl mb-4">🗳️</div>
                    <div className="text-2xl font-bold">VoteMatch</div>
                    <div className="text-sm opacity-90">Find Your Candidate</div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-7">
                <h3
                  className="font-semibold text-lg md:text-xl"
                  style={{ color: "#1B5E20" }}
                >
                  Python, JavaScript, HTML/CSS
                </h3>
                <h1 className="text-2xl font-bold">
                  <a
                    href="https://github.com/pankhuri0209/Voter_hackthon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    VoteMatch - Voter Recommendation System
                  </a>
                </h1>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  A civic tech application that helps voters find candidates
                  matching their political views. Uses a weighted distance algorithm
                  to compare user responses on key issues with candidate positions,
                  providing personalized voting recommendations.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href="https://github.com/pankhuri0209/Voter_hackthon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://voter-hackthon.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Zenno Concierge - Agentic Payments Hackathon @ YC */}
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#FFF3E0" }}
        >
          <CardBody>
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="col-span-12 md:col-span-5 flex justify-center">
                <Image
                  alt="Zenno Concierge at YC Hackathon"
                  className="object-cover rounded-lg w-full"
                  src="/images/hackathons/zenno-concierge.jpeg"
                  width={500}
                  height={350}
                />
              </div>

              <div className="col-span-12 md:col-span-7">
                <h3
                  className="font-semibold text-lg md:text-xl"
                  style={{ color: "#E65100" }}
                >
                  TypeScript, React, Anthropic Claude, Crypto Payments
                </h3>
                <h1 className="text-2xl font-bold">
                  <a
                    href="https://github.com/amanpal108/Zenno-Concierge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Zenno Concierge - AI Shopping Assistant
                  </a>
                </h1>
                <p className="text-sm text-gray-600 mb-2">
                  Agentic Payments Hackathon by Locus @ Y Combinator HQ
                </p>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  An AI-powered concierge for purchasing authentic Banarasi sarees
                  through natural conversation. Features automated vendor discovery,
                  Hindi phone negotiations, and seamless USDC cryptocurrency payments
                  on Base blockchain via Locus Wallet.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href="https://github.com/amanpal108/Zenno-Concierge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/pankhurigupta0209_agenticai-locus-ycombinator-activity-7396791350232297472-DKbv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <br />
      <br />
      <Footer />
    </div>
  );
};

export default HackathonsPage;
