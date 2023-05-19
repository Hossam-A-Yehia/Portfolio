import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/port/Happy Shoppng.png";
import IMG2 from "../../assets/port/Admin Dahboardpng.png";
import IMG3 from "../../assets/port//Auto Fixpng.png";
import IMG4 from "../../assets/port/Screenshot (15).png";
import IMG5 from "../../assets/port/React Apppng.png";
import IMG6 from "../../assets/port/Momery Gamepng.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "E-commerce Happy Shop (MERN STACK)",
    github: "https://github.com/Hossam-A-Yehia/Happy-Shop-Main-Site-React-JS",
    demo: "https://happy-shop7.vercel.app/",
    vidoe:
      "https://res.cloudinary.com/dimy2zhcs/video/upload/v1682780362/Vidoe/happy-shop_nkqhd1.mp4",
  },
  {
    id: 2,
    image: IMG2,
    title: "E-commerce Dashboard (MERN STACK)",
    github: "https://github.com/Hossam-A-Yehia/Happy-Shop-Dashboard-React-JS",
    demo: "https://happy-shop-dash.netlify.app//",
    vidoe:
      "https://res.cloudinary.com/dimy2zhcs/video/upload/v1682780050/Vidoe/happy-shop-dashboard_bftx1h.mp4",
  },
  {
    id: 3,
    image: IMG3,
    title: "Car maintenance (MERN STACK)",
    github: "https://github.com/Hossam-A-Yehia/Cars-fix-Front-end-React-JS",
    demo: "https://serv4cars.vercel.app/",
    vidoe:
      "https://res.cloudinary.com/dimy2zhcs/video/upload/v1683455065/Vidoe/bandicam_2023-05-07_12-39-29-240_j3yyrg.mp4",
  },
  {
    id: 4,
    image: IMG4,
    title: "Blog Faker (MERN STACK)",
    github: "https://github.com/Hossam-A-Yehia/Blog-Front-end-React-JS",
    demo: "https://blog-faker.netlify.app/",
    vidoe:
      "https://res.cloudinary.com/dimy2zhcs/video/upload/v1682780042/Vidoe/Blog_yibb7y.mp4",
  },
  {
    id: 5,
    image: IMG5,
    title: "Simple Movies App (React Js)",
    github: "https://github.com/Hossam-A-Yehia/Simple-Movies-App-React-JS",
    demo: "https://movies-app39.netlify.app/",
    vidoe:
      "https://res.cloudinary.com/dimy2zhcs/video/upload/v1682779532/Vidoe/Movies_App_nvbikn.mp4",
  },
  {
    id: 6,
    image: IMG6,
    title: "Memory Game (HTML-CSS-JS)",
    github: "https://github.com/Hossam-A-Yehia/Momery-Game-HTML-CSS-JS",
    demo: "https://momery-game-html-css-js.vercel.app/",
    vidoe:
      "https://res.cloudinary.com/dimy2zhcs/video/upload/v1682779463/Vidoe/momery_Game_gxbkto.mp4",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className=" container portfolio__container">
        {data.map((e) => (
          <article key={e.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={e.image} alt="" />
            </div>
            <h3 style={{ fontSize: "16px" }}>{e.title}</h3>
            <div className="portfolio__item-cta">
              <a href={e.github} className="btn" target="_blank">
                Github
              </a>
              <a href={e.demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
              <a href={e.vidoe} className="btn" target="_blank">
                Video
              </a>
            </div>
          </article>
        ))}
      </div>
      <a
        href="https://github.com/Hossam-A-Yehia?tab=repositories"
        className="btn btn-primary custem"
        target="_blank"
      >
        More Projects
      </a>
    </section>
  );
}

export default Portfolio;
