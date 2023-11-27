/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Technocolabs Front-End Web Developer Internship",
    description:
      "Worked on a project to create a website for a company that provides services to clients. The website was created using HTML, CSS, JavaScript, and Bootstrap.",
    url: "https://drive.google.com/file/d/1DSjSUK2rK1b0BkxZsUhPiOfSyQ6ZhuOU/view?usp=sharing",
  },
  {
    title: "Microsoft Learn Student Ambassador",
    description:
      "I am a Microsoft Learn Student Ambassador and I am passionate about learning new technologies and sharing my knowledge with others.",
    url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/1b58670c-67a7-4b3a-b9fc-9d35c4e46053",
  },
  {
    title: "My Resume",
    description:
      "This is my resume that have my experiences, Achievements, Position of Responsibilities and Projects.",
    url: "https://drive.google.com/file/d/1gM-NdzyoEg5EMNDGa7WUpUXzHrxQ_kko/view?usp=sharing",
  },
  {
    title: "MedPill - Azure Static Web App",
    description:
      "This is the Video that explain what is my Project, What i have used and how it works.",
    url: "https://youtu.be/q6AnabFthJ0?si=9PgkkBr3c_gpL6il",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
