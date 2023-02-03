import React from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Us
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Get to Know Who We Are
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              We are <span className="text-primary">Lightly,</span> a freelance Web
              Development company
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              Lightly LLC is a premier freelance web development company dedicated to delivering creative and innovative solutions for our clients. We strive to provide the best customer service and top quality work, backed by our continued commitment to excellence. Our team of experienced web developers is passionate about creating powerful and impactful web experiences that make a lasting impression on customers.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              At Lightly LLC, we understand that web development can often present its own unique set of challenges. That's why we strive to provide our clients with the most efficient and effective problem solving solutions possible. We believe in taking a holistic view when it comes to website development, as every project is unique and requires tailored strategies for success. This means that we are more than just coders – we are innovators and strategists who think critically about each and every step of the process. Our team of experienced web developers will work with you to develop the best possible solution to any issue you may encounter. With our comprehensive approach, you can be sure that your website will be designed around your needs and business goals while maximizing user experience and engagement.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Founder & CEO:</span>Casey Golightly Chamberlain
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:caseygchamberlain@gmail.com">caseygchamberlain@gmail.com</a>
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Silicone Slopes,
                  Utah
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download Resume
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
