"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const CloudPage: React.FC = () => {
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
              style={{ backgroundColor: "#FF9800" }}
            >
              AWS, Terraform (IaC)
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Cloud Native Application
            </h1>

            <p className="text-xl text-gray-600">
              Network Structures and Cloud Computing Course | December 2024
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              A cloud-native user management application leveraging Node.js, Express.js, and 
              PostgreSQL to support concurrent requests with CRUD operations, health monitoring, 
              and robust backend services. Designed for high availability and fault tolerance 
              with fully automated CI/CD pipeline using GitHub Actions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/orgs/002478905/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaGithub size={20} />
                GitHub Repository
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/cloud/chart.jpg"
              alt="Cloud Architecture Diagram"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Building enterprise-grade cloud applications requires addressing multiple concerns:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Scalability</strong> - Handling variable traffic loads without manual intervention
                </li>
                <li>
                  <strong>High Availability</strong> - Ensuring the application remains accessible during failures
                </li>
                <li>
                  <strong>Infrastructure Management</strong> - Consistent, repeatable deployments across environments
                </li>
                <li>
                  <strong>Security</strong> - Protecting sensitive data and enforcing access controls
                </li>
                <li>
                  <strong>Deployment Automation</strong> - Reducing manual steps and human error in releases
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚙️</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-orange-800">
                      Scalable User Management
                    </h3>
                    <p className="text-gray-700">
                      Cloud-native RESTful user management application using Node.js, Express.js, 
                      and PostgreSQL, supporting concurrent requests, CRUD operations, and health monitoring.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📦</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">
                      Infrastructure as Code (IaC)
                    </h3>
                    <p className="text-gray-700">
                      Provisioned AWS infrastructure using Terraform and Packer, deploying VPCs, 
                      RDS, Route 53, and SSL certificates for automated and scalable deployments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-green-800">
                      Event-Driven Workflows
                    </h3>
                    <p className="text-gray-700">
                      Integrated AWS SNS and Lambda for event-driven workflows, including automated 
                      email verification with SendGrid, ensuring seamless communication.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔐</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-red-800">
                      Security & Service Management
                    </h3>
                    <p className="text-gray-700">
                      Secured services using Systemd for process management and enforced network 
                      security via AWS security groups.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-800">
                      Scalability & Auto Scaling
                    </h3>
                    <p className="text-gray-700">
                      Enhanced performance with EC2 Auto Scaling and Elastic Load Balancing, 
                      optimizing traffic distribution and reducing downtime.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-teal-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-teal-800">
                      CI/CD Pipeline Automation
                    </h3>
                    <p className="text-gray-700">
                      Implemented CI/CD pipeline using GitHub Actions, enabling automated testing, 
                      AMI creation, and rolling updates for seamless deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "AWS",
                "Terraform",
                "Packer",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "EC2 Auto Scaling",
                "Elastic Load Balancing",
                "AWS SNS",
                "AWS Lambda",
                "Route 53",
                "GitHub Actions",
                "SendGrid",
                "Systemd",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-white font-medium"
                  style={{ backgroundColor: "#FF9800" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Architecture Highlights</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">1.</span>
                  <span>
                    <strong>VPC Configuration</strong> - Isolated network environment with public and private subnets
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">2.</span>
                  <span>
                    <strong>RDS PostgreSQL</strong> - Managed database with automated backups and failover
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">3.</span>
                  <span>
                    <strong>Custom AMIs</strong> - Packer-built Amazon Machine Images for consistent deployments
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">4.</span>
                  <span>
                    <strong>SSL/TLS</strong> - Secure communications with AWS Certificate Manager
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold">5.</span>
                  <span>
                    <strong>DNS Management</strong> - Route 53 for domain routing and health checks
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Impact</h2>
            <div
              className="p-6 rounded-lg text-white"
              style={{ backgroundColor: "#FF9800" }}
            >
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-bold">Enterprise Ready</span> - Production-grade infrastructure with high availability
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">Cost Optimized</span> - Auto-scaling ensures you only pay for resources you use
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">DevOps Excellence</span> - Fully automated CI/CD reduces deployment time and errors
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

export default CloudPage;
