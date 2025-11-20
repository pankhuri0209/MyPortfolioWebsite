"use client";
// pages/index.tsx
import Image from "next/image";
import Navbar from "./components/Navbar"; // Ensure this path is correct
import Footer from "./components/Footer"; // Ensure this path is correct
import { Card, CardBody, Button, CardFooter } from "@nextui-org/react";
import Script from "next/script";
import Link from "next/link";
import React, { useEffect } from "react";
import Slider from "./components/Slider";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
const Home: React.FC = () => {
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
  const testimonials = [
    <div key="1">
      <h2
        className="font-semibold text-foreground/90 text-2xl"
        style={{ color: "#E34D73FF" }}
      >
        Dr. Purnendu Shekhar Pandey
      </h2>
      <br />
      <h2
        className=" text-foreground/90 text-xl"
        style={{ color: "#E34D73FF", fontStyle: "italic" }}
      >
        Associate Professor & Researcher
      </h2>
      <p className=" mt-4 ">
        I am pleased to recommend Pankhuri for her outstanding work on the Smart
        Bag project. I had the privilege of supervising Pankhuri and witnessing
        her remarkable skills and dedication firsthand. Pankhuri worked on the
        development of a Smart Bag, integrating various advanced technologies
        such as IoT, RFID, and GPS. Despite having no prior experience in these
        areas, she demonstrated exceptional intellectual abilities and
        successfully created a cohesive and functional system in a short period.
        Throughout the project, Pankhuri showed a strong capacity for
        independent work, creativity, and enthusiasm. Her sharp mind, excellent
        grasping power, and deep commitment to her tasks were evident. Among the
        many students I have mentored, Pankhuri stands out as one of the very
        best. Her programming skills, analytical approach, and problem-solving
        abilities are particularly impressive. Pankhuris work ethic is
        exemplary. The Smart Bag project she completed during her undergraduate
        studies showcases her ability to quickly learn new technologies and
        apply them effectively to solve challenging problems. Her motivation to
        acquire new professional skills is commendable. Pankhuri is self-driven
        and highly motivated, with a clear potential for success in any
        professional endeavor. I highly recommend her for any opportunity she
        seeks. She is a bright and highly motivated individual who will be an
        asset to any team.
      </p>
    </div>,

    <div key="2">
      <h2
        className="font-semibold text-foreground/90 text-2xl"
        style={{ color: "#E34D73FF" }}
      >
        Naresh Sharma
      </h2>
      <br />
      <h2
        className=" text-foreground/90 text-xl"
        style={{ color: "#E34D73FF", fontStyle: "italic" }}
      >
        Sr. Technical Manager @ Hexagon
      </h2>
      <p className=" mt-4 text-center md:text-left">
        I am pleased to write this recommendation for Pankhuri based on her
        outstanding performance. Pankhuri collaborated with me on various
        projects, and her expertise and dedication were invaluable assets to our
        team. Her deep knowledge of Technologies and Geographic Information
        Systems (GIS) enabled her to tackle complex spatial challenges with
        precision and creativity. She adeptly coded GIS solutions, offered
        technical consultancy, and managed Proof of Concept applications,
        showcasing our product robustness. Her analytical prowess and ability to
        tackle challenges independently highlighted her exceptional competence
        and dedication Pankhuris enthusiasm for her work and her commitment to
        delivering results make her a highly valuable asset to any organization.
        I wholeheartedly recommend her and I am confident that she will continue
        to excel in her future endeavors.
      </p>
    </div>,
    <div key="3">
      <h2
        className="font-semibold text-foreground/90 text-2xl"
        style={{ color: "#E34D73FF" }}
      >
        Shivangi Pandey
      </h2>
      <br />
      <h2
        className=" text-foreground/90 text-xl italic-text"
        style={{ color: "#E34D73FF", fontStyle: "italic" }}
      >
        Senior Software Engineer @ Nagarro
      </h2>
      <p className=" mt-4 text-center md:text-left">
        I had the pleasure of working with Pankhuri, and I am continually
        impressed by her exceptional problem-solving skills and dedication.
        Pankhuri played a pivotal role in resolving critical blocker issues that
        were hindering our progress. She adeptly addressed a major issue in
        visualizing student fees and creating student payments dashboards. Her
        work on the dashboard, which serves over 2,000 campus customers and
        impacts more than 10,000 student users, was nothing short of
        outstanding. Pankhuri demonstrated her technical expertise by developing
        fee payment templates and handling bulky transactions efficiently.
        Additionally, she provided suitable solutions that benefitted two
        internal teams, showcasing her ability to collaborate and deliver
        impactful results. Pankhuris hard work, dedication, and technical
        proficiency make her an invaluable asset to any team. I highly recommend
        her for any challenging project or role that demands high-level
        problem-solving and collaboration skills.
      </p>
    </div>,

    // Add more testimonials here if needed
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex flex-col md:flex-row items-center pt-32 px-8 md:px-32 space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-content md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Hello 👋 , <br />I am Pankhuri <br />A Software Engineer
          </h1>
          <div className="mt-8 flex justify-center md:justify-start space-x-6">
            <a
              href="https://github.com/pankhuri0209"
              className="text-gray-400 hover:text-gray-100"
            >
              <FaGithub size={24} />
              <span className="sr-only">Github</span>
            </a>

            <a
              href="https://www.instagram.com/pankhuri0209/"
              className="text-gray-400 hover:text-gray-100"
            >
              <FaInstagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://x.com/Pankhurig0209"
              className="text-gray-400 hover:text-gray-100"
            >
              <FaTwitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/pankhurigupta0209/"
              className="text-gray-400 hover:text-gray-100"
            >
              <FaLinkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:pankhuri0209@gmail.com"
              className="text-gray-400 hover:text-gray-100"
            >
              <FaEnvelope size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
          <div className="flex justify-center md:hidden mt-4">
            <img
              src="/images/profile.png"
              alt="Profile Picture"
              className="w-60 h-70 rounded-lg"
            />
          </div>
          <br />
          <br />
          <p className="text-lg md:text-xl">
            A passionate computer science enthusiast pursuing my Master&#39;s at
            Northeastern University. With over 4 years of experience in building
            scalable infrastructure and user-centric applications, I&#39;m on a
            mission to make waves in tech.
          </p>
          <div className="flex justify-start mt-4">
            <Link href="/aboutme">
              <button className="button" style={{ color: "rgb(227, 77, 115)" }}>
                More about me
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
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 md:justify-end">
          <div className="circle">
            <div className="logo">
              <div className="text">
                <p>PROJECTS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center md:justify-end w-full md:w-auto">
          <Image
            src="/images/profile.png" // Ensure this path is correct
            alt="Profile Picture"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center mt-16 w-full">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#F6FBF0FF" }}
        >
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_auto] gap-6">
              {/* Left side: Content */}
              <div>
                {/* Two-column layout: left column stacks MERN Stack and Elderlycare; right column holds badges spanning both rows */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-4 mb-4">
                  {/* Left column: two stacked rows */}
                  <div className="flex flex-col justify-start">
                    <h3
                      className="font-semibold text-foreground/90 text-lg md:text-lg"
                      style={{ color: "#81B72FFF" }}
                    >
                      MERN Stack
                    </h3>
                    <h1 className="text-projects mt-0">Elderlycare</h1>
                  </div>

                  {/* Right column: technologies (spans both rows visually) */}
                  <div className="flex flex-wrap gap-3 items-start w-full md:max-w-[65%] md:justify-end">
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
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: "#055f21ff", color: "#E6EEF7" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-medium text-foreground/80">
                  A web-based solution to improve healthcare accessibility for
                  the elderly, EC-Buddy AI assistant, book doctor appointments
                  and empower doctors with real-time access, enhancing
                  operational efficiency and patient satisfaction
                </p>
              </div>

              {/* Right side: Images */}
              <div className="flex gap-4 items-start">
                <img
                  src="/images/elderlycare/logo.png"
                  alt="Logo"
                  className="logo-image"
                />
                {/* <img
                  src="/images/elderlycare/hands.jpeg"
                  alt="Hands"
                  className="logo-image"
                /> */}
              </div>
            </div>

            {/* View Project button */}
            <div className="flex justify-start">
              <Link href="/elderlycare">
                <button className="button">
                  View Project
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
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
       <div className="flex justify-center mt-16 w-full">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#FDF2F4FF" }}
        >
          <CardBody>
            {/* give the left column a bit more room and avoid wrapping for titles */}
            <div className="grid grid-cols-1 md:grid-cols-[1.7fr_auto] gap-6">
              {/* Left side: Content */}
              <div>
                {/* Two-column layout: left column stacks MERN Stack and Elderlycare; right column holds badges spanning both rows */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-4 mb-4">
                  {/* Left column: two stacked rows */}
                  <div className="flex flex-col justify-start">
                    <h3
                      className="font-semibold text-foreground/90 text-lg md:text-lg whitespace-normal md:whitespace-nowrap"
                      style={{ color: "#E34D73FF" }}
                    >
                      Blockchain, Frontend
                    </h3>
                    <h1 className="text-projects mt-0 whitespace-normal md:whitespace-nowrap">Secure Social Care</h1>
                  </div>

                  {/* Right column: technologies (spans both rows visually) */}
                  {/* allow badge column to take remaining space instead of capping at 65% */}
                  <div className="flex flex-wrap gap-3 items-start w-full md:justify-end">
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
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: "#c602afff", color: "#E6EEF7" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-medium text-foreground/80">
                  An E2E encrypted data sharing system with strict, smart
                  contract-based access control, allowing users to <br /> securely
                  share sensitive information with their social circle in a
                  decentralized way. Winner of multiple 1st place prizes at
                  ETHBoston 2024.
                </p>
              </div>

              {/* Right side: Images */}
              <div className="flex gap-4 items-start">
                <img
                  src="/images/securesocialshare/lock.jpg"
                  alt="Logo"
                  className="logo-image"
                />
                {/* <img
                  src="/images/elderlycare/hands.jpeg"
                  alt="Hands"
                  className="logo-image"
                /> */}
              </div>
            </div>

            {/* View Project button */}
            <div className="flex justify-start">
              <Link href="/secureshare">
                <button className="button">
                  View Project
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
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
      
      <div className="flex justify-center mt-16 w-full">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#F3E5F5" }}
        >
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-[1.7fr_auto] gap-6">
              {/* Left side: Content */}
              <div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-4 mb-4">
                  {/* Left column: two stacked rows */}
                  <div className="flex flex-col justify-start">
                    <h3
                      className="font-semibold text-foreground/90 text-lg md:text-lg whitespace-normal md:whitespace-nowrap"
                      style={{ color: "#1E88E5" }}
                    >
                      Machine Learning, Backend
                    </h3>
                    <h1 className="text-projects mt-0 whitespace-normal md:whitespace-nowrap">AI-Powered Richard Wyckoff Trading Assistant</h1>
                  </div>

                  {/* Right column: technologies */}
                  <div className="flex flex-wrap gap-3 items-start w-full md:justify-end">
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
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: "#0277BD", color: "#E6EEF7" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-medium text-foreground/80">
                  Wyckoff Trading Assistant is an intelligent web application that combines cutting-edge artificial intelligence with quantitative trading strategies to help traders analyze stock markets through the lens of Richard Wyckoff's time-tested methodology. Built on Flask and PyTorch, the application features two powerful components: an AI-powered chatbot that leverages a custom-trained Transformer neural network (with 6 encoder-decoder layers and 8 attention heads) to answer complex questions about Wyckoff principles including accumulation, distribution, springs, upthrusts, and market structure analysis; and a Reinforcement Learning trading engine that implements Q-learning algorithms to discover optimal buy/sell/hold strategies through backtesting on historical stock data. The system automatically fetches real-time market data via yfinance, enriches it with technical indicators (Moving Averages, RSI, Bollinger Bands, On-Balance Volume), and visualizes results through an interactive Chart.js dashboard. The chatbot, trained on 1,187 curated Wyckoff Q&A pairs, can intelligently respond to trading methodology queries, while the RL agent learns profitable trading patterns by training across 1,000 episodes, discretizing price-position states into a Q-table to maximize portfolio returns. With fallback mechanisms for both data fetching and model inference, robust error handling, and a responsive web interface, this full-stack application serves as both an educational tool for learning Wyckoff analysis and a practical backtesting platform for evaluating algorithmic trading strategies across any stock symbol with customizable parameters including date ranges and initial capital allocations.
                </p>
              </div>

              {/* Right side: Images */}
              <div className="flex gap-4 items-start">
                <img
                  src="/images/wyckoff/wykoff_chart.png"
                  alt="Wyckoff Chart"
                  className="logo-image"
                />
              </div>
            </div>

            {/* View Project button */}
            <div className="flex justify-start">
              <Link href="/projects">
                <button className="button">
                  View Project
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
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
      
      <br /> <br />
      <div className="col-span-12 md:col-span-8 flex justify-center">
        <Link href="/projects">
          <button className="button-browse-projects">
            Browse All Projects
          </button>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <div className="col-span-12 md:col-span-8 flex justify-center">
        <h1 className="skills-heading  mb-5 text-center text-2xl md:text-5xl">
          My skills
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-16 flex flex-wrap justify-around items-center gap-4 mt- md:mt-0">
          <img src="/images/tech/css.png" alt="Logo" className="skills-image" />
          <img
            src="/images/tech/html.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/java.png"
            alt="Logo"
            className="skills-image"
          />
          <img src="/images/tech/js.png" alt="Logo" className="skills-image" />
          <img src="/images/tech/php.png" alt="Logo" className="skills-image" />
          <img
            src="/images/tech/python.png"
            alt="Logo"
            className="skills-image"
          />
          <img src="/images/tech/sql.png" alt="Logo" className="skills-image" />
          <img
            src="/images/tech/nodejs.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/react.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/angular.png"
            alt="Logo"
            className="skills-image"
          />
             <img
            src="/images/tech/r.png"
            alt="Logo"
            className="skills-image"
          />
        </div>
        <div className="col-span-12 md:col-span-16 flex flex-wrap justify-around items-center gap-4 mt- md:mt-0">
          <img src="/images/tech/ts.png" alt="Logo" className="skills-image" />
          <img
            src="/images/tech/spring.png"
            alt="Logo"
            className="skills-image"
          />
          <img src="/images/tech/c.png" alt="Logo" className="skills-image" />
          <img
            src="/images/tech/csharp.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/postgres.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/javafx.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/mongodb.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/nextjs.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/github.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/intellij.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/extjs.png"
            alt="Logo"
            className="skills-image"
          />
        
        </div>
        <div className="col-span-12 md:col-span-16 flex flex-wrap justify-around items-center gap-4 mt- md:mt-0">
          <img src="/images/tech/graphql.png" alt="Logo" className="skills-image" />
          <img
            src="/images/tech/redis.png"
            alt="Logo"
            className="skills-image"
          />
          <img src="/images/tech/aws.png" alt="Logo" className="skills-image" />
          <img
            src="/images/tech/kafka.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/cassandra.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/rabbitmq.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/vscode.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/elastic.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/kibana.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/tomcat.png"
            alt="Logo"
            className="skills-image"
          />
          <img
            src="/images/tech/openai.png"
            alt="Logo"
            className="skills-image"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="col-span-12 md:col-span-8 flex justify-center">
        <h1 className="skills-heading  mb-5 text-center text-2xl md:text-5xl">
          Testimonials
        </h1>
      </div>
      <Slider testimonials={testimonials} />
      <br />
      <br />
      {/* <h1 className="skills-heading ml-12 mb-5 text-center text-2xl md:text-5xl">
        Blogs
      </h1>

      <div className="flex flex-wrap gap-6 md:gap-4 justify-center mx-4 md:mx-8">
        <Card className="max-w-[300px] mb-4">
          <CardBody>
            <img src="/images/blogs/b1.png" alt="Logo" />
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <CardFooter className="bg-light-gray text-gray-600 p-2">
            <small>June 27, 2024</small>
          </CardFooter>
        </Card>
        <Card className="max-w-[300px] mb-4">
          <CardBody>
            <img src="/images/blogs/b2.png" alt="Logo" />
            <p>Create responsive layouts with ease.</p>
          </CardBody>
          <CardFooter className="bg-light-gray text-gray-600 p-2">
            <small>June 27, 2024</small>
          </CardFooter>
        </Card>
        <Card className="max-w-[300px] mb-4">
          <CardBody>
            <img src="/images/blogs/b3.png" alt="Logo" />
            <p>Utilize powerful CSS utilities for custom designs.</p>
          </CardBody>
          <CardFooter className="bg-light-gray text-gray-600 p-2">
            <small>June 27, 2024</small>
          </CardFooter>
        </Card>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
