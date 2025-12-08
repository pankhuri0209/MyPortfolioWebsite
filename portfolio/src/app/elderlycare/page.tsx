"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

const ElderlyCarePage: React.FC = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32 pt-32">
        <div className="mb-6">
          <Link
            href="/projects"
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
            Back to Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div
              className="inline-block px-4 py-2 rounded-full text-white font-semibold text-sm"
              style={{ backgroundColor: "#81B72F" }}
            >
              MERN Stack
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              ElderlyCare
            </h1>

            <p className="text-xl text-gray-600">
              Web Design Course Project | April 2024
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              A web-based solution aimed at addressing the global challenge of an aging population, 
              resulting in significant improvements in accessibility to healthcare services for 
              elderly individuals. Features EC-Buddy AI assistant for facilitating doctor appointments 
              tailored to elderly individuals&apos; needs, empowering doctors with real-time access to 
              appointments, enhancing operational efficiency and patient satisfaction.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/pankhuri0209/elderlycare"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaGithub size={20} />
                GitHub Repository
              </a>
              <a
                href="https://app.visily.ai/projects/9d71d03e-34a4-43c9-9b98-0e2d1faeff08/boards/852039"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <SiFigma size={20} />
                Figma Design
              </a>
              <a
                href="https://www.linkedin.com/posts/pankhurigupta0209_elderlyassistance-webdesign-activity-7190042012178395136-pPC7"
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
              src="/images/elderlycare/logo.png"
              alt="ElderlyCare Logo"
              className="rounded-lg shadow-lg max-w-[200px] max-h-[180px] object-contain"
            />
          </div>
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex justify-center">
                <img
                  src="/images/elderlycare/pic1.png"
                  alt="ElderlyCare Dashboard"
                  className="max-w-[350px] max-h-[250px] w-full object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/elderlycare/pic3.png"
                  alt="ElderlyCare Features"
                  className="max-w-[350px] max-h-[250px] w-full object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The global aging population faces significant challenges in accessing healthcare services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Accessibility Barriers</strong> - Elderly individuals struggle with complex digital platforms
                </li>
                <li>
                  <strong>Communication Gaps</strong> - Language barriers and lack of personalized assistance
                </li>
                <li>
                  <strong>Appointment Management</strong> - Difficulty booking and tracking doctor appointments
                </li>
                <li>
                  <strong>Health Information</strong> - Limited access to immediate health-related guidance
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  User Registration
                </h3>
                <p className="text-gray-700">
                  Elderly individuals can effortlessly register on the platform to access a 
                  wide array of services tailored to their needs.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">
                  EC Buddy AI Assistant
                </h3>
                <p className="text-gray-700">
                  Leverages ChatGPT APIs and React technology to provide users with immediate 
                  assistance for their health-related concerns with personalized responses.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Language Support
                </h3>
                <p className="text-gray-700">
                  Integrates i18next to cater to diverse linguistic needs, ensuring users 
                  can access services in their preferred language.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-yellow-800">
                  Doctor Dashboard
                </h3>
                <p className="text-gray-700">
                  Empowers healthcare professionals with insightful analytics based on patient 
                  appointments. Doctors can update patient statuses and manage profiles.
                </p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg md:col-span-2">
                <h3 className="text-xl font-semibold mb-3 text-pink-800">
                  Elderly Booking Platform
                </h3>
                <p className="text-gray-700">
                  Elderly users can book appointments with doctors, search for doctors based 
                  on location, experience, and ratings, and access personalized healthcare services.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "JavaScript",
                "JSX",
                "Node.js",
                "Express.js",
                "JWT",
                "RBAC",
                "MongoDB",
                "OpenAI API",
                "Stripe API",
                "SendGrid",
                "Multer",
                "i18next",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-white font-medium"
                  style={{ backgroundColor: "#81B72F" }}
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
                <source src="/images/elderlycare/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Impact</h2>
            <div
              className="p-6 rounded-lg text-white"
              style={{ backgroundColor: "#81B72F" }}
            >
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-bold">Improved Accessibility</span> - Makes healthcare services more accessible to elderly individuals
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">AI-Powered Assistance</span> - Provides 24/7 health guidance through EC Buddy
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">Operational Efficiency</span> - Streamlines appointment management for both patients and doctors
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

export default ElderlyCarePage;
