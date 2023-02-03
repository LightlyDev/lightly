import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    WEBSITES: "Websites",
    GRAPHICS: "Graphics",
  };

  const projectsData = [
    {
      title: "Food Festival",
      projectInfo:
        "This front-end progressive web application uses service workers to cache assets for offline functionality. Utilizes lazy loading and webpack dependency graphs to keep track of needed bundles for each entry point.",
      client: "Food Festival",
      technologies: "HTML5, CSS, JavaScript, Bootstrap, Webpack, Service Worker",
      industry: "Web Development",
      date: "April 22, 2022",
      url: {
        name: "www.food-festival.com",
        link: "https://kcaseychamberlain.github.io/food-festival/",
      },
      thumbImage: "images/projects/food-festival-demo.jpg",
      sliderImages: [
        "images/projects/food-festival-demo1.jpg",
        "images/projects/food-festival-demo2.jpg",
      ],
      categories: [filters.WEBSITES],
    },
    {
      title: "Lightly LLC",
      projectInfo:
        "Our beloved business site created by our own founder and CEO.",
      client: "Lightly LLC",
      technologies: "HTML5, SCSS, React.js, Bootstrap",
      industry: "Web Development",
      date: "January 12, 2023",
      url: {
        name: "www.elightly.com",
        link: "https://www.elightly.com",
      },
      thumbImage: "images/projects/lightly-demo.jpg",
      sliderImages: [
        "images/projects/lightly-logo.jpg"
      ],
      categories: [filters.WEBSITES],
    },
    {
      title: "Run Buddy",
      projectInfo:
        "This pseudo-front-end web application was built to display the technical ability of pure HTML and CSS.",
      client: "Food Festival",
      technologies: "HTML5, CSS",
      industry: "Web Development",
      date: "December 21, 2021",
      url: {
        name: "www.run-buddy.com",
        link: "https://kcaseychamberlain.github.io/run-buddy/",
      },
      thumbImage: "images/projects/run-buddy-demo.jpg",
      sliderImages: [
        "images/projects/run-buddy-demo1.jpg",
        "images/projects/run-buddy-demo2.jpg",
      ],
      categories: [filters.WEBSITES, filters.BRAND],
    },
    {
      title: "One World Trade",
      projectInfo:
        "Unedited film photography taken of the One World Trade Center, New York City, New York.",
      client: "New York City",
      technologies: "Fuji film photography",
      industry: "Art & Design",
      date: "June 09, 2018",
      url: {
        name: "View",
        link: "https://www.elightly.com/images/projects/one-world.jpg",
      },
      thumbImage: "images/projects/one-world.jpg",
      categories: [filters.GRAPHICS],
    },
    {
      title: "Bry Mount Timpanogos",
      projectInfo:
        "Unedited film photography taken in the saddle of Mount Timpanogos, Utah.",
      client: "Bryant Parker",
      technologies: "Fuji film photography",
      industry: "Art & Design",
      date: "August 01, 2018",
      url: {
        name: "View",
        link: "https://www.elightly.com/images/projects/bryant-timp.jpg",
      },
      thumbImage: "images/projects/bryant-timp.jpg",
      categories: [filters.GRAPHICS],
    },
    {
      title: "Chiefin Downtown",
      projectInfo:
        "Unedited film photography taken in Salt Lake City, Utah parking garage.",
      client: "Heyden Allred",
      technologies: "Fuji film photography",
      industry: "Art & Design",
      date: "January 21, 2018",
      url: {
        name: "View",
        link: "https://www.elightly.com/images/projects/chiefin-downtown.jpg",
      },
      thumbImage: "images/projects/chiefin-downtown.jpg",
      categories: [filters.GRAPHICS],
    },
    {
      title: "Uhoo",
      projectInfo:
        "Through the use of 4 third party APIs, Uhoo is able to display the user's daily intake of information from 4 applications condensed into 1.",
      client: "Uhoo",
      technologies: "HTML5, CSS, Javascript, Bulma, Third Party APIs",
      industry: "Web Development",
      date: "December 21, 2021",
      url: {
        name: "www.uhoo.com",
        link: "https://kcaseychamberlain.github.io/uhoo/",
      },
      thumbImage: "images/projects/uhoo-demo.jpg",
      categories: [filters.WEBSITES],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              Lightly's Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt="Lightly Web Developer Portfolio Piece"
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href="#0"
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >{null}</a>
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
