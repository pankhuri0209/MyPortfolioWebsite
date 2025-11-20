"use client";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar"; // Ensure this path is correct
import Footer from "../components/Footer"; // Ensure this path is correct
import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

const ProjectsPage: React.FC = () => {
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
          {/* Text Content Section (Expands to 2/3 Width on Large Screens) */}
          <div className="md:col-span-2 space-y-8">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Projects
            </h1>

            <div className="space-y-6 text-lg text-gray-700">
              <p className="text-xl leading-relaxed">
                Welcome to my portfolio! Here you'll find a collection of projects 
                showcasing my expertise in <strong>full-stack development</strong>, 
                <strong> cloud infrastructure</strong>, <strong>blockchain technology</strong>, 
                and <strong>machine learning</strong>. Each project demonstrates my ability 
                to build scalable, production-ready applications using modern technologies 
                and best practices.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-semibold flex items-center mb-2">
                    💡 Featured Technologies
                  </h2>
                  <ul className="list-disc list-inside pl-3 space-y-1">
                    <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
                    <li>AWS, Terraform, Docker, Kubernetes</li>
                    <li>Blockchain & Smart Contracts (Ethereum)</li>
                    <li>Machine Learning & AI (PyTorch, TensorFlow)</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold flex items-center mb-2">
                    🎯 Core Competencies
                  </h2>
                  <ul className="list-disc list-inside pl-3 space-y-1">
                    <li>Cloud-native application development</li>
                    <li>CI/CD pipelines & DevOps automation</li>
                    <li>Decentralized application (DApp) development</li>
                    <li>Natural Language Processing & Deep Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Circular Design Element (Takes up 1/3 Width) */}
          <div className="flex justify-center md:justify-end items-center">
            <div className="circle">
              <div className="logo">
                <div className="text">
                  <p className="uppercase tracking-wide font-semibold">
                    Projects
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
        {/* Elderlycare Project Card */}
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#F6FBF0FF" }}
        >
          <CardBody>
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
              {/* Image Section */}
              <div className="col-span-12 md:col-span-5 flex justify-center">
                <div className="flex space-x-4">
                  <img
                    src="/images/elderlycare/logo.png"
                    alt="Logo"
                    className="w-24 h-24 md:w-40 md:h-40 object-contain flex-shrink-0"
                  />
                  <img
                    src="/images/elderlycare/hands.jpeg"
                    alt="Logo"
                    className="w-24 h-24 md:w-40 md:h-40 object-contain flex-shrink-0"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="col-span-12 md:col-span-7">
                <h3
                  className="font-semibold text-lg md:text-xl"
                  style={{ color: "#81B72FFF" }}
                >
                  MERN Stack
                </h3>
                <h1 className="text-2xl font-bold">
                  <a
                    href="https://github.com/pankhuri0209/elderlycare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    ElderlyCare
                  </a>
                </h1>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  A web-based solution to improve healthcare accessibility for
                  the elderly, EC-Buddy AI assistant, book doctor appointments,
                  and empower doctors with real-time access, enhancing
                  operational efficiency and patient satisfaction.
                </p>
                <div className="flex justify-start mt-4">
                  <Link href="/elderlycare">
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

        {/* Secure Social Share Project Card */}
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#FDF2F4FF" }}
        >
          <CardBody>
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
              {/* Image Section */}
              <div className="col-span-12 md:col-span-5 flex justify-center">
                <div className="flex space-x-4">
                  <img
                    src="/images/securesocialshare/lock.jpg"
                    alt="Logo"
                    className="w-24 h-24 md:w-40 md:h-40 object-contain flex-shrink-0"
                  />
                </div>
              </div>

              {/* Text Content */}
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
                    Secure Social Share
                  </a>
                </h1>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  An E2E encrypted data sharing system with strict, smart
                  contract-based access control, allowing users to securely
                  share sensitive information with their social circle in a
                  decentralized way. Winner of multiple 1st place prizes at
                  ETHBoston 2024.
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
        {/* Wyckoff Trading Assistant Project Card */}
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#E8F4FDFF" }}
        >
          <CardBody>
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
              {/* Image Section */}
              <div className="col-span-12 md:col-span-5 flex justify-center">
                <div className="flex space-x-4">
                  <img
                    src="/images/wyckoff/wykoff_chart.png"
                    alt="Wyckoff Chart"
                    className="w-full h-auto md:w-full md:h-auto object-contain flex-shrink-0"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="col-span-12 md:col-span-7">
                <h3
                  className="font-semibold text-lg md:text-xl"
                  style={{ color: "#1E88E5" }}
                >
                  Machine Learning, Backend
                </h3>
                <h1 className="text-2xl font-bold">
                  <a
                    href="https://github.com/pankhuri0209/Transformer-based-Richard-Wyckoff-Trading-Assistant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    AI-Powered Richard Wyckoff Trading Assistant
                  </a>
                </h1>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  Wyckoff Trading Assistant is an intelligent web application that combines a Transformer-based AI chatbot with reinforcement learning to help traders analyze stocks using Richard Wyckoff&apos;s methodology. The system features a PyTorch-powered neural network trained on 1,187 Wyckoff Q&A pairs to answer questions about market structure, accumulation, distribution, springs, and upthrusts, while a Q-learning algorithm learns optimal trading strategies through backtesting on historical data. Built with Flask, the application fetches real-time stock data via yfinance, enriches it with technical indicators (Moving Averages, RSI, Bollinger Bands), and visualizes results through an interactive Chart.js dashboard, providing both educational insights into Wyckoff principles and practical algorithmic trading analysis with customizable backtesting parameters.
                </p>
                <div className="flex justify-start mt-4">
                  <Link href="/wyckoff">
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
        {/* Cloud native application Project Card */}
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#FFFDE7" }}
        >
          <CardBody>
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
              {/* Image Section */}
              <div className="col-span-12 md:col-span-5 flex justify-center">
                <div className="flex space-x-4">
                  <img
                    src="/images/cloud/aws-services.png"
                    alt="Logo"
                    className="w-24 h-24 md:w-40 md:h-40 object-contain flex-shrink-0"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="col-span-12 md:col-span-7">
                <h3
                  className="font-semibold text-lg md:text-xl"
                  style={{ color: "#E34D73FF" }}
                >
                  AWS, Terraform
                </h3>
                <h1 className="text-2xl font-bold">
                  <a
                    href="https://github.com/orgs/002478905/repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Cloud Native Application
                  </a>
                </h1>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  Developed a cloud-native user management application using
                  Node.js, Express.js, and PostgreSQL, supporting concurrent
                  requests, CRUD operations, health monitoring, and robust
                  backend services with high availability. Provisioned AWS
                  infrastructure using Terraform and Packer, deploying VPCs,
                  RDS, Route 53, and SSL certificates. Integrated AWS SNS and
                  Lambda for event-driven workflows, including Mailgun email
                  verification. Secured services with Systemd and network
                  security groups. Enhanced scalability with EC2 Auto Scaling
                  and Elastic Load Balancing, enabling faster deployments.
                  Implemented a CI/CD pipeline via GitHub Actions, automating
                  testing, AMI creation, and rolling updates for seamless
                  deployment.
                </p>
                <div className="flex justify-start mt-4">
                  <Link href="/cloud">
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
        {/* Meeting Notes Application Project Card */}
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#F3E5F5" }}
        >
          <CardBody>
            <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
              {/* Image Section */}
              <div className="col-span-12 md:col-span-5 flex justify-center">
                <div className="flex space-x-4">
                  <img
                    src="/images/notes/notes-icon.png"
                    alt="Meeting Notes Application"
                    className="w-24 h-24 md:w-40 md:h-40 object-contain flex-shrink-0"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="col-span-12 md:col-span-7">
                <h3
                  className="font-semibold text-lg md:text-xl"
                  style={{ color: "#9C27B0" }}
                >
                  Web Design Course, Feb 2024
                </h3>
                <h1 className="text-2xl font-bold">
                  <a
                    href="https://github.com/pankhuri0209/Note-making-application"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Meeting Notes Application
                  </a>
                </h1>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  A simple yet powerful meeting notes application built with vanilla JavaScript. Features include creating notes with titles, content, and action items, viewing all notes with truncated content (10 words max), expanding notes with smooth CSS transitions to see full details, editing content and action items in expanded view, and toggling action items between open and completed states using checkboxes. The application fetches existing notes from a JSON file using XMLHttpRequest and allows users to add new notes with automatically generated creation timestamps. Built with modular SCSS for styling and a clean, responsive interface.
                </p>
                <div className="flex justify-start mt-4">
                  <a
                    href="https://github.com/pankhuri0209/Note-making-application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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

export default ProjectsPage;
