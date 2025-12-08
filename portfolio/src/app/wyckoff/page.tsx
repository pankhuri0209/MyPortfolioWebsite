"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const WyckoffPage: React.FC = () => {
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
              style={{ backgroundColor: "#1E88E5" }}
            >
              Machine Learning, Backend
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              AI-Powered Richard Wyckoff Trading Assistant
            </h1>

            <p className="text-xl text-gray-600">
              Theory and Practical Applications of Generative AI | April 2025
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              An intelligent web application that combines cutting-edge artificial intelligence 
              with quantitative trading strategies to help traders analyze stock markets through 
              the lens of Richard Wyckoff&apos;s time-tested methodology. Features a Transformer-based 
              AI chatbot and reinforcement learning trading engine.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/pankhuri0209/Transformer-based-Richard-Wyckoff-Trading-Assistant"
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
              src="/images/wyckoff/wykoff_chart.png"
              alt="Wyckoff Market Cycle Chart"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Traders face significant challenges when trying to apply Wyckoff methodology:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Complex Methodology</strong> - Wyckoff analysis requires deep understanding of market structure, accumulation, and distribution patterns
                </li>
                <li>
                  <strong>Manual Analysis</strong> - Traditional approach requires hours of chart study and pattern recognition
                </li>
                <li>
                  <strong>Backtesting Difficulty</strong> - Testing trading strategies against historical data is time-consuming
                </li>
                <li>
                  <strong>Learning Curve</strong> - Understanding springs, upthrusts, and market phases takes years of study
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">
                  Transformer-Based AI Chatbot
                </h3>
                <p className="text-gray-700">
                  Custom-trained PyTorch neural network with 6 encoder-decoder layers and 8 
                  attention heads, trained on 1,187 curated Wyckoff Q&A pairs to intelligently 
                  answer questions about market structure and analysis principles.
                </p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-indigo-800">
                  Reinforcement Learning Trading Engine
                </h3>
                <p className="text-gray-700">
                  Implements Q-learning algorithms to discover optimal buy/sell/hold strategies 
                  through backtesting on historical stock data, training across 1,000 episodes.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-800">
                  Real-Time Market Data
                </h3>
                <p className="text-gray-700">
                  Automatically fetches live stock data via yfinance API and enriches it with 
                  technical indicators including Moving Averages, RSI, Bollinger Bands, and OBV.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">
                  Interactive Dashboard
                </h3>
                <p className="text-gray-700">
                  Chart.js-powered interactive dashboard that visualizes trading results, 
                  backtesting performance, technical indicators, and market trends.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-yellow-800">
                  Customizable Backtesting
                </h3>
                <p className="text-gray-700">
                  Evaluate algorithmic trading strategies across any stock symbol with flexible 
                  parameters including custom date ranges and initial capital allocations.
                </p>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-pink-800">
                  Educational Insights
                </h3>
                <p className="text-gray-700">
                  Serves as both an educational tool for learning Wyckoff methodology and a 
                  practical platform for testing trading strategies with real historical data.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "PyTorch",
                "Flask",
                "Q-Learning",
                "Reinforcement Learning",
                "Transformer",
                "yfinance",
                "Neural Networks",
                "REST API",
                "Chart.js",
                "Moving Averages",
                "RSI",
                "Bollinger Bands",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-white font-medium"
                  style={{ backgroundColor: "#1E88E5" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Backend & AI</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>PyTorch:</strong> Deep learning framework for Transformer neural network</li>
                  <li><strong>Flask:</strong> Lightweight web framework for REST API</li>
                  <li><strong>Q-Learning:</strong> RL algorithm for trading strategy optimization</li>
                  <li><strong>yfinance:</strong> Real-time and historical market data</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Frontend & Visualization</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Chart.js:</strong> Interactive data visualization for trading charts</li>
                  <li><strong>REST API:</strong> Clean API architecture for integration</li>
                  <li><strong>Technical Indicators:</strong> MA, RSI, Bollinger Bands engine</li>
                  <li><strong>Responsive UI:</strong> Mobile-friendly interface</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Impact</h2>
            <div
              className="p-6 rounded-lg text-white"
              style={{ backgroundColor: "#1E88E5" }}
            >
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-bold">AI-Powered Analysis</span> - Democratizes access to Wyckoff methodology through intelligent Q&A
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">Automated Backtesting</span> - Enables rapid strategy validation without manual calculation
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">Educational Value</span> - Helps traders learn and apply proven trading principles
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

export default WyckoffPage;
