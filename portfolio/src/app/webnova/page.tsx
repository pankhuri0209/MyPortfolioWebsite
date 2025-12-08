"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";

const WebNovaPage: React.FC = () => {
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
              style={{ backgroundColor: "#1565C0" }}
            >
              2nd Place Honorable Mention
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              WebNova Container Challenge
            </h1>

            <p className="text-xl text-gray-600">
              WebNova II Space App Hackathon
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              A computer vision solution developed for the WebNova Container Challenge hackathon. 
              The system counts differences in shipping containers between two satellite images 
              of the same geographic location using advanced image processing techniques including 
              SIFT feature detection and BruteForce matching algorithms.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/pankhuri0209/webnovaContainers"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaGithub size={20} />
                GitHub Repository
              </a>
              <a
                href="https://www.youtube.com/watch?v=N4Zmu3sDMEc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <FaYoutube size={20} />
                Demo Video
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/hackathons/webnova-container.png"
              alt="WebNova Container Challenge"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">The Objective</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To count the differences in shipping containers between two images of the same 
                Latitude/Longitude coordinates. This solution helps in:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Inventory Tracking</strong> - Monitor container movements at ports and shipping yards
                </li>
                <li>
                  <strong>Change Detection</strong> - Identify additions and removals of containers over time
                </li>
                <li>
                  <strong>Logistics Optimization</strong> - Provide data for supply chain management decisions
                </li>
                <li>
                  <strong>Automated Monitoring</strong> - Enable satellite-based surveillance of shipping infrastructure
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Technical Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">
                  1. Feature Detection
                </h3>
                <p className="text-gray-700">
                  The two images are processed using SIFT (Scale-Invariant Feature Transform) 
                  to detect and extract key features from the container imagery.
                </p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-indigo-800">
                  2. Feature Matching
                </h3>
                <p className="text-gray-700">
                  Features are compared using BruteForce matching algorithm (BFCompare) to 
                  identify corresponding points between the two images.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  3. Difference Calculation
                </h3>
                <p className="text-gray-700">
                  The distance difference against a configurable threshold is used to calculate 
                  variations and identify container changes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Output</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                The system generates differential imagery highlighting the changes and reports 
                the count of container differences. Results are output to a designated directory 
                for further analysis, enabling:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
                <li>Visual representation of container additions/removals</li>
                <li>Quantitative count of differences detected</li>
                <li>Confidence scoring based on feature matching quality</li>
                <li>Exportable results for integration with other systems</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Python",
                "OpenCV",
                "SIFT Detection",
                "BruteForce Matching",
                "Docker",
                "Shell Scripts",
                "Computer Vision",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-white font-medium"
                  style={{ backgroundColor: "#1565C0" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Team</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700">
                <strong>Team Members:</strong> Pankhuri Gupta, Sathya Krishansamy
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Achievement Certificate</h2>
            <div className="flex justify-center">
              <img
                src="/images/hackathons/webnova-2nd-place-certificate.jpg"
                alt="WebNova II Space App Hackathon - 2nd Place Certificate for Pankhuri Gupta"
                className="w-full max-w-2xl rounded-lg shadow-lg"
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Impact</h2>
            <div
              className="p-6 rounded-lg text-white"
              style={{ backgroundColor: "#1565C0" }}
            >
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-bold">Scalable Solution</span> - Can be applied to any satellite imagery for container detection
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">Cost-Effective</span> - Automated analysis reduces manual inspection costs
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">Real-World Application</span> - Directly applicable to logistics and supply chain monitoring
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

export default WebNovaPage;
