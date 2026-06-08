import { FaListUl, FaDatabase } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { BsStars } from "react-icons/bs";

function About() {
  const highlights = [
    {
      icon: <BsStars />,
      title: "Anime Discovery",
      text: "Browse trending and popular anime with a clean and modern premium interface.",
    },
    {
      icon: <FaListUl />,
      title: "Detailed Pages",
      text: "Explore anime details, trailers, genres, and important information in one place.",
    },
    {
      icon: <FaDatabase />,
      title: "Watchlist CRUD",
      text: "Add, remove, and manage your watchlist with simple and practical CRUD operations.",
    },
    {
      icon: <MdOutlinePhoneIphone />,
      title: "Responsive UI",
      text: "Enjoy a smooth experience across desktop, tablet, and mobile devices.",
    },
  ];

const techStack = [
    "React",
    "React Router",
    "JavaScript",
    "CSS",
    "REST API",
  ];

return (
    <section className="section about-premium-section">
      <div className="container about-page-container">
        <div className="about-premium-hero fade-up">
          <span className="about-badge">About Animeverse</span>
          <h1 className="about-main-title">A Modern Anime Discovery Platform</h1>
          <p className="about-lead">
            Animeverse is a React-based web application designed to help users
            discover anime, explore details, manage a watchlist, and enjoy a
            modern premium user experience.
          </p>
          <p className="about-lead secondary">
            This project combines anime exploration with clean UI design,
            practical features, and a polished frontend experience.
          </p>
        </div>

<div className="about-dual-grid fade-up">
          <div className="about-info-card">
            <h2>Why Choose Animeverse?</h2>
            <p>
              Animeverse is built for anime fans who want a simple, stylish, and
              modern platform to discover new titles and explore detailed anime
              information without clutter.
            </p>
            <p>
              It focuses on clean layouts, smooth navigation, useful watchlist
              features, and a premium dark theme that makes browsing more
              enjoyable.
            </p>
          </div>

<div className="about-info-card">
            <h2>Our Mission</h2>
            <p>
              Our mission is to create an engaging anime discovery experience
              that feels modern, fast, and visually appealing across all
              devices.
            </p>
            <p>
              Animeverse aims to combine strong frontend development practices
              with practical user features, making anime browsing both useful
              and enjoyable.
            </p>
          </div>
        </div>

<div className="about-feature-grid fade-up">
          {highlights.map((item, index) => (
            <div className="about-feature-card" key={index}>
              <div className="about-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

<div className="premium-tech-stack fade-up">
          <h2 className="section-title">Tech Stack</h2>
          <div className="tech-tags">
            {techStack.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>

<div className="about-content-block fade-up">
          <h2 className="section-title">Project Goal</h2>
          <p>
            The goal of Animeverse is to combine anime exploration with modern
            React development practices. It showcases routing, reusable UI
            components, API usage, watchlist features, and responsive design in
            one polished project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
