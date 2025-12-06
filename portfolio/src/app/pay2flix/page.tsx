import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Pay2FlixPage = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto flex flex-col md:flex-row items-center pt-32 px-8 md:px-32 space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-content md:w-1/2 text-center md:text-left">
          <div className="relative">
            <span
              className="text_name"
              style={{
                fontFamily: "Sarabun, sans-serif",
                fontSize: "20px",
                lineHeight: "46px",
                fontWeight: "700",
              }}
            >
              <span style={{ color: "#FF6B35" }}>No Code, Blockchain, Stacks</span>
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Pay2Flix
          </h1>
          <br />
          <br />
          <div className="w-full mt-8 md:mt-0">
            <p>
              Pay2Flix is a decentralized streaming platform built on the Stacks blockchain 
              that enables pay-per-view content monetization using Bitcoin. The platform 
              allows content creators to monetize their videos through microtransactions, 
              giving viewers the flexibility to pay only for the content they watch.
              <strong> Winner of 3rd Place in the No Code Solution Track.</strong>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full md:w-1/3 md:ml-8">
          <div className="mb-4 ml-50 md:ml-60">
            <h3 className="font-semibold text-foreground/90">Achievement</h3>
            <p className="text-small text-foreground/80">3rd Place - No Code Solution Track</p>
          </div>
          <div className="mb-4 ml-50 md:ml-60">
            <h3 className="font-semibold text-foreground/90">Event</h3>
            <p className="text-small text-foreground/80">EasyA x Stacks Harvard Hackathon</p>
          </div>
          <div className="mb-4 ml-50 md:ml-60">
            <h3 className="font-semibold text-foreground/90">Date</h3>
            <p className="text-small text-foreground/80">November 9-10, 2024</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container mx-auto px-8 md:px-32">
        <div className="flex justify-center">
          <img
            src="/images/hackathons/pay2flix-team-photo.jpg"
            alt="Pay2Flix Team at EasyA Stacks Harvard Hackathon"
            className="w-full max-w-3xl rounded-lg shadow-lg"
          />
        </div>
        <br />
        <br />
      </div>

      <div className="container mx-auto px-8 md:px-32">
        <br />
        <br />
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold">
            The Problem
          </h2>
          <p className="mt-4 text-lg">
            Traditional streaming platforms require monthly subscriptions, forcing users to 
            pay for content they may not fully utilize. Content creators also face challenges 
            with fair monetization and direct audience engagement.
          </p>
        </div>
        <br />
        <br />

        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Our Solution
          </h2>
          <div className="mt-4 text-lg space-y-4">
            <p>
              <strong>Pay-Per-View Model:</strong> Users only pay for the content they 
              actually watch, eliminating wasteful subscription fees.
            </p>
            <p>
              <strong>Bitcoin Microtransactions:</strong> Leveraging the Stacks blockchain 
              to enable secure, low-cost Bitcoin payments for streaming content.
            </p>
            <p>
              <strong>Creator Empowerment:</strong> Content creators receive direct payments 
              without intermediaries taking large cuts of their earnings.
            </p>
            <p>
              <strong>No Code Approach:</strong> Built using no-code tools to demonstrate 
              rapid prototyping and accessibility in blockchain development.
            </p>
          </div>
        </div>
        <br />
        <br />

        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Key Features
          </h2>
          <ul className="mt-4 text-lg list-disc list-inside pl-5 space-y-2">
            <li>Decentralized content hosting and streaming</li>
            <li>Bitcoin-based micropayments via Stacks</li>
            <li>User-friendly interface for viewers and creators</li>
            <li>Transparent revenue sharing model</li>
            <li>Smart contract-based access control</li>
          </ul>
        </div>
        <br />
        <br />

        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Technologies Used
          </h2>
          <ul className="mt-4 text-lg list-disc list-inside pl-5 space-y-2">
            <li><strong>Stacks Blockchain</strong> - Bitcoin Layer 2 for smart contracts</li>
            <li><strong>No-Code Tools</strong> - Rapid prototyping and development</li>
            <li><strong>Bitcoin</strong> - Underlying payment infrastructure</li>
          </ul>
        </div>
        <br />
        <br />

        <div className="flex justify-center space-x-4">
          <a
            href="https://x.com/easya_app/status/1856050187623641582"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">
              View Announcement
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
          </a>
        </div>
      </div>

      <br />
      <br />

      <Footer />
    </div>
  );
};

export default Pay2FlixPage;
