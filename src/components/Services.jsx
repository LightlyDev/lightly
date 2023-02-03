import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Web Development",
      desc: "We do not create WordPress sites. Stand out with a web application built from the ground up using the most customizable and modern programming languages, frameworks, and technologies available today.",
      icon: "fas fa-laptop",
    },
    {
      name: "SEO Optimization",
      desc: "Your search engine optimization is the difference between your company or your competition's sites becoming visible first to potential clients. Make your first impression, FIRST.",
      icon: "fa-regular fa-eye",
    },
    {
      name: "Graphic Design",
      desc: "With the resources provided by you, Lightly will seamlessly create visuals that will attract the eye to inform, communicate, and captivate your clients. Weather by images, fonts, graphics, or video.",
      icon: "fas fa-photo-film",
    },
    {
      name: "Mobile First Design",
      desc: "Whether your client is viewing from a mobile device or their desktop, Lightly will ensure your web application will have a natural and uninterrupted user interface that is intuitive to use across platforms.",
      icon: "fas fa-mobile-screen-button",
    },
    {
      name: "Business Solution",
      desc: "Let Lightly address and solve your website obstacles to help you stand out. Websites in the modern day are no longer a commodity, they are a necessity. They are the first point of contact to provide your client with your primary information.",
      icon: "fas fa-piggy-bank",
    },
    {
      name: "UI/UX Design",
      desc: "Your user interface or user experience is the difference between a potential client and just another user who exits your site due to the slightest technology complication. Lightly provides a seamless experience for the user.",
      icon: "fas fa-compass-drafting",
    }
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What Does Lightly Offer?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
