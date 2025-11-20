import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WyckoffPage = () => {
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
              <span style={{ color: "#1E88E5" }}>Machine Learning, Backend</span>
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            AI-Powered Richard Wyckoff Trading Assistant
          </h1>
          <br />
          <br />
          <div className="w-full mt-8 md:mt-0">
            <p>
              Wyckoff Trading Assistant is an intelligent web application that combines cutting-edge artificial intelligence with quantitative trading strategies to help traders analyze stock markets through the lens of Richard Wyckoff&apos;s time-tested methodology. Built on Flask and PyTorch, the application features two powerful components: an AI-powered chatbot that leverages a custom-trained Transformer neural network (with 6 encoder-decoder layers and 8 attention heads) to answer complex questions about Wyckoff principles including accumulation, distribution, springs, upthrusts, and market structure analysis; and a Reinforcement Learning trading engine that implements Q-learning algorithms to discover optimal buy/sell/hold strategies through backtesting on historical stock data. The system automatically fetches real-time market data via yfinance, enriches it with technical indicators (Moving Averages, RSI, Bollinger Bands, On-Balance Volume), and visualizes results through an interactive Chart.js dashboard. The chatbot, trained on 1,187 curated Wyckoff Q&A pairs, can intelligently respond to trading methodology queries, while the RL agent learns profitable trading patterns by training across 1,000 episodes, discretizing price-position states into a Q-table to maximize portfolio returns. With fallback mechanisms for both data fetching and model inference, robust error handling, and a responsive web interface, this full-stack application serves as both an educational tool for learning Wyckoff analysis and a practical backtesting platform for evaluating algorithmic trading strategies across any stock symbol with customizable parameters including date ranges and initial capital allocations.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full md:w-1/3 md:ml-8">
          <div className="mb-4 ml-50 md:ml-60">
            <h3 className="font-semibold text-foreground/90">Date</h3>
            <p className="text-small text-foreground/80">April, 2025</p>
          </div>
          <div className="mb-4 ml-50 md:ml-60">
            <h3 className="font-semibold text-foreground/90">Project Type</h3>
            <p className="text-small text-foreground/80">Theory and Practical Applications of Generative AI</p>
          </div>
        </div>
      </div>
      <br />
      <br />

      {/* Wyckoff Chart Section */}
      <div className="container mx-auto px-8 md:px-32">
        <div className="flex justify-center">
          <img
            src="/images/wyckoff/wykoff_chart.png"
            alt="Wyckoff Market Cycle Chart"
            className="w-full max-w-3xl rounded-lg shadow-lg"
          />
        </div>
        <br />
        <br />
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold">Key Features</h2>
          <ul className="features-list">
            <li>
              <div>
                <div className="feature-title">Transformer-Based AI Chatbot:</div>
                A custom-trained PyTorch neural network with 6 encoder-decoder layers and 8 attention heads, trained on 1,187 curated Wyckoff Q&A pairs to intelligently answer questions about market structure, accumulation phases, distribution patterns, springs, upthrusts, and technical analysis principles.
              </div>
            </li>
            <li>
              <div>
                <div className="feature-title">Reinforcement Learning Trading Engine:</div>
                Implements Q-learning algorithms to discover optimal buy/sell/hold strategies through backtesting on historical stock data, training across 1,000 episodes to learn profitable trading patterns and maximize portfolio returns.
              </div>
            </li>
            <li>
              <div>
                <div className="feature-title">Real-Time Market Data Integration:</div>
                Automatically fetches live stock data via yfinance API and enriches it with essential technical indicators including Moving Averages, RSI (Relative Strength Index), Bollinger Bands, and On-Balance Volume for comprehensive market analysis.
              </div>
            </li>
            <li>
              <div>
                <div className="feature-title">Interactive Visualization Dashboard:</div>
                Chart.js-powered interactive dashboard that visualizes trading results, backtesting performance, technical indicators, and market trends in an intuitive and user-friendly interface.
              </div>
            </li>
            <li>
              <div>
                <div className="feature-title">Customizable Backtesting Parameters:</div>
                Allows users to evaluate algorithmic trading strategies across any stock symbol with flexible parameters including custom date ranges, initial capital allocations, and trading strategy configurations.
              </div>
            </li>
            <li>
              <div>
                <div className="feature-title">Educational Insights:</div>
                Serves as both an educational tool for learning Richard Wyckoff&apos;s time-tested trading methodology and a practical platform for testing and validating trading strategies with real historical market data.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <br />
      <br />

      {/* Technology Stack Section */}
      <div className="container mx-auto px-8 md:px-32">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#1E88E5" }}>Backend & AI</h3>
              <ul className="space-y-2">
                <li><strong>PyTorch:</strong> Deep learning framework for building and training the Transformer neural network</li>
                <li><strong>Flask:</strong> Lightweight web framework for REST API development</li>
                <li><strong>Q-Learning:</strong> Reinforcement learning algorithm for trading strategy optimization</li>
                <li><strong>yfinance:</strong> Real-time and historical stock market data retrieval</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#1E88E5" }}>Frontend & Visualization</h3>
              <ul className="space-y-2">
                <li><strong>Chart.js:</strong> Interactive data visualization library for trading charts</li>
                <li><strong>REST API:</strong> Clean API architecture for chatbot and trading engine integration</li>
                <li><strong>Technical Indicators:</strong> Moving Averages, RSI, Bollinger Bands calculation engine</li>
                <li><strong>Responsive UI:</strong> Mobile-friendly interface for accessing trading insights anywhere</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* GitHub Link Section */}
      <div className="container mx-auto px-8 md:px-32 mb-16">
        <div className="text-center">
          <a
            href="https://github.com/pankhuri0209/Transformer-based-Richard-Wyckoff-Trading-Assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="button">
              View on GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                className="icon"
                width="16"
                height="16"
              >
                <path
                  style={{ fill: "#232326" }}
                  d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                  data-name="Left"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WyckoffPage;
