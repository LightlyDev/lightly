import React from "react";
import Typewriter from "typewriter-effect";

import { BrowserView, MobileView } from 'react-device-detect';

import videobg from "../videos/home.mp4";

const Home = ({ handleNavClick }) => {

  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark" />

        {/* ---------------image background mobile view------------------ */}
        <MobileView>
          <div
            className="hero-bg parallax"
            style={{
              backgroundImage: 'url("images/intro-bg.jpg")'            }}
          ></div>
        </MobileView>
        {/* -------------------video background browser view---------------------- */}
        <BrowserView>
          <div className="player hero-bg parallax">
            <video
              src={videobg}
              autoPlay
              muted
              loop
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            ></video>
          </div>
        </BrowserView>

        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">Welcome</p>
                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                  <Typewriter
                    options={{
                      strings: [
                        "We are Lightly LLC.",
                        "We are Web Development.",
                        "We are your Web Solution.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                <p className="text-5 text-light mb-4">
                  based out of Raleigh, North Carolina.z
                </p>
                <a
                  href="#contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                >
                  Hire Lightly
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
