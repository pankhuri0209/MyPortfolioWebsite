import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WebNovaPage = () => {
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
              <span style={{ color: "#1565C0" }}>Python, Computer Vision, Docker</span>
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            WebNova Container Challenge
          </h1>
          <br />
          <br />
          <div className="w-full mt-8 md:mt-0">
            <p>
              A computer vision solution developed for the WebNova Container Challenge hackathon. 
              The system counts differences in shipping containers between two satellite images 
              of the same geographic location using advanced image processing techniques. 
              <strong> Winner of 2nd Place Honorable Mention.</strong>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full md:w-1/3 md:ml-8">
          <div className="mb-4 ml-50 md:ml-60">
            <h3 className="font-semibold text-foreground/90">Achievement</h3>
            <p className="text-small text-foreground/80">2nd Place Honorable Mention</p>
          </div>
          <div className="mb-4 ml-50 md:ml-60">
            <h3 className="font-semibold text-foreground/90">Project Type</h3>
            <p className="text-small text-foreground/80">WebNova Hackathon</p>
          </div>
          <div className="mb-4 ml-50 md:ml-60">
            <h3 className="font-semibold text-foreground/90">Team</h3>
            <p className="text-small text-foreground/80">Pankhuri Gupta, Sathya Krishansamy</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container mx-auto px-8 md:px-32">
        <div className="flex justify-center">
          <img
            src="/images/hackathons/webnova-container.png"
            alt="WebNova Container Challenge"
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
            The Objective
          </h2>
          <p className="mt-4 text-lg">
            To count the differences in shipping containers between two images of the same 
            Latitude/Longitude coordinates. This solution helps in tracking container 
            movements and inventory changes at ports and shipping yards.
          </p>
        </div>
        <br />
        <br />

        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Technical Solution
          </h2>
          <div className="mt-4 text-lg space-y-4">
            <p>
              <strong>1. Feature Detection:</strong> The two images are processed using SIFT 
              (Scale-Invariant Feature Transform) to detect and extract key features from 
              the container imagery.
            </p>
            <p>
              <strong>2. Feature Matching:</strong> Features are compared using BruteForce 
              matching algorithm (BFCompare) to identify corresponding points between the 
              two images.
            </p>
            <p>
              <strong>3. Difference Calculation:</strong> The distance difference against a 
              configurable threshold is used to calculate variations and identify container 
              changes.
            </p>
          </div>
        </div>
        <br />
        <br />

        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Output
          </h2>
          <p className="mt-4 text-lg">
            The system generates differential imagery highlighting the changes and reports 
            the count of container differences. Results are output to a designated directory 
            for further analysis.
          </p>
        </div>
        <br />
        <br />

        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Technologies Used
          </h2>
          <ul className="mt-4 text-lg list-disc list-inside pl-5 space-y-2">
            <li><strong>Python (64.4%)</strong> - Core application logic and image processing</li>
            <li><strong>Docker (34.2%)</strong> - Containerization for easy deployment</li>
            <li><strong>Shell (1.4%)</strong> - Automation scripts</li>
            <li><strong>OpenCV</strong> - Computer vision library for SIFT and feature matching</li>
          </ul>
        </div>
        <br />
        <br />

        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/pankhuri0209/webnovaContainers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">
              View on GitHub
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
          <a
            href="https://www.youtube.com/watch?v=N4Zmu3sDMEc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">
              Watch Demo Video
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

export default WebNovaPage;
