import Image from "next/image";
import Navbar from "../components/Navbar"; // Ensure this path is correct
import Footer from "../components/Footer"; // Ensure this path is correct
import { Card, CardBody, Button, Slider, CardFooter } from "@nextui-org/react";
import Script from "next/script";
export default function AboutMe() {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto flex flex-col md:flex-row items-center pt-32 px-8 md:px-32 space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-content md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Hello 👋 , <br />I am Pankhuri <br />A Software Engineer
          </h1>
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
            a passionate computer science enthusiast pursuing my Master&#39;s at
            Northeastern University. With four years of software engineering
            experience in India, I&#39;m on a mission to make waves in tech.
            Join me as I chase my dreams of joining FAANG and building my own
            startup!
          </p>
        </div>
        <div className="flex justify-center items-center w-full md:w-auto">
          {/* <button className="logo-button">
            <img
              src="/images/my_projects.png"
              alt="Logo"
              className="w-32 h-32 md:w-40 md:h-40"
            />
          </button> */}
          <div className="circle">
            <div className="logo">
              <div className="text">
                <p>
                  MY PROJECTS {"        "} MY PROJECTS {"        "} MY PROJECTS
                </p>
                <Script
                  id="custom-script"
                  dangerouslySetInnerHTML={{
                    __html: `
            (function() {
              console.log('Custom script executed!');
              const text = document.querySelector('.text p');
              if (text) {
                text.innerHTML = text.innerText.split("").map((char, i) => 
                  \`<span style="transform:rotate(\${i * 9.2}deg)">\${char}</span>\`
                ).join("");
              }
            })();
          `,
                  }}
                />
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
      {/* till */}

      <Footer />
    </div>
  );
}