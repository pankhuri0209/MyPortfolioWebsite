import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar"; // Ensure this path is correct
import Footer from "../components/Footer"; // Ensure this path is correct
import Script from "next/script";
import { Card, CardBody, Button, Slider, CardFooter } from "@nextui-org/react";

const ElderlyCarePage = () => {
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
              <span style={{ color: "#F9629F" }}>Full Stack</span>
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            ElderlyCare
          </h1>
          <br />
          <br />
          <div className="w-full mt-8 md:mt-0">
            <p>
              A web-based solution aimed at addressing the global challenge of
              an aging population, resulting in significant improvements in
              accessibility to healthcare services for elderly individuals
              Designed and implemented EC-Buddy AI assistant feature,
              facilitating a high volume of doctor appointments tailored to
              elderly individuals needs. Empowered doctors with real-time access
              to appointments, enhancing operational efficiency and patient
              satisfaction
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full md:w-1/3 md:ml-8">
          <div className="mb-4 ml-50 md:ml-60">
            <h3 className="font-semibold text-foreground/90">Date</h3>
            <p className="text-small text-foreground/80">17 April 2024</p>
          </div>
          <div className="mb-4 ml-50 md:ml-60">
            <h3 className="font-semibold text-foreground/90">Project Type</h3>
            <p className="text-small text-foreground/80">Web Design Course</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container mx-auto px-8 md:px-32">
        <div className="flex justify-center">
          <img
            src="images/elderlycare/pic1.png" // Update the path to your image
            alt="Elderly care"
            className="w-full max-w-3xl rounded-lg shadow-lg"
          />
        </div>
        <br />
        <br />
        {/* <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Commodo occaecat
          </h2>
          <p className="mt-4">
            Non dolore magna ut nisi duis magna minim nulla anim laborum cillum
            incididunt. Minim excepteur sit dolore elit labore magna aute
            consectetur dolor cillum non aliqua sint labore laboris tempor
            occaecat laboris aliqua. Irure non ullamco sit amet aliquip officia
            duis es.
          </p>
        </div> */}
      </div>
      <br />

      {/* New Section for Image and Additional Content */}
      <div className="container mx-auto px-8 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src="images/elderlycare/pic2.png" // Update the path to your image
              alt="Elderly care"
              className="w-full max-w-s  rounded-lg shadow-lg"
              style={{ maxWidth: "1000px" }}
            />
          </div>
          <div className="flex justify-center">
            <img
              src="images/elderlycare/pic3.png" // Update the path to your image
              alt="Elderly care"
              className="w-full max-w-s  rounded-lg shadow-lg"
              style={{ maxWidth: "300px" }}
            />
          </div>
        </div>
        <br />
        <br />
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold">Features</h2>
          <ul className="features-list">
            <li>
              <div>
                <div className="feature-title">User Registration:</div>
                Elderly individuals can effortlessly register on the platform to
                access a wide array of services tailored to their needs.
              </div>
            </li>
            <li>
              <div>
                <div className="feature-title">EC Buddy:</div>
                This feature leverages ChatGPT APIs and React technology to
                provide users with immediate assistance for their health-related
                concerns. Users can ask health-related questions and receive
                personalized responses and solutions.
              </div>
            </li>
            <li>
              <div>
                <div className="feature-title">Language Support:</div>
                To cater to diverse linguistic needs, ElderlyCare integrates
                i18next, ensuring that users can access services in their
                preferred language.
              </div>
            </li>
            <li>
              <div>
                <div className="feature-title">Doctor Dashboard:</div>
                This feature empowers healthcare professionals with insightful
                analytics based on patient appointments. Doctors can update
                patient statuses and manage their profiles with ease.
              </div>
            </li>
            <li>
              <div>
                <div className="feature-title">Elderly Booking Platform:</div>
                Elderly users can book appointments with doctors, search for
                doctors based on location, experience, and ratings, and access
                personalized healthcare services.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="video-container">
        <h2 className="skills-heading ml-12 mb-5 text-center text-xl md:text-4xl">
          Learn More About ElderlyCare
        </h2>
        <br />
        <br />
        <video width="600" controls>
          <source src="images/elderlycare/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex justify-center mt-16 w-full">
        <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 w-full max-w-[1150px] rounded-none"
          shadow="sm"
          style={{ backgroundColor: "#F6FBF0FF" }}
        >
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
              <div className="flex justify-center md:justify-end">
                <img
                  src="/images/sample/t1.png"
                  alt="Logo"
                  className="w-50 h-50 md:w-auto md:h-auto"
                />
              </div>

              <div className="flex flex-col items-center md:items-start">
                <h2
                  className="font-semibold text-foreground/90 text-2xl"
                  style={{ color: "#E34D73FF" }}
                >
                  Testimonials
                </h2>
                <p className="life-motto-p mt-4 text-center md:text-left">
                  Excellent idea and product
                </p>{" "}
                <br />
                <p className="life-motto-p mt-4 text-center md:text-left">
                  -Professor
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <br />
      <br />
      <div className="content-wrapper px-4 md:px-12 py-8">
        <div className="text-center md:text-left">
          <h2 className="skills-heading mb-5 text-2xl md:text-4xl">
            References
          </h2>
          <ul className="reference-list space-y-4">
            <li>
              <div>
                <div className="reference-title text-lg md:text-xl font-semibold">
                  GitHub:
                </div>
                <a
                  href="https://github.com/pankhuri0209/elderlycare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 break-words"
                >
                  https://shorturl.at/cP7jf
                </a>
              </div>
            </li>
            <li>
              <div>
                <div className="reference-title text-lg md:text-xl font-semibold">
                  Figma Design:
                </div>
                <a
                  href="https://app.visily.ai/projects/9d71d03e-34a4-43c9-9b98-0e2d1faeff08/boards/852039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 break-words"
                >
                  https://shorturl.at/eS8bZ
                </a>
              </div>
            </li>
            <li>
              <div>
                <div className="reference-title text-lg md:text-xl font-semibold">
                  LinkedIn:
                </div>
                <a
                  href="https://www.linkedin.com/posts/pankhurigupta0209_elderlyassistance-webdesign-activity-7190042012178395136-pPC7?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 break-words"
                >
                  https://shorturl.at/yKcBJ
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <br />
      <br />
      {/* <h1 className="skills-heading ml-12 mb-5 text-center text-2xl md:text-5xl">
        Other Projects
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
      </div>
      <br />
      <br /> */}
      <Footer />
    </div>
  );
};

export default ElderlyCarePage;
